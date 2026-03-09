import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container" style={pageStyle}>
      <h1 style={titleStyle}>プライバシーポリシー</h1>
      <div style={cardStyle}>
        <p>「にいがた郷里共創ラボ」（以下「当組織」）は、本Webサイト上で提供するサービスにおける、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」）を定めます。</p>
        
        <h2 style={h2Style}>1. 個人情報の収集方法</h2>
        <p>当組織は、ユーザーがお問い合わせフォームを利用する際に、氏名、メールアドレス、電話番号などの個人情報を収集することがあります。</p>

        <h2 style={h2Style}>2. 個人情報の利用目的</h2>
        <p>収集した個人情報は、以下の目的で利用いたします。</p>
        <ul>
          <li>お問い合わせへの回答および資料の送付</li>
          <li>サービスの改善、新サービスの開発</li>
          <li>法令に基づき必要とされる場合</li>
        </ul>

        <h2 style={h2Style}>3. 個人情報の第三者提供</h2>
        <p>当組織は、法令に定める場合を除き、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。</p>

        <h2 style={h2Style}>4. お問い合わせ窓口</h2>
        <p>本ポリシーに関するお問い合わせは、お問い合わせフォームよりお願いいたします。</p>
      </div>
    </div>
  );
};

const pageStyle = { paddingTop: '150px', paddingBottom: '100px', maxWidth: '900px', margin: '0 auto' };
const titleStyle = { fontSize: '2rem', marginBottom: '40px', textAlign: 'center' };
const cardStyle = { backgroundColor: '#fff', padding: '40px', borderRadius: '8px', border: '1px solid #eee', lineHeight: '1.8' };
const h2Style = { fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px' };

export default PrivacyPolicy;
