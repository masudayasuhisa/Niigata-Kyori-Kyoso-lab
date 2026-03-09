'use client';

import React from 'react';
import { database } from '../data/database';
import useReveal from '../hooks/useReveal';
import Link from 'next/link';

const Supporter = () => {
  const { supporter } = database;
  useReveal();

  return (
    <div style={pageWrapperStyle}>
      <section style={heroSectionStyle} className="section-padding-sm">
        <div className="container fade-in-up">
          <div style={tagStyle}>CORPORATE PARTNER</div>
          <h1 style={h1Style} className="mobile-font-size-lg">{supporter.hero.title}</h1>
          <p style={subStyle}>{supporter.hero.subtitle}</p>
        </div>
      </section>

      <section style={benefitSectionStyle} className="reveal section-padding-sm">
        <div className="container">
          <h2 style={sectionTitleStyle} className="mobile-font-size-lg">サポーター・企業連携のメリット</h2>
          <div style={benefitGridStyle} className="responsive-grid">
            {supporter.benefits.map(benefit => (
              <div key={benefit.id} style={benefitCardStyle}>
                <div style={iconStyle}>✓</div>
                <h3 style={benefitTitleStyle}>{benefit.title}</h3>
                <p style={benefitDescStyle}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={contactSectionStyle} className="reveal">
        <div className="container" style={contactContainerStyle}>
          <h2 style={contactTitleStyle}>お問い合わせ</h2>
          <p style={contactTextStyle}>{supporter.contact}</p>
          <Link href="/contact">
            <button className="btn btn-primary" style={{ marginTop: '30px' }}>連携について相談する</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

// Styles
const pageWrapperStyle = { paddingTop: '90px' };
const heroSectionStyle = {
  background: 'linear-gradient(135deg, #0f766e 0%, #115e59 100%)',
  color: 'white',
  padding: '140px 0',
  textAlign: 'center',
};
const tagStyle = { display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.2)', padding: '5px 15px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '20px' };
const h1Style = { fontSize: '3.5rem', fontWeight: '900', marginBottom: '20px', lineHeight: '1.2' };
const subStyle = { fontSize: '1.3rem', opacity: 0.9 };

const benefitSectionStyle = { padding: '120px 0', backgroundColor: '#fff' };
const sectionTitleStyle = { textAlign: 'center', fontSize: '2.5rem', fontWeight: '800', marginBottom: '80px', color: 'var(--primary)' };
const benefitGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' };
const benefitCardStyle = { padding: '50px 40px', backgroundColor: 'white', borderRadius: 'var(--border-radius)', textAlign: 'center', transition: 'var(--transition-premium)', boxShadow: 'var(--glass-shadow)', border: '1px solid rgba(0,0,0,0.05)' };
const iconStyle = { fontSize: '2.5rem', color: 'var(--accent)', marginBottom: '30px' };
const benefitTitleStyle = { fontSize: '1.5rem', fontWeight: '900', marginBottom: '20px', color: 'var(--primary)' };
const benefitDescStyle = { color: 'var(--text-light)', lineHeight: '1.8', opacity: 0.8 };

const contactSectionStyle = { padding: '100px 0', backgroundColor: '#f0f4f8' };
const contactContainerStyle = { maxWidth: '800px', margin: '0 auto', textAlign: 'center' };
const contactTitleStyle = { fontSize: '2.2rem', marginBottom: '30px' };
const contactTextStyle = { fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-light)' };

export default Supporter;
