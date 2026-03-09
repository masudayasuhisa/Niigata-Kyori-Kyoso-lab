import React from 'react';

const Footer = ({ setPage }) => {
  return (
    <footer style={footerStyle}>
      <div className="container">
        <div style={footerGridStyle}>
          <div style={footerMainStyle}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>にいがた郷里共創ラボ</h2>
            <p style={{ opacity: 0.8, fontSize: '0.9rem', maxWidth: '300px' }}>
              新潟の教育価値と地域の未来を共に創る。<br />
              農村ホームステイと地域体験を通じて、忘れられない感動をお届けします。
            </p>
          </div>
          <div style={footerLinksWrapperStyle}>
            <div style={linkGroupStyle}>
              <h4 style={groupTitleStyle}>メニュー</h4>
              <ul style={linkListStyle}>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setPage('home'); }}>ホーム</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setPage('experiences'); }}>体験プログラム</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setPage('plans'); }}>周遊プラン</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setPage('farmstay'); }}>農村ホームステイ</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setPage('supporter'); }}>企業サポーター</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setPage('contact'); }}>お問い合わせ</a></li>
              </ul>
            </div>
            <div style={linkGroupStyle}>
              <h4 style={groupTitleStyle}>サポート</h4>
              <ul style={linkListStyle}>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setPage('privacy'); }}>プライバシーポリシー</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setPage('contact'); }}>よくある質問</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setPage('home'); }}>運営組織について</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div style={footerBottomStyle}>
          <p>© 2026 にいがた郷里共創ラボ / Niigata Kyori Kyoso Lab.</p>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#0a0f12',
  color: 'white',
  padding: '120px 0 60px',
  marginTop: 'auto',
};

const footerGridStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '60px',
  marginBottom: '80px',
};

const footerMainStyle = { flex: '1.5', minWidth: '300px' };
const footerLinksWrapperStyle = { flex: '2', display: 'flex', justifyContent: 'flex-end', gap: '100px', flexWrap: 'wrap' };
const linkGroupStyle = { minWidth: '150px' };
const groupTitleStyle = { fontSize: '1.2rem', marginBottom: '30px', fontWeight: '900', letterSpacing: '1px' };
const linkListStyle = { display: 'flex', flexDirection: 'column', gap: '15px', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' };
const footerBottomStyle = { paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', fontSize: '0.8rem', opacity: 0.4, letterSpacing: '1px' };

export default Footer;
