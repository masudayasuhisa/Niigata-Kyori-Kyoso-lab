import { client } from '../../libs/client';

export default async function TestCmsPage() {
    // Fetch data from microCMS (assuming an API endpoint named 'news')
    let data;
    let errorMsg = null;

    try {
        data = await client.get({ endpoint: 'news' });
    } catch (error) {
        errorMsg = error.message;
    }

    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>microCMS 連携テスト</h1>

            {errorMsg ? (
                <div style={{ color: 'red', marginTop: '1rem' }}>
                    <h2>エラーが発生しました</h2>
                    <p>{errorMsg}</p>
                    <p>
                        <b>ヒント:</b><br />
                        1. <code>.env.local</code>ファイルが存在し、正しい値がセットされているか確認してください。<br />
                        2. microCMS上に「news」（お知らせ）という名前のAPIを作成しているか確認してください。<br />
                        3. サーバーを再起動（Ctrl+Cして、もう一度<code>npm run dev</code>）してください。
                    </p>
                </div>
            ) : (
                <div style={{ marginTop: '1rem' }}>
                    <h2>データの取得に成功しました！🎉</h2>
                    <ul>
                        {data?.contents.map((item) => (
                            <li key={item.id} style={{ marginBottom: '1rem', border: '1px solid #ddd', padding: '1rem' }}>
                                <h3>{item.title}</h3>
                                <div dangerouslySetInnerHTML={{ __html: item.content }} />
                            </li>
                        ))}
                    </ul>

                    {(!data?.contents || data.contents.length === 0) && (
                        <p>データがありません。microCMSの管理画面から記事を1件公開してみてください。</p>
                    )}
                </div>
            )}
        </div>
    );
}
