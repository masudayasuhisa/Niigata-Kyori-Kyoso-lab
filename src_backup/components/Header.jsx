import React from 'react';

const Header = ({ setPage }) => {
  return (
    <header style={headerStyle} className="glass-header">
      <div className="container" style={navWrapperStyle}>
        <div style={logoStyle} onClick={() => setPage('home')}>
          にいがた郷里共創ラボ
        </div>
        <nav>
          <ul style={navLinksStyle}>
            <li className="nav-item"><a href="#" onClick={(e) => { e.preventDefault(); setPage('experiences'); }}>体験</a></li>
            <li className="nav-item"><a href="#" onClick={(e) => { e.preventDefault(); setPage('farmstay'); }}>宿泊</a></li>
            <li className="nav-item"><a href="#" onClick={(e) => { e.preventDefault(); setPage('home'); }}>地域</a></li>
            <li className="nav-item"><a href="#" onClick={(e) => { e.preventDefault(); setPage('plans'); }}>周遊プラン</a></li>
            <li className="nav-item"><a href="#" onClick={(e) => { e.preventDefault(); setPage('farmstay'); }} style={accentLinkStyle}>農村ホームステイ</a></li>
            <li className="nav-item"><a href="#" onClick={(e) => { e.preventDefault(); setPage('supporter'); }}>企業サポーター</a></li>
          </ul>
        </nav>
        <div style={snsIconsStyle}>
          <span style={snsIconStyle}>🔲</span>
          <span style={snsIconStyle}>📸</span>
        </div>
      </div>
    </header>
  );
};

const headerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 1000,
  height: '90px',
  display: 'flex',
  alignItems: 'center',
};

const navWrapperStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
};

const logoStyle = {
  fontSize: '1.4rem',
  fontWeight: '900',
  color: 'var(--primary-color)',
  cursor: 'pointer',
  letterSpacing: '-1px',
};

const navLinksStyle = {
  display: 'flex',
  gap: '30px',
  fontSize: '0.9rem',
  fontWeight: '700',
  letterSpacing: '0.5px',
};

const accentLinkStyle = {
  color: 'var(--accent-color)',
  borderBottom: '2px solid var(--accent-color)',
  paddingBottom: '5px',
};

const snsIconStyle = {
  cursor: 'pointer',
  opacity: 0.7,
  transition: 'var(--transition-smooth)',
};

const snsIconsStyle = {
  display: 'flex',
  gap: '20px',
  fontSize: '1.3rem',
};

export default Header;
