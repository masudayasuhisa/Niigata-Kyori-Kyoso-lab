'use client';

import React from 'react';
import Link from 'next/link';

const IS_LP_MODE = true; // Set to false to show full site footer links

const Footer = ({ setPage }) => {
  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-main">

            <h2 style={{ fontSize: '1.6rem', fontWeight: '900', marginBottom: '25px', color: 'white' }}>にいがた<span style={{ color: 'var(--accent)' }}>郷里</span>共創ラボ</h2>
            <p style={{ opacity: 0.7, fontSize: '0.95rem', lineHeight: '1.8', maxWidth: '350px' }}>
              新潟の教育価値と地域の未来を共に創る。<br />
              農村ホームステイと地域体験を通じて、世代を超えた感動と学びをお届けします。
            </p>
          </div>
          <div className="footer-links-wrapper">

            {!IS_LP_MODE && (
              <div className="link-group footer-links">
                <h4 style={groupTitleStyle}>メニュー</h4>
                <ul style={linkListStyle}>
                  <li><Link href="/">ホーム</Link></li>
                  <li><Link href="/experiences">体験プログラム</Link></li>
                  <li><Link href="/plans">周遊プラン</Link></li>
                  <li><Link href="/farm-stay">農村ホームステイ</Link></li>
                  <li><Link href="/supporter">企業サポーター</Link></li>
                  <li><Link href="/contact">お問い合わせ</Link></li>
                </ul>
              </div>
            )}
            <div className="link-group footer-links">
              <h4 style={groupTitleStyle}>サポート</h4>
              <ul style={linkListStyle}>
                <li><Link href="/privacy">プライバシーポリシー</Link></li>
                {!IS_LP_MODE && (
                  <>
                    <li><Link href="/contact">よくある質問</Link></li>
                    <li><Link href="/">運営組織について</Link></li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 にいがた郷里共創ラボ <span className="footer-copy-en">Niigata Kyori Kyoso Lab.</span></p>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: 'var(--bg-dark)',
  color: 'white',
  padding: '120px 0 60px',
  marginTop: 'auto',
  borderTop: '1px solid rgba(255,255,255,0.05)',
};

const footerGridStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '60px',
  marginBottom: '80px',
};

// Footer styles moved to index.css for better responsiveness
const groupTitleStyle = { fontSize: '1.2rem', marginBottom: '30px', fontWeight: '900', letterSpacing: '1px' };
const linkListStyle = { display: 'flex', flexDirection: 'column', gap: '15px', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', listStyle: 'none', padding: 0, margin: 0 };

export default Footer;
