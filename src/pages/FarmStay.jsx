'use client';

import React, { useState, useRef } from 'react';
import { database } from '../data/database';
import useReveal from '../hooks/useReveal';
import heroImg from '../assets/minpaku/hero.jpg';
import hero2Img from '../assets/minpaku/hero2.jpg';
import hero3Img from '../assets/minpaku/hero3.jpg';
import hero4Img from '../assets/minpaku/hero4.jpg';
import hero5Img from '../assets/minpaku/hero5.jpg';
import conceptImg from '../assets/minpaku/concept.jpg';
import case1Img from '../assets/minpaku/case1.jpg';
import case2Img from '../assets/minpaku/case2.jpg';
import aga1Img from '../assets/minpaku/aga-1.jpg';
import aga2Img from '../assets/minpaku/aga-2.jpg';
import aga3Img from '../assets/minpaku/aga-3.jpg';
import placeholder1Img from '../assets/minpaku/placeholder1.jpg';
import placeholder2Img from '../assets/minpaku/placeholder2.jpg';
import placeholder3Img from '../assets/minpaku/placeholder3.jpg';
import tainai1Img from '../assets/minpaku/tainai-1.jpg';
import tainai2Img from '../assets/minpaku/tainai-2.jpg';
import tainai3Img from '../assets/minpaku/tainai-3.jpg';
import myoko1Img from '../assets/minpaku/myoko-1.jpg';
import myoko2Img from '../assets/minpaku/myoko-2.jpg';
import myoko3Img from '../assets/minpaku/myoko-3.jpg';
import tokamachi1Img from '../assets/minpaku/tokamachi-1.jpg';
import tokamachi2Img from '../assets/minpaku/tokamachi-2.jpg';
import tokamachi3Img from '../assets/minpaku/tokamachi-3.jpg';

import activityGroupImg from '../assets/minpaku/activity_group_new.png';
import activityCookingImg from '../assets/minpaku/activity_cooking_new.png';
import activityChoresImg from '../assets/minpaku/activity_chores_new.png';
import activityRelaxingImg from '../assets/minpaku/activity_relaxing_new.png';
import qa1Img from '../assets/minpaku/qa-1.jpg';
import qa2Img from '../assets/minpaku/qa-2.jpg';
import qa3Img from '../assets/minpaku/qa-3.jpg';
import joetsu1Img from '../assets/minpaku/joetsu-1.jpg';
import joetsu2Img from '../assets/minpaku/joetsu-2.jpg';
import joetsu3Img from '../assets/minpaku/joetsu-3.jpg';
import koyamaInterviewImg from '../assets/minpaku/koyama-interview.jpg';
import ctaBgImg from '../assets/minpaku/cta-bg.jpg';

import hostAgaImg from '../assets/minpaku/host_aga_bw.png';
import hostTainaiImg from '../assets/minpaku/host_tainai_bw.png';
import hostJoetsuImg from '../assets/minpaku/host_joetsu_bw.png';
import hostMyokoImg from '../assets/minpaku/host_myoko_bw.png';
import hostTokamachiImg from '../assets/minpaku/host_tokamachi_bw.png';

import lastMessageBgImg from '../assets/minpaku/last_message_bg.jpg';
import Contact from '../components/Contact';

const caseImageMap = {
  'aga-1.jpg': aga1Img,
  'aga-2.jpg': aga2Img,
  'aga-3.jpg': aga3Img,
  'tainai-1.jpg': tainai1Img,
  'tainai-2.jpg': tainai2Img,
  'tainai-3.jpg': tainai3Img,
  'joetsu-1.jpg': joetsu1Img,
  'joetsu-2.jpg': joetsu2Img,
  'joetsu-3.jpg': joetsu3Img,
  'tokamachi-1.jpg': tokamachi1Img,
  'tokamachi-2.jpg': tokamachi2Img,
  'tokamachi-3.jpg': tokamachi3Img,
  'host_aga_bw.png': hostAgaImg,
  'host_tainai_bw.png': hostTainaiImg,
  'host_joetsu_bw.png': hostJoetsuImg,
  'host_myoko_bw.png': hostMyokoImg,
  'host_tokamachi_bw.png': hostTokamachiImg,
  'myoko-1.jpg': myoko1Img,
  'myoko-2.jpg': myoko2Img,
  'myoko-3.jpg': myoko3Img,
};

// --- Flat SVG Icon  Components ---
const IconUsers = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);
const IconUtensils = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" /></svg>
);
const IconSprout = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 20h10" /><path d="M10 20c5.5-2.5 8-6.4 8-10" /><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" /><path d="M12 10c0 4 2.5 6 2.5 10" /></svg>
);
const IconCoffee = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1" /><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" /><line x1="6" y1="2" x2="6" y2="4" /><line x1="10" y1="2" x2="10" y2="4" /><line x1="14" y1="2" x2="14" y2="4" /></svg>
);
const IconPhone = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);
const IconFileText = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" /></svg>
);
const IconCalendar = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
);
const IconHandshake = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2H14L22 10V14L14 22H10L2 14V10L10 2Z" /><path d="m8 10 4 4 4-4" /></svg>
);
const IconCheckCircle = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
);
const IconHome = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
);
const IconStar = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
);
const IconBookOpen = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
);
const IconSearch = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
);
const IconUser = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
);


const FarmStay = () => {
  const {
    intro,
    whatIs,
    activities,
    voices,
    faqIntro,
    faq,
    hostVoice,
    cases,
    tipsTitle,
    tipsLead,
    tips,
    flow,
    finalMessage,
    contact
  } = database.minpaku;
  const [openFaq, setOpenFaq] = useState(null);
  const contactRef = useRef(null);
  useReveal();

  const getImage = (id) => {
    const map = {
      'aga-1.jpg': aga1Img.src || aga1Img,
      'aga-2.jpg': aga2Img.src || aga2Img,
      'aga-3.jpg': aga3Img.src || aga3Img,
      'case1.jpg': case1Img.src || case1Img,
      'case2.jpg': case2Img.src || case2Img,
      'placeholder1.jpg': placeholder1Img.src || placeholder1Img,
      'placeholder2.jpg': placeholder2Img.src || placeholder2Img,
      'placeholder3.jpg': placeholder3Img.src || placeholder3Img,
      'tainai-1.jpg': tainai1Img.src || tainai1Img,
      'tainai-2.jpg': tainai2Img.src || tainai2Img,
      'tainai-3.jpg': tainai3Img.src || tainai3Img,
      'myoko-1.jpg': myoko1Img.src || myoko1Img,
      'myoko-2.jpg': myoko2Img.src || myoko2Img,
      'myoko-3.jpg': myoko3Img.src || myoko3Img,
      'tokamachi-1.jpg': tokamachi1Img.src || tokamachi1Img,
      'tokamachi-2.jpg': tokamachi2Img.src || tokamachi2Img,
      'tokamachi-3.jpg': tokamachi3Img.src || tokamachi3Img,
      'joetsu-1.jpg': joetsu1Img.src || joetsu1Img,
      'joetsu-2.jpg': joetsu2Img.src || joetsu2Img,
      'joetsu-3.jpg': joetsu3Img.src || joetsu3Img,
    };
    return map[id] || (case1Img.src || case1Img);
  };

  return (
    <div style={lpWrapperStyle}>

      {/* ========== P.01 HERO =====  */}
      <section style={heroSectionStyle}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, backgroundColor: '#000' }}>
          <div style={{ ...heroBgLayerStyle, backgroundImage: `url(${heroImg.src || heroImg})`, animationDelay: '0s' }}></div>
          <div style={{ ...heroBgLayerStyle, backgroundImage: `url(${hero2Img.src || hero2Img})`, animationDelay: '6s' }}></div>
          <div style={{ ...heroBgLayerStyle, backgroundImage: `url(${hero3Img.src || hero3Img})`, animationDelay: '12s' }}></div>
          <div style={{ ...heroBgLayerStyle, backgroundImage: `url(${hero4Img.src || hero4Img})`, animationDelay: '18s' }}></div>
          <div style={{ ...heroBgLayerStyle, backgroundImage: `url(${hero5Img.src || hero5Img})`, animationDelay: '24s' }}></div>
        </div>
        <div style={heroOverlayStyle}></div>
        <div className="container" style={heroContentStyle}>

          {intro.badge && <div style={heroBadgeStyle} className="reveal">NIIGATA FARM STAY</div>}
          <p style={heroTaglineStyle} className="reveal hero-tagline-responsive">
            <span className="inline-block-span">＼あなたのいつもの暮らしが</span>
            <br className="mobile-only" />
            <span className="inline-block-span">子どもたちの忘れられない宝物に／</span>
          </p>
          <h1 style={heroTitleStyle} className="reveal hero-title-responsive">
            <span className="inline-block-span">やってみよう、</span>
            <br className="mobile-only" />
            <span className="inline-block-span">農村ホームステイ！</span>
          </h1>
          <p style={heroLeadStyle} className="reveal">
            <span className="inline-block-span">はじめての受入応援します！</span>
            <br className="mobile-only" />
            <span className="inline-block-span">「できるかな？」からで、大丈夫！</span>
          </p>
          <p style={heroBodyStyle} className="reveal">
            <span className="inline-block-span">いつもの食卓や暮らしは、</span>
            <span className="inline-block-span">あなたにとっても誰かにとっても</span>
            <br className="mobile-only" />
            <span className="inline-block-span">宝物。</span>
          </p>
          <a href="#contact" className="btn btn-primary hero-cta-button" style={{ backgroundColor: 'var(--accent)', color: 'white', border: 'none', padding: '18px 45px', fontSize: '1.1rem', fontWeight: 'bold', borderRadius: '50px', marginTop: '10px', display: 'inline-block', textDecoration: 'none', boxShadow: '0 8px 25px rgba(141, 186, 75, 0.4)', transition: 'transform 0.3s, background-color 0.3s, color 0.3s, box-shadow 0.3s' }}>受け入れについて相談する</a>
        </div>

        <div style={scrollDownStyle} className="desktop-only">
          <span>SCROLL</span>
          <div style={scrollLineStyle}></div>
        </div>
      </section>

      {/* ========== 農村ホームステイとは？ ========== */}
      <section style={sectionPaddingStyle} className="reveal section-padding-mobile">
        <div className="container">
          <div style={sectionHeaderStyle} className="section-header-flex responsive-flex-column">
            <h2 style={sectionTitleStyle} className="section-title-bg">WHAT IS</h2>
            <div style={sectionSubTitleContainerStyle}>
              <span className="section-tag">{whatIs.title}</span>
            </div>
          </div>
          <div style={whatIsLayoutStyle} className="responsive-grid">
            <div style={whatIsTextStyle}>
              <p style={conceptTextStyle}>{whatIs.description}</p>
              <p style={{ ...conceptTextStyle, fontSize: '0.9rem', color: '#999', marginTop: '10px' }}>{whatIs.note}</p>
            </div>
            <div style={conceptImgWrapperStyle}>
              <img src={conceptImg.src || conceptImg} alt="農村ホームステイの様子" style={conceptImgStyle} />
            </div>
          </div>
        </div>
      </section>

      {/* ========== 受入で行うこと ========== */}
      <section style={{ ...sectionPaddingStyle, backgroundColor: 'var(--bg-light)' }} className="reveal section-padding-mobile">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="section-tag">ACTIVITIES</span>
            <h2 style={subSectionTitleMainStyle} className="sub-section-title-responsive">受け入れで行うこと</h2>
            <p style={activitiesLeadStyle}>{activities.lead}</p>
          </div>
          <div style={{ ...activitiesGridStyle, marginTop: '60px' }} className="responsive-grid">
            {activities.items.map((item, idx) => (
              <div key={idx} style={activityCardStyle} className="glass-card">
                <div style={{ ...activityIconStyle, height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    src={([activityGroupImg, activityCookingImg, activityChoresImg, activityRelaxingImg][idx]).src || [activityGroupImg, activityCookingImg, activityChoresImg, activityRelaxingImg][idx]}
                    alt=""
                    style={{ height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }}
                  />
                </div>
                <h4 style={activityTitleStyle}>{item.title}</h4>
                <p style={activityBodyStyle}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 受け入れ家庭の声（ほんとのところ） ========== */}
      <section style={sectionPaddingStyle} className="reveal section-padding-mobile">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="section-tag">VOICES</span>
            <h2 style={subSectionTitleMainStyle} className="mobile-title-only-voices">
              <span className="inline-block-span">受け入れ家庭の声</span>
              <br className="mobile-only" />
              <span className="inline-block-span">（ほんとのところ）</span>
            </h2>
          </div>
          <div style={voicesGridStyle} className="responsive-grid">
            {voices.items.map((item, idx) => (
              <div key={idx} style={voiceCardStyle} className="voice-bubble">
                <div style={voiceQuoteMarkStyle}>“</div>
                <h4 style={voiceTitleStyle}>{item.title}</h4>
                <p style={voiceBodyStyle}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Q&A よくある心配と質問 ========== */}
      <section style={{ ...sectionPaddingStyle, backgroundColor: 'var(--primary)', color: 'white' }} className="reveal">
        <div className="container">
          <div style={sectionHeaderStyle} className="responsive-flex-column">
            <h2 style={{ ...sectionTitleStyle, color: 'rgba(255,255,255,0.04)' }}>Q & A</h2>
            <div style={sectionSubTitleContainerStyle}>
              <span className="section-tag">{faqIntro.title}</span>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: '1.8', whiteSpace: 'pre-wrap' }}>{faqIntro.lead}</p>
            </div>
          </div>
          {/* Start of inserted content */}
          <p className="section-intro" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)', marginBottom: '40px', textAlign: 'center' }}>{faqIntro.intro}</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '60px' }}>
            <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', backgroundColor: 'white', color: 'var(--primary)' }}>
              <img src={qa3Img.src || qa3Img} alt="はじめての収穫体験" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '15px', fontSize: '0.9rem', fontWeight: 'bold' }}>はじめての収穫体験</div>
            </div>
            <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', backgroundColor: 'white', color: 'var(--primary)' }}>
              <img src={qa1Img.src || qa1Img} alt="ご飯はみんなで" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '15px', fontSize: '0.9rem', fontWeight: 'bold' }}>ご飯はみんなで</div>
            </div>
            <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', backgroundColor: 'white', color: 'var(--primary)' }}>
              <img src={qa2Img.src || qa2Img} alt="笹団子作りにチャレンジ" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '15px', fontSize: '0.9rem', fontWeight: 'bold' }}>笹団子作りにチャレンジ</div>
            </div>
          </div>
          {/* End of inserted content */}
          <div style={faqListStyle}>
            {faq.map((item, idx) => (
              <div
                key={idx}
                style={{ ...faqItemStyle, borderBottom: idx < faq.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div style={faqHeaderStyle}>
                  <h4 style={faqQStyle}><span style={{ color: 'var(--accent)', marginRight: '10px' }}>Q.</span>{item.question}</h4>
                  <span style={{ fontSize: '1.4rem', color: 'var(--accent)', transition: 'transform 0.3s', display: 'inline-block', transform: openFaq === idx ? 'rotate(45deg)' : 'none' }}>+</span>
                </div>
                {openFaq === idx && (
                  <p style={faqAStyle}><span style={{ color: 'var(--accent)', fontWeight: '800', marginRight: '8px' }}>A.</span>{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ========== 先輩ホストの本音：小山さんインタビュー ========== */}
      <section style={{ ...sectionPaddingStyle, backgroundColor: '#fff' }} className="reveal">
        <div className="container">
          <div style={sectionHeaderStyle} className="responsive-flex-column">
            <h2 style={sectionTitleStyle}>INTERVIEW</h2>
            <div style={sectionSubTitleContainerStyle}>
              <span className="section-tag">先輩ホストファミリーの声</span>
              <h3 style={subSectionTitleMainStyle}>「いつもの暮らし」が、<br />子どもたちの宝物になる。</h3>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px', alignItems: 'start' }} className="responsive-interview-grid">
            <div style={{ position: 'sticky', top: '120px' }} className="responsive-sticky">
              <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.1)', position: 'relative' }}>
                <img src={koyamaInterviewImg.src || koyamaInterviewImg} alt="小山さん夫妻" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(38,122,77,0.9) 0%, rgba(0,0,0,0) 100%)', color: 'white', padding: '30px' }}>
                  <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: '800', opacity: 0.9 }}>十日町市・中里エリア</p>
                  <p style={{ margin: '5px 0 0', fontSize: '1.2rem', fontWeight: '900' }}>小山さんご夫妻</p>
                </div>
              </div>
              <div style={{ marginTop: '30px', padding: '25px', backgroundColor: 'var(--bg-light)', borderRadius: '20px', borderLeft: '5px solid var(--accent)' }}>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--primary)', fontWeight: '700' }}>
                  「教育旅行の民泊は、特別なもてなしではなく、家族の一員として迎えること。それがお互いにとって一番の喜びになります。」
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div className="interview-q-card" style={{ paddingBottom: '30px', borderBottom: '1px solid #edf2f7' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '15px', display: 'flex', gap: '15px' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '1.4rem', lineHeight: 1 }}>Q.</span>
                  受け入れをしてよかったことはありますか？
                </h4>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-light)', paddingLeft: '35px', margin: 0 }}>
                  受け入れた子どもたちが、後になってプライベートでまた遊びに来てくれることがあります。それがとてもうれしいですね。また、受け入れの前には「家をきれいにしておこう」と思うので、家の中が自然と整うのも良いところです（笑）。
                </p>
              </div>

              <div className="interview-q-card" style={{ paddingBottom: '30px', borderBottom: '1px solid #edf2f7' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '15px', display: 'flex', gap: '15px' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '1.4rem', lineHeight: 1 }}>Q.</span>
                  どんな体験を一緒にしていますか？
                </h4>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-light)', paddingLeft: '35px', margin: 0 }}>
                  子どもたちには家族の一員のように我が家の春夏秋冬の暮らしをそのまま一緒に過ごしてもらっています。山菜を採って料理して食べたり、ブナ林で遊んだり、棚田の作業を手伝ってもらうこともあります。農道の整備をしたり、冬は雪遊びをしたり、山に向かって大声で「ヤッホー！」と叫んでみたり。
                </p>
              </div>

              <div className="interview-q-card" style={{ paddingBottom: '30px', borderBottom: '1px solid #edf2f7' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '15px', display: 'flex', gap: '15px' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '1.4rem', lineHeight: 1 }}>Q.</span>
                  受け入れを始めたきっかけは？
                </h4>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-light)', paddingLeft: '35px', margin: 0 }}>
                  地域の先輩農家さんたちが昔からやっていて、そのお手伝いに行くことがありました。そうして関わるうちに、自分たちも自然と「やってみようかな」という気持ちになって。
                </p>
              </div>

              <div className="interview-q-card">
                <h4 style={{ fontSize: '1.1rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '15px', display: 'flex', gap: '15px' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '1.4rem', lineHeight: 1 }}>Q.</span>
                  暮らしの中で感じる変化はありますか？
                </h4>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-light)', paddingLeft: '35px', margin: 0 }}>
                  実際問題として人数がいると、農作業や農道の泥揚げ、掃除などがとても楽になります。お手伝いでも助かる場面も本当に多かったりもしますし、作業を一緒にやることで子どもたちとの会話も自然と増えていきます。そうした時間も含めて楽しいですね。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 先輩ホストファミリーの受入事例 ========== */}
      <section style={{ ...sectionPaddingStyle, backgroundColor: '#FAFCFB' }} className="reveal section-padding">
        <div className="container">


          <div style={{ ...sectionHeaderStyle, marginBottom: '80px' }} className="responsive-grid responsive-flex-column">
            <h2 style={sectionTitleStyle} className="section-title-bg">CASE</h2>
            <div style={sectionSubTitleContainerStyle}>
              <span className="section-tag">エリアごとの受入事例</span>
              <p style={sectionDescStyle}>実際にどういう感じで受け入れをしているか少しご紹介。<br />それぞれの地域、それぞれのスタイルがあります。</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {cases.map((item, idx) => (
              <div key={idx} style={caseCardStyle} className="case-card-responsive">
                {/* --- Image Side --- */}
                <div style={{ ...caseImgSideStyle, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }} className="case-img-side-responsive">
                  <div style={{ ...imageGridColumnStyle, position: 'relative' }}>
                    <div style={mainImageRowStyle}>
                      <img src={caseImageMap[item.images[0]]?.src || caseImageMap[item.images[0]] || item.images[0]} alt={item.area} style={caseImgStyle} />
                    </div>
                    <div style={subImagesRowStyle}>
                      <div style={subImageItemWrapper}>
                        <img src={caseImageMap[item.images[1]]?.src || caseImageMap[item.images[1]] || item.images[1]} alt={item.area} style={caseImgStyle} />
                      </div>
                      <div style={subImageItemWrapper}>
                        <img src={caseImageMap[item.images[2]]?.src || caseImageMap[item.images[2]] || item.images[2]} alt={item.area} style={caseImgStyle} />
                      </div>
                    </div>
                    <div style={caseAreaBadgeStyle} className="case-badge-responsive">
                      <span style={caseNoStyle}>CASE {item.caseNo}</span>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: '900', margin: 0 }}>{item.area}</h3>
                      <p style={{ fontSize: '0.85rem', fontWeight: 'bold', margin: 0 }}>{item.family}</p>
                    </div>
                  </div>
                </div>

                {/* --- Text Content Section --- */}
                <div style={caseContentStyle}>
                  {item.details ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '25px' }}>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          体験内容について
                        </h4>
                        <div style={{ fontSize: '0.9rem', lineHeight: '1.8', color: 'var(--text-light)', margin: 0 }}>
                          {item.details.experience.split('\n').map((line, i) => (
                            <p key={i} style={{ margin: '0 0 5px 0' }}>{line}</p>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          地域の受け入れの特徴や特色
                        </h4>
                        <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--text-light)', margin: 0 }}>{item.details.features}</p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          地域へのうれしい影響
                        </h4>
                        <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--text-light)', margin: 0 }}>{item.details.impact}</p>
                      </div>
                    </div>
                  ) : (
                    <div style={casePointsStyle}>
                      {item.items.map((point, i) => (
                        <div key={i} style={casePointItemStyle}>
                          <div style={casePointLabelStyle}>
                            <span style={pointStarStyle}>★</span> {point.label}
                          </div>
                          <p style={casePointTextStyle} dangerouslySetInnerHTML={{ __html: point.text.replace(/\n/g, '<br />') }}></p>
                        </div>
                      ))}
                    </div>
                  )}

                  {item.hostVoice && (
                    <div className="voice-bubble" style={{ marginTop: '20px', padding: '20px', backgroundColor: 'var(--bg-light)', borderRadius: '20px', position: 'relative', display: 'flex', gap: '15px', alignItems: 'center' }}>
                      <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 10px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                        {item.hostVoice.icon && item.hostVoice.icon.endsWith('.png') ? (
                          <img src={caseImageMap[item.hostVoice.icon]?.src || caseImageMap[item.hostVoice.icon] || item.hostVoice.icon} alt="Host" style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                        ) : (
                          <IconUser size={32} color="var(--primary)" />
                        )}
                      </div>
                      <div style={{ position: 'relative', flex: 1 }}>
                        <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: '800', color: 'var(--primary)', fontStyle: 'italic', lineHeight: '1.5' }}>
                          {item.hostVoice.text}
                        </p>
                      </div>
                    </div>
                  )}

                  {item.quote && (
                    <div style={caseQuoteStyle}>
                      {item.quote}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 受入のコツまとめ ========== */}
      <section style={{ ...sectionPaddingStyle, backgroundColor: 'var(--bg-light)' }} className="reveal section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={tipsBookIconStyle}>
              <IconBookOpen size={60} color="var(--primary)" />
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: 'var(--primary)', marginTop: '15px', fontFamily: '"Kaisei Tokumin", serif' }}>{tipsTitle}</h2>
            <p style={{ color: 'var(--accent)', fontWeight: '800', fontSize: '1.15rem', marginTop: '10px' }}>{tipsLead}</p>
          </div>
          <div style={tipsGridStyle}>
            {tips.map((tip, idx) => (
              <div key={idx} style={tipCardStyle}>
                <div style={tipCheckIconStyle}>
                  <IconCheckCircle size={20} color="white" />
                </div>
                <div>
                  <h4 style={tipTitleStyle}>{tip.title}</h4>
                  <p style={tipBodyStyle}>{tip.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 相談〜実施までの流れ ========== */}
      <section style={sectionPaddingStyle} className="reveal section-padding-mobile">
        <div className="container">
          <div style={{ ...sectionHeaderStyle, marginBottom: '80px' }} className="responsive-grid responsive-flex-column">
            <h2 style={sectionTitleStyle} className="section-title-bg">FLOW</h2>
            <div style={sectionSubTitleContainerStyle}>
              <span className="section-tag">
                <span className="inline-block-span">相談〜実施までの流れ</span>
              </span>
              <p style={sectionDescStyle}>初めての方でも安心。地域の協議会がステップごとにサポートします。</p>
            </div>
          </div>
          <div style={flowStepsVerticalStyle}>
            {flow.map((item, idx) => {
              const Icon = [IconPhone, IconFileText, IconCalendar, IconHandshake, IconCheckCircle, IconHome, IconStar][idx];
              return (
                <div key={idx} style={flowVerticalBoxStyle} className="flow-box-responsive">
                  <div style={flowIconLeftStyle} className="flow-icon-left-responsive">
                    <div style={flowStepNumStyle}>{item.step}</div>
                    <div style={flowIconCircleStyle}>
                      <Icon size={32} color="var(--primary)" />
                    </div>
                  </div>
                  <div style={flowTextRightStyle}>
                    <div style={flowStepTitleVStyle}>{item.title}</div>
                    <p style={flowStepDescVStyle}>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== ラストメッセージ ========== */}
      <section style={{ ...finalCtaSectionStyle, backgroundImage: `url(${lastMessageBgImg.src || lastMessageBgImg})` }} className="reveal">
        <div className="container" style={{ textAlign: 'center', maxWidth: '900px', position: 'relative', zIndex: 1, width: '100%' }}>
          <h2 style={{
            ...finalCtaTitleStyle,
            fontFamily: '"Kaisei Tokumin", serif',
            color: 'white',
            fontSize: '32px',
            textShadow: '0 0 15px rgba(5, 30, 15, 0.8), 0 2px 5px rgba(0,0,0,0.5)'
          }} className="final-message-title-responsive">
            <span className="inline-block-span">あなたの「ようこそ」と</span><br className="mobile-only" /><span className="inline-block-span">「おかえり」を</span><br />
            <span className="inline-block-span">待っている子どもたちがいます。</span>
          </h2>
          <p style={{
            color: 'white',
            fontSize: '1.1rem',
            lineHeight: '1.7',
            marginTop: '20px',
            fontWeight: '700',
            fontFamily: '"Zen Kurenaido", "M PLUS 2", sans-serif',
            whiteSpace: 'pre-wrap',
            textShadow: '0 0 10px rgba(5, 30, 15, 0.6), 0 1px 3px rgba(0,0,0,0.5)'
          }} className="inline-block-span">{finalMessage.body}</p>
        </div>
      </section>

      {/* ========== お問い合わせ ========== */}
      <section id="contact" style={{ ...sectionPaddingStyle, backgroundColor: '#fcfcfc' }} className="reveal section-padding-mobile" ref={contactRef}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-tag">CONTACT</span>
            <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '20px' }}>
              <span className="inline-block-span">ご興味のある方は</span>
              <br className="mobile-only" />
              <span className="inline-block-span">お気軽にご連絡ください</span>
            </h2>
          </div>

          <div style={contactBoxStyle} className="contact-box-mobile">
            <div style={{ display: 'flex', backgroundColor: '#f4fbf4', padding: '40px 60px', borderRadius: '12px', border: '2px solid #e0f2e0', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} className="contact-info-mobile responsive-flex-column">
              <div style={{ flex: 1 }}>
                <p style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent)', fontWeight: '800', fontSize: '1.2rem', marginBottom: '10px' }}><IconSearch size={24} color="var(--accent)" />{contact.windowLabel}</p>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', lineHeight: '1.7', marginBottom: '15px' }} dangerouslySetInnerHTML={{ __html: contact.windowNote.replace(/\n/g, '<br/>') }}></p>
                <a href={contact.url} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', fontWeight: '700', fontSize: '1rem', wordBreak: 'break-all' }}>{contact.url}</a>
              </div>
            </div>

            {/* お問い合わせフォーム */}
            <div style={{ marginTop: '40px', textAlign: 'left' }} className="contact-info-mobile">
              <Contact isEmbedded={true} />
            </div>
          </div>
        </div>
      </section>

      {/* ========== 固定 お問い合わせタブ ========== */}
      <a href="#contact" className="fixed-contact-tab" style={fixedContactTabStyle}>
        お問い合わせ
      </a>
    </div>
  );
};

/* ===== STYLES ===== */
const lpWrapperStyle = {
  backgroundColor: '#fff',
  color: '#333',
  fontFamily: '"M PLUS 2", "Noto Sans JP", sans-serif',
  '--primary': '#267A4D', // 落ち着いた深い緑
  '--accent': '#8DBA4B',  // 明るい黄緑
  '--secondary': '#3A8FB7', // ロゴ下部のブルー系
  '--bg-light': '#F8FAF6', // 極薄いグリーン
  '--text-light': '#4A5568'
};
const sectionPaddingStyle = { padding: '100px 0' };
const sectionHeaderStyle = { display: 'flex', alignItems: 'flex-start', gap: '30px', marginBottom: '60px' };
const sectionTitleStyle = {
  fontSize: '3.2rem',
  fontWeight: '900',
  color: '#EDF2EE',
  lineHeight: '1',
  margin: '0',
  flexShrink: 0,
  letterSpacing: '0.06em'
};
const sectionSubTitleContainerStyle = { display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, marginTop: '4px' };
const sectionDescStyle = { color: 'var(--text-light)', maxWidth: '600px', fontSize: '0.95rem', lineHeight: '1.7' };

const heroSectionStyle = {
  height: '100vh',
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-end',
  paddingBottom: '30px',
  color: 'white',
  overflow: 'hidden'
};

const heroBgLayerStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: 0,
  animation: 'heroCrossfade 30s infinite linear',
  transformOrigin: 'center center'
};

const heroOverlayStyle = {
  display: 'none'
};

const heroContentStyle = {
  position: 'relative',
  zIndex: 2,
  maxWidth: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '0 20px',
  textAlign: 'center'
};

const glowShadow = '0 0 15px rgba(5, 30, 15, 1), 0 0 30px rgba(10, 40, 20, 0.9), 0 0 50px rgba(10, 40, 20, 0.8), 0 0 80px rgba(10, 40, 20, 0.6)';

const heroBadgeStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.25)',
  backdropFilter: 'blur(10px)',
  color: 'white',
  padding: '8px 20px',
  borderRadius: '50px',
  fontSize: '0.9rem',
  fontWeight: 'bold',
  display: 'inline-block',
  marginBottom: '15px',
  border: '1px solid rgba(255, 255, 255, 0.4)',
  boxShadow: '0 0 15px rgba(0,0,0,0.4)',
  textShadow: '0 2px 4px rgba(0,0,0,0.5)',
  fontFamily: '"Zen Kurenaido", "M PLUS 2", sans-serif'
};

const heroTaglineStyle = {
  fontSize: '1.1rem',
  fontWeight: '800',
  marginBottom: '8px',
  color: '#E6EE9C', // Highlighted color
  textShadow: glowShadow,
  fontFamily: '"Zen Kurenaido", "M PLUS 2", sans-serif'
};

const heroTitleStyle = {
  fontSize: '34px',
  fontWeight: '800',
  lineHeight: '1.2',
  marginBottom: '20px',
  color: '#D35400', // Deep orange
  fontFamily: '"Kaisei Tokumin", serif',
  backgroundColor: 'rgba(255, 255, 255, 0.9)', // White with slight transparency
  backdropFilter: 'blur(8px)',
  padding: '16px 32px',
  borderRadius: '12px',
  display: 'inline-block',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
};

const heroLeadStyle = {
  fontSize: '1.05rem',
  fontWeight: '700',
  marginBottom: '15px',
  lineHeight: '1.6',
  color: 'white',
  textShadow: glowShadow,
  whiteSpace: 'pre-wrap',
  fontFamily: '"Zen Kurenaido", "M PLUS 2", sans-serif'
};

const heroBodyStyle = {
  fontSize: '0.9rem',
  fontWeight: '600',
  lineHeight: '1.6',
  marginBottom: '20px',
  color: 'white',
  textShadow: glowShadow,
  whiteSpace: 'pre-wrap',
  fontFamily: '"Zen Kurenaido", "M PLUS 2", sans-serif'
};

const whatIsLayoutStyle = { display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '60px', alignItems: 'center' };
const whatIsTextStyle = { textAlign: 'left' };
const conceptImgWrapperStyle = { borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(38,122,77,0.08)' };
const conceptImgStyle = { width: '100%', height: 'auto', display: 'block' };
const conceptTextStyle = { fontSize: '1rem', lineHeight: '1.9', color: 'var(--text-light)' };

const subSectionTitleMainStyle = {
  fontSize: '2.1rem',
  fontWeight: '800',
  marginBottom: '18px',
  color: 'var(--primary)',
  letterSpacing: '0.02em',
  fontFamily: '"Kaisei Tokumin", serif',
};
const activitiesLeadStyle = { color: 'var(--text-light)', fontSize: '0.95rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.7', whiteSpace: 'pre-wrap', wordBreak: 'keep-all' };
const activitiesGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
  gap: '20px'
};
const activityCardStyle = { padding: '40px 30px', textAlign: 'center', backgroundColor: 'white', borderRadius: '24px', border: 'none', boxShadow: '0 10px 30px rgba(38,122,77,0.05)' };
const activityIconStyle = { marginBottom: '18px', display: 'flex', justifyContent: 'center' };
const activityTitleStyle = { fontSize: '1.1rem', fontWeight: '800', marginBottom: '10px', color: 'var(--primary)' };
const activityBodyStyle = { fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--text-light)' };

const voicesGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '20px' };
const voiceCardStyle = { padding: '35px', backgroundColor: 'var(--bg-light)', borderRadius: '24px', position: 'relative', border: '1px solid rgba(141,186,75,0.08)' };
const voiceQuoteMarkStyle = { position: 'absolute', top: '12px', left: '18px', fontSize: '3.5rem', color: 'var(--primary)', opacity: 0.08, fontFamily: 'serif' };
const voiceTitleStyle = { fontSize: '1.05rem', fontWeight: '800', marginBottom: '12px', color: 'var(--primary)' };
const voiceBodyStyle = { fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--text-light)', margin: 0 };

const faqListStyle = { maxWidth: '800px', margin: '0 auto' };
const faqItemStyle = { padding: '25px 0', cursor: 'pointer', borderBottom: '1px solid rgba(255,255,255,0.1)' };
const faqHeaderStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' };
const faqQStyle = { fontSize: '1rem', fontWeight: '800', color: 'white', margin: 0, letterSpacing: '0.02em' };
const faqAStyle = { fontSize: '0.95rem', lineHeight: '1.8', color: 'rgba(240,247,242,0.8)', margin: '15px 0 0', paddingLeft: '18px', borderLeft: '2px solid var(--accent)' };

const caseCardStyle = { display: 'flex', backgroundColor: 'white', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(38,122,77,0.06)', minHeight: '350px' };
const caseImgSideStyle = { width: '50%', flexShrink: 0 };
const imageGridColumnStyle = { display: 'flex', flexDirection: 'column', gap: '8px', padding: '40px 10px 10px 10px' };
const mainImageRowStyle = { width: '100%', aspectRatio: '3 / 2', borderRadius: '15px', overflow: 'hidden' };
const subImagesRowStyle = { display: 'flex', gap: '8px', width: '100%' };
const subImageItemWrapper = { flex: 1, aspectRatio: '3 / 2', borderRadius: '15px', overflow: 'hidden' };
const caseImgStyle = { width: '100%', height: '100%', objectFit: 'cover', display: 'block' };
const caseAreaBadgeStyle = { position: 'absolute', bottom: '10px', left: '10px', right: '10px', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', background: 'linear-gradient(to top, rgba(38,122,77,0.9) 0%, rgba(0,0,0,0) 100%)', color: 'white', padding: '35px 25px 25px', display: 'flex', flexDirection: 'column', gap: '4px' };
const caseNoStyle = { color: 'rgba(255,255,255,0.8)', fontWeight: '800', fontSize: '0.75rem', letterSpacing: '0.12em' };
const caseContentStyle = { flex: 1, padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' };
const casePointsStyle = { display: 'flex', flexDirection: 'column', gap: '15px' };
const casePointItemStyle = { backgroundColor: 'var(--bg-light)', padding: '15px 22px', borderRadius: '15px' };
const casePointLabelStyle = { fontSize: '0.8rem', fontWeight: '800', color: 'var(--secondary)', marginBottom: '4px' };
const pointStarStyle = { marginRight: '6px', color: 'var(--accent)' };
const casePointTextStyle = { fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-light)', margin: 0 };
const caseQuoteStyle = { marginTop: '25px', padding: '15px 22px', fontSize: '1rem', color: 'var(--primary)', fontWeight: '700', fontStyle: 'italic', borderLeft: '4px solid var(--secondary)', backgroundColor: '#F0F7F2', borderRadius: '0 15px 15px 0', lineHeight: '1.7' };

const tipsBookIconStyle = { fontSize: '2.5rem', marginBottom: '12px' };
const tipsGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', maxWidth: '960px', margin: '0 auto' };
const tipCardStyle = { display: 'flex', gap: '18px', backgroundColor: 'white', padding: '30px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(38,122,77,0.04)', alignItems: 'flex-start' };
const tipCheckIconStyle = { color: 'white', backgroundColor: 'var(--accent)', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0, fontSize: '0.9rem', marginTop: '3px' };
const tipTitleStyle = { fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '8px', lineHeight: '1.4' };
const tipBodyStyle = { fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--text-light)', margin: 0 };

const flowStepsVerticalStyle = { display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '750px', margin: '0 auto' };
const flowVerticalBoxStyle = { display: 'flex', gap: '30px', backgroundColor: 'white', padding: '35px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(38,122,77,0.05)', alignItems: 'center' };
const flowIconLeftStyle = { textAlign: 'center', flexShrink: 0, width: '100px' };
const flowStepNumStyle = { display: 'inline-block', backgroundColor: 'var(--secondary)', color: 'white', padding: '4px 12px', borderRadius: '30px', fontSize: '0.75rem', fontWeight: '800', marginBottom: '12px' };
const flowIconCircleStyle = { width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'var(--bg-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.2rem', margin: '0 auto', color: 'var(--primary)' };
const flowTextRightStyle = { flex: 1 };
const flowStepTitleVStyle = { fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '8px' };
const flowStepDescVStyle = { fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-light)', margin: 0 };

const finalCtaSectionStyle = { minHeight: '100vh', padding: '100px 0 80px', backgroundColor: '#111', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' };
const finalCtaTitleStyle = { fontWeight: '900', lineHeight: '1.4', marginBottom: '25px', position: 'relative' };

const contactBoxStyle = { marginTop: '50px', padding: '40px', backgroundColor: '#ffffff', borderRadius: '30px', border: 'none', boxShadow: '0 15px 40px rgba(38,122,77,0.08)' };

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
  color: 'white',
  zIndex: 3,
};

const scrollLineStyle = {
  width: '3px',
  height: '60px',
  backgroundColor: 'white',
  boxShadow: '0 0 5px rgba(0,0,0,0.5)',
  animation: 'scrollLine 2s ease-in-out infinite',
};

const fixedContactTabStyle = {
  position: 'fixed',
  right: '0',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'var(--accent)',
  color: 'white',
  padding: '20px 10px',
  writingMode: 'vertical-rl',
  textDecoration: 'none',
  fontSize: '0.95rem',
  fontWeight: '800',
  letterSpacing: '0.15em',
  borderTopLeftRadius: '10px',
  borderBottomLeftRadius: '10px',
  boxShadow: '-4px 0 15px rgba(0,0,0,0.1)',
  zIndex: 100,
  transition: 'transform 0.3s'
};

export default FarmStay;
