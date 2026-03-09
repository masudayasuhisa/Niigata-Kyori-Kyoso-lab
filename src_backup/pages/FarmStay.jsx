import React from 'react';
import { database } from '../data/database';
import useReveal from '../hooks/useReveal';
import heroImg from '../assets/minpaku/hero.jpg';
import conceptImg from '../assets/minpaku/concept.jpg';
import case1Img from '../assets/minpaku/case1.jpg';
import case2Img from '../assets/minpaku/case2.jpg';

const FarmStay = () => {
  const { faq, flow, cases } = database.minpaku;
  useReveal();

  return (
    <div style={lpWrapperStyle}>
      {/* LP Hero */}
      <section style={{ ...heroSectionStyle, backgroundImage: `url(${heroImg})` }}>
        <div style={heroOverlayStyle}></div>
        <div className="container fade-in-up" style={heroContentStyle}>
          <div style={tagStyle}>HOST RECRUITMENT</div>
          <h1 style={h1Style}>あなたのいつもの暮らしが、<br />子どもたちの忘れられない思い出に。</h1>
          <p style={heroSubStyle}>「やってみよう、農村ホームステイ！」<br />新潟の四季と暮らしを、そのまま体験へ。安心・あたたかい受け入れのはじめ方を紹介します。</p>
          <a href="#form" className="btn btn-primary" style={heroBtnStyle}>受け入れについて相談する</a>
        </div>
      </section>

      {/* Concept Section */}
      <section style={sectionPaddingStyle} className="reveal">
        <div className="container" style={splitSectionStyle}>
          <div style={imageContainerStyle}>
            <img src={conceptImg} alt="農村ホームステイの様子" style={sideImgStyle} />
          </div>
          <div style={textSideStyle}>
            <h2 style={sectionTitleStyle}>農村ホームステイとは？</h2>
            <p style={pStyle}>新潟に教育旅行で訪れた子どもたちを家に泊め、普段の暮らしや農作業を体験してもらうものです。</p>
            <p style={pStyle}>特別な観光施設ではなく、一般のご家庭で「家族の一員」として過ごす時間は、子どもたちにとってかけがえのない思い出になります。飾らない、ありのままの新潟の暮らしを、ぜひ子どもたちに教えてあげてください。</p>
            
            <div style={benefitListStyle}>
              <div style={benefitItemStyle}><strong>子どもたちの成長</strong>を間近で見守れる</div>
              <div style={benefitItemStyle}><strong>毎年の再会</strong>や手紙のやり取りが続く</div>
              <div style={benefitItemStyle}>都会の子どもの視点から<strong>地域の魅力を再発見</strong></div>
              <div style={benefitItemStyle}>家の中に活気が生まれ、<strong>家庭が活性化</strong>する</div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section style={{ ...sectionPaddingStyle, backgroundColor: '#f9f9f9' }} className="reveal">
        <div className="container">
          <h2 style={{ ...sectionTitleStyle, textAlign: 'center', marginBottom: '60px' }}>先輩ホストファミリーの受入事例</h2>
          <div style={caseGridStyle}>
            <div style={caseCardStyle}>
              <img src={case1Img} alt="事例1" style={caseImgStyle} />
              <div style={caseContentStyle}>
                <span style={caseAreaStyle}>CASE 01: {cases[0].area}</span>
                <h3 style={caseTitleStyle}>{cases[0].family}</h3>
                <p style={caseDescStyle}><strong>体験内容：</strong>{cases[0].content}</p>
                <p style={caseEffectStyle}><strong>うれしい効果：</strong>{cases[0].effect}</p>
              </div>
            </div>
            <div style={caseCardStyle}>
              <img src={case2Img} alt="事例2" style={caseImgStyle} />
              <div style={caseContentStyle}>
                <span style={caseAreaStyle}>CASE 02: {cases[1].area}</span>
                <h3 style={caseTitleStyle}>{cases[1].family}</h3>
                <p style={caseDescStyle}><strong>体験内容：</strong>{cases[1].content}</p>
                <p style={caseEffectStyle}><strong>うれしい効果：</strong>{cases[1].effect}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section style={sectionPaddingStyle} className="reveal">
        <div className="container">
          <h2 style={{ ...sectionTitleStyle, textAlign: 'center', marginBottom: '60px' }}>相談〜実施までの流れ</h2>
          <div style={flowContainerStyle}>
            {flow.map((item, idx) => (
              <div key={idx} style={flowItemStyle}>
                <div style={flowStepStyle}>{item.step}</div>
                <div style={flowTextWrapperStyle}>
                  <div style={flowTitleRowStyle}>
                    <h4 style={flowTitleStyle}>{item.title}</h4>
                    {item.duration && <span style={flowDurationStyle}>{item.duration}</span>}
                  </div>
                  <p style={flowDetailStyle}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ ...sectionPaddingStyle, backgroundColor: '#34495e', color: 'white' }} className="reveal">
        <div className="container">
          <h2 style={{ ...sectionTitleStyle, color: 'white', textAlign: 'center', marginBottom: '60px' }}>よくあるご質問・不安への回答</h2>
          <div style={faqGridStyle}>
            {faq.map((item, idx) => (
              <div key={idx} style={faqCardStyle}>
                <h4 style={faqQStyle}>Q. {item.question}</h4>
                <p style={faqAStyle}>A. {item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section id="form" style={sectionPaddingStyle} className="reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={formHeaderStyle}>
            <h2 style={sectionTitleStyle}>お問い合わせ・ご相談</h2>
            <p>農村ホームステイの受入れにご興味のある方は、お気軽にご連絡ください。<br />地域の協議会がステップごとにサポートします。</p>
          </div>
          
          <form style={formWrapperStyle}>
            <div style={formGroupStyle}>
              <label style={labelStyle}>お名前<span style={reqStyle}>*</span></label>
              <input type="text" placeholder="氏名" style={inputStyle} required />
            </div>
            <div style={formGroupStyle}>
              <label style={labelStyle}>メールアドレス<span style={reqStyle}>*</span></label>
              <input type="email" placeholder="example@mail.com" style={inputStyle} required />
            </div>
            <div style={formGroupStyle}>
              <label style={labelStyle}>お住まいの地域<span style={reqStyle}>*</span></label>
              <select style={inputStyle} required>
                <option value="">エリアを選択してください</option>
                <option>阿賀エリア</option>
                <option>胎内エリア</option>
                <option>十日町エリア</option>
                <option>妙高エリア</option>
                <option>佐渡エリア</option>
                <option>その他</option>
              </select>
            </div>
            <div style={formGroupStyle}>
              <label style={labelStyle}>ご相談内容<span style={reqStyle}>*</span></label>
              <textarea placeholder="受入れについて詳しく聞きたい、資料が欲しいなど" style={{ ...inputStyle, height: '150px' }} required></textarea>
            </div>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <button type="submit" className="btn btn-primary" style={submitBtnStyle}>送信する (確認画面へ)</button>
            </div>
          </form>

          <div style={contactBoxStyle}>
            <h4>発行元・お問い合わせ先</h4>
            <p><strong>にいがたグリーン・ツーリズムセンター</strong><br />（新潟県農林水産部地域農政推進課）</p>
            <p>〒950-8570 新潟県新潟市中央区新光町4-1<br />TEL: 025-280-5707</p>
            <p style={{ marginTop: '20px', fontSize: '0.9rem' }}>
              <a href="https://www.pref.niigata.lg.jp/site/green2rhythm/" target="_blank" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>
                新潟県公式Webサイト「グリーンツーリズム」
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Styles
const lpWrapperStyle = { backgroundColor: '#fff' };
const heroSectionStyle = { height: '80vh', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', display: 'flex', alignItems: 'center', color: 'white' };
const heroOverlayStyle = { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.4)' };
const heroContentStyle = { position: 'relative', zIndex: 1, textAlign: 'center' };
const tagStyle = { display: 'inline-block', backgroundColor: 'var(--accent-color)', padding: '5px 15px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '20px' };
const h1Style = { fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '30px', lineHeight: '1.2' };
const heroSubStyle = { fontSize: '1.4rem', lineHeight: '1.8', marginBottom: '40px' };
const heroBtnStyle = { padding: '20px 40px', fontSize: '1.2rem', borderRadius: '50px', backgroundColor: 'var(--accent-color)' };
const sectionPaddingStyle = { padding: '120px 0' };
const splitSectionStyle = { display: 'flex', gap: '60px', alignItems: 'center' };
const imageContainerStyle = { flex: 1 };
const sideImgStyle = { height: '500px', width: '100%', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' };
const textSideStyle = { flex: 1.2 };
const sectionTitleStyle = { fontSize: '2.5rem', marginBottom: '30px', color: 'var(--primary-color)' };
const pStyle = { fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px', color: 'var(--text-light)' };
const benefitListStyle = { marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '15px' };
const benefitItemStyle = { padding: '15px 20px', backgroundColor: '#f0f4f8', borderRadius: '8px', fontSize: '1rem' };
const caseGridStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' };
const caseCardStyle = { backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' };
const caseImgStyle = { width: '100%', height: '250px', objectFit: 'cover' };
const caseContentStyle = { padding: '30px' };
const caseAreaStyle = { fontSize: '0.8rem', color: 'var(--accent-color)', fontWeight: 'bold', display: 'block', marginBottom: '10px' };
const caseTitleStyle = { fontSize: '1.4rem', marginBottom: '15px' };
const caseDescStyle = { fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '10px' };
const caseEffectStyle = { fontSize: '0.95rem', color: 'var(--text-light)', backgroundColor: '#fff9e6', padding: '15px', borderRadius: '8px' };
const flowContainerStyle = { maxWidth: '800px', margin: '0 auto' };
const flowItemStyle = { display: 'flex', gap: '30px', paddingBottom: '40px', borderLeft: '2px solid #eee', marginLeft: '30px', position: 'relative' };
const flowStepStyle = { width: '60px', height: '60px', backgroundColor: 'var(--primary-color)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold', position: 'absolute', left: '-31px', top: '0' };
const flowTextWrapperStyle = { paddingLeft: '40px' };
const flowTitleRowStyle = { display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '10px' };
const flowTitleStyle = { fontSize: '1.3rem', margin: 0 };
const flowDurationStyle = { fontSize: '0.8rem', backgroundColor: '#eee', padding: '4px 10px', borderRadius: '20px', color: '#666' };
const flowDetailStyle = { fontSize: '1rem', color: 'var(--text-light)', lineHeight: '1.6' };
const faqGridStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' };
const faqCardStyle = { padding: '30px', borderBottom: '1px solid rgba(255,255,255,0.1)' };
const faqQStyle = { fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '15px', color: '#ffd591' };
const faqAStyle = { fontSize: '1rem', opacity: 0.9, lineHeight: '1.7' };
const formHeaderStyle = { textAlign: 'center', marginBottom: '50px' };
const formWrapperStyle = { backgroundColor: '#fcfcfc', padding: '50px', borderRadius: '12px', border: '1px solid #eee' };
const formGroupStyle = { marginBottom: '25px' };
const labelStyle = { display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.95rem' };
const inputStyle = { width: '100%', padding: '12px 15px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '1rem', fontFamilies: 'inherit' };
const reqStyle = { color: 'red', marginLeft: '5px' };
const submitBtnStyle = { backgroundColor: 'var(--primary-color)', padding: '18px 60px', fontSize: '1.1rem', fontWeight: 'bold', border: 'none' };
const contactBoxStyle = { marginTop: '80px', padding: '40px', backgroundColor: '#f0f0f0', borderRadius: '4px', textAlign: 'center' };

export default FarmStay;
