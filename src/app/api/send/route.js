import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const { type, name, company, email, tel, content } = await req.json();

        const data = await resend.emails.send({
            from: 'Niigata Kyori Kyosho Lab <onboarding@resend.dev>', // Or verified domain
            to: ['info@niigata-exp.jp'], // The recipient address
            subject: `【お問い合わせ】${type} - ${name}様`,
            html: `
                <h2>新しいお問い合わせが届きました</h2>
                <p><strong>お問い合わせ種別:</strong> ${type}</p>
                <p><strong>お名前:</strong> ${name}</p>
                <p><strong>貴社名・団体名:</strong> ${company || '未入力'}</p>
                <p><strong>メールアドレス:</strong> ${email}</p>
                <p><strong>お電話番号:</strong> ${tel || '未入力'}</p>
                <br />
                <p><strong>内容:</strong></p>
                <p style="white-space: pre-wrap;">${content}</p>
            `,
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
