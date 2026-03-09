'use client';

import React from 'react';
import Link from 'next/link';
import heroImg from '../assets/hero_tanada.png';

const Hero = () => {
  return (
    <section style={heroSectionStyle}>
      <div style={heroImageWrapperStyle}>
        <img src={heroImg.src || heroImg} alt="新潟の棚田" style={heroImgStyle} />
        <div style={overlayStyle}></div>
      </div>

      <div className="container" style={heroContentStyle}>
        <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="section-tag" style={{ color: 'rgba(255,255,255,0.8)' }}>NIIGATA KYORI KYOSO LAB</span>
          <h1 style={headlineStyle}>
            新潟の「農村」を、<br />
            教育と感動の舞台へ。
          </h1>
          <p style={subtitleStyle}>
            地域体験プログラムと農村ホームステイの統合プラットフォーム。<br />
            ありのままの暮らしが、子どもたちの成長を支えます。
          </p>

          <div style={searchOptionsStyle}>
            <Link href="/experiences">
              <button className="btn btn-primary" style={heroBtnStyle}>体験を探す ➔</button>
            </Link>
            <Link href="/farm-stay">
              <button className="btn" style={heroBtnSecondaryStyle}>宿泊施設を探す</button>
            </Link>
            <Link href="/#region">
              <button className="btn" style={heroBtnSecondaryStyle}>地域から探す</button>
            </Link>
          </div>
        </div>
      </div>

      <div style={scrollDownStyle}>
        <span>SCROLL</span>
        <div style={scrollLineStyle}></div>
      </div>
    </section>
  );
};

const heroSectionStyle = {
  height: '100vh',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  color: 'white',
};

const heroImageWrapperStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
};

const heroImgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transformOrigin: 'center',
  animation: 'kenBurns 20s linear infinite alternate',
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.4) 50%, rgba(15, 23, 42, 0) 100%)',
};

const heroContentStyle = {
  position: 'relative',
  zIndex: 1,
  maxWidth: '800px',
};

const headlineStyle = {
  fontSize: '4.5rem',
  fontWeight: '800',
  marginBottom: '30px',
  lineHeight: '1.1',
  letterSpacing: '-1.5px',
};

const subtitleStyle = {
  fontSize: '1.25rem',
  lineHeight: '1.8',
  marginBottom: '50px',
  opacity: 0.9,
  maxWidth: '600px',
};

const searchOptionsStyle = {
  display: 'flex',
  gap: '15px',
  flexWrap: 'wrap',
};

const heroBtnStyle = {
  padding: '20px 45px',
  fontSize: '1.1rem',
};

const heroBtnSecondaryStyle = {
  padding: '18px 30px',
  backgroundColor: 'rgba(255,255,255,0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.3)',
  color: 'white',
};

const scrollDownStyle = {
  position: 'absolute',
  bottom: '40px',
  right: '40px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  fontSize: '0.9rem',
  fontWeight: 'bold',
  letterSpacing: '3px',
  opacity: 1,
  textShadow: '0 2px 4px rgba(0,0,0,0.5)',
};

const scrollLineStyle = {
  width: '3px',
  height: '60px',
  backgroundColor: 'white',
  boxShadow: '0 0 5px rgba(0,0,0,0.5)',
  animation: 'scrollLine 2s ease-in-out infinite',
};

export default Hero;
