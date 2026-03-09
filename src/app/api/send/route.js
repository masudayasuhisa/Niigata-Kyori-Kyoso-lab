import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const { name, email, content, captchaToken } = await req.json();

        // 1. reCAPTCHA verification
        const isDevelopment = process.env.NODE_ENV === 'development';
        if (process.env.RECAPTCHA_SECRET_KEY && captchaToken) {
            const verifyRes = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`, {
                method: 'POST'
            });
            const verifyData = await verifyRes.json();

            // In development, we log but don't block if reCAPTCHA fails (often due to localhost not being registered)
            if (!verifyData.success || (verifyData.score !== undefined && verifyData.score < 0.5)) {
                console.warn('reCAPTCHA verification failed:', verifyData);
                if (!isDevelopment) {
                    return Response.json({ error: 'System detected automated activity', details: verifyData }, { status: 403 });
                }
                console.info('Proceeding anyway because NODE_ENV is development.');
            }
        }

        // 2. Send emails via Resend
        if (!process.env.RESEND_API_KEY) {
            console.error('ERROR: RESEND_API_KEY is missing!');
            return Response.json({ error: 'Server configuration error' }, { status: 500 });
        }

        console.log(`Sending emails for ${name} (${email})...`);

        // 2.a Notification to Lab
        const notificationPromise = resend.emails.send({
            from: 'Niigata Kyori Kyosho Lab <info@niigata-exp.jp>',
            to: ['info@niigata-exp.jp'],
            subject: `【Web問い合わせ】${name}様より`,
            html: `
                <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 30px; border-radius: 10px;">
                    <h2 style="color: #267A4D; border-bottom: 2px solid #267A4D; padding-bottom: 10px;">新しいお問い合わせ</h2>
                    <p style="margin-bottom: 20px;">Webサイトのフォームより、以下の内容でお問い合わせが届きました。</p>
                    
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">お名前</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${name} 様</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">メールアドレス</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
                        </tr>
                    </table>
                    
                    <div style="margin-top: 30px;">
                        <p style="font-weight: bold; color: #267A4D; margin-bottom: 10px;">お問い合わせ内容:</p>
                        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; white-space: pre-wrap;">${content}</div>
                    </div>
                </div>
            `,
        });

        // 2.b Auto-reply to User
        const autoReplyPromise = resend.emails.send({
            from: 'Niigata Kyori Kyosho Lab <info@niigata-exp.jp>',
            to: [email],
            subject: '【新潟郷里共創ラボ】お問い合わせありがとうございます',
            html: `
                <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 30px; border-radius: 10px;">
                    <h2 style="color: #267A4D; border-bottom: 2px solid #267A4D; padding-bottom: 10px;">お問い合わせありがとうございます</h2>
                    <p>${name} 様</p>
                    <p>この度は、新潟郷里共創ラボへお問い合わせいただき、誠にありがとうございます。<br>
                    以下の内容で承りました。</p>
                    
                    <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
                        <p style="font-weight: bold; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-bottom: 10px;">お問い合わせ内容の控え</p>
                        <div style="white-space: pre-wrap;">${content}</div>
                    </div>
                    
                    <p>内容を確認の上、担当者より改めてご連絡させていただきます。<br>
                    今しばらくお待ちいただけますと幸いです。</p>
                    
                    <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
                    
                    <div style="font-size: 0.9rem; color: #666;">
                        <p><strong>新潟郷里共創ラボ</strong><br>
                        URL: <a href="https://niigata-exp.jp">https://niigata-exp.jp</a><br>
                        Email: info@niigata-exp.jp</p>
                    </div>
                </div>
            `,
        });

        const [notifResult, replyResult] = await Promise.all([notificationPromise, autoReplyPromise]);

        if (notifResult.error || replyResult.error) {
            console.error('Email sending error:', { notif: notifResult.error, reply: replyResult.error });
            return Response.json({ error: notifResult.error || replyResult.error }, { status: 400 });
        }

        return Response.json({ success: true, data: notifResult.data });
    } catch (error) {
        console.error('Unexpected error in API route:', error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}
