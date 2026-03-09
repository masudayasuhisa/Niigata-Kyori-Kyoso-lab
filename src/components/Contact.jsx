'use client';

import React, { useState, useEffect } from 'react';

const Contact = ({ isEmbedded = false }) => {
  const [step, setStep] = useState('input'); // input | confirm
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    content: '',
    hp_field: '' // Honeypot trap
  });
  const [status, setStatus] = useState('idle'); // idle | loading | error

  const RECAPTCHA_SITE_KEY = '6LcfuIQsAAAAAA7UCj0q5zuybLkdnXortBc8Nfly'; // Added official site key

  // reCAPTCHA script injection (v3)
  useEffect(() => {
    if (typeof window !== 'undefined' && RECAPTCHA_SITE_KEY !== 'YOUR_RECAPTCHA_SITE_KEY') {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const goToConfirm = (e) => {
    e.preventDefault();
    setStep('confirm');
    if (typeof window !== 'undefined' && !isEmbedded) window.scrollTo(0, 0);
  };

  const backToInput = () => {
    setStep('input');
    if (typeof window !== 'undefined' && !isEmbedded) window.scrollTo(0, 0);
  };

  const handleSubmit = async () => {
    // Honeypot check
    if (formData.hp_field !== '') {
      console.warn('Bot detected via honeypot');
      window.location.href = '/contact/success';
      return;
    }

    setStatus('loading');

    try {
      let captchaToken = '';
      if (typeof window !== 'undefined' && window.grecaptcha && RECAPTCHA_SITE_KEY !== 'YOUR_RECAPTCHA_SITE_KEY') {
        captchaToken = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact' });
      }

      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          captchaToken
        }),
      });

      const result = await response.json();

      if (response.ok) {
        window.location.href = '/contact/success';
      } else {
        console.error('API Error Response:', result);
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  const wrapStyle = isEmbedded ? {} : pageStyle;

  // 1. Confirmation Screen
  if (step === 'confirm') {
    return (
      <div key="confirm" className={isEmbedded ? "" : "container section-padding-sm"} style={wrapStyle}>
        {!isEmbedded && (
          <div style={headerStyle}>
            <h1 style={titleStyle} className="mobile-font-size-lg">
              <span style={{ display: 'inline-block' }}>内容の確認</span>
            </h1>
            <p style={subtitleStyle}>
              <span style={{ display: 'inline-block' }}>以下の内容で送信します。</span>
              <span style={{ display: 'inline-block' }}>よろしければ「お問い合わせを送る」を</span>
              <span style={{ display: 'inline-block' }}>押してください。</span>
            </p>
          </div>
        )}

        <div style={formWrapperStyle} className="section-padding-sm">
          {isEmbedded && (
            <h3 style={embeddedHeaderStyle}>
              <span style={{ display: 'inline-block' }}>内容の確認</span>
            </h3>
          )}
          <div style={confirmListStyle}>
            <ConfirmItem label="お名前" value={formData.name} />
            <ConfirmItem label="メールアドレス" value={formData.email} />
            <ConfirmItem label="お問い合わせ内容" value={formData.content} isMultiline />
          </div>

          <div style={btnContainerStyle}>
            <button
              onClick={handleSubmit}
              className="btn btn-primary"
              style={{ ...submitBtnStyle, order: 1 }}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? '送信中...' : 'お問い合わせを送る'}
            </button>
            <button
              onClick={backToInput}
              className="btn"
              style={{ ...submitBtnStyle, backgroundColor: '#eee', color: '#333', order: 2 }}
              disabled={status === 'loading'}
            >
              修正する
            </button>
          </div>
          {status === 'error' && (
            <p style={{ color: 'red', marginTop: '20px', textAlign: 'center' }}>
              送信中にエラーが発生しました。時間を置いて再度お試しください。
            </p>
          )}
        </div>
      </div>
    );
  }

  // 2. Input Screen
  return (
    <div key="input" className={isEmbedded ? "" : "container section-padding-sm"} style={wrapStyle}>
      {!isEmbedded && (
        <div style={headerStyle}>
          <h1 style={titleStyle} className="mobile-font-size-lg">
            <span style={{ display: 'inline-block' }}>お問い合わせ</span>
          </h1>
          <p style={subtitleStyle}>
            <span style={{ display: 'inline-block' }}>新潟での教育旅行、</span>
            <span style={{ display: 'inline-block' }}>地域体験に関するご相談を承ります。</span>
          </p>
        </div>
      )}

      <div style={formWrapperStyle} className="section-padding-sm">
        {isEmbedded && (
          <h3 style={embeddedHeaderStyle}>
            <span style={{ display: 'inline-block' }}>Webからの</span>
            <span style={{ display: 'inline-block' }}>お問い合わせ</span>
          </h3>
        )}
        <form onSubmit={goToConfirm}>
          {/* Honeypot field (hidden from users) */}
          <div style={{ display: 'none' }} aria-hidden="true">
            <input
              name="hp_field"
              type="text"
              value={formData.hp_field}
              onChange={handleChange}
              tabIndex="-1"
              autoComplete="off"
            />
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle}>お名前<span style={reqStyle}>*</span></label>
            <input name="name" type="text" style={inputStyle} value={formData.name} onChange={handleChange} required placeholder="例：新潟 太郎" />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>メールアドレス<span style={reqStyle}>*</span></label>
            <input name="email" type="email" style={inputStyle} value={formData.email} onChange={handleChange} required placeholder="例：info@example.com" />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>お問い合わせ内容<span style={reqStyle}>*</span></label>
            <textarea name="content" style={{ ...inputStyle, height: '180px' }} value={formData.content} onChange={handleChange} required placeholder="ご質問やご相談内容をご記入ください"></textarea>
          </div>

          <p style={{ fontSize: '0.8rem', color: '#888', textAlign: 'center', marginBottom: '25px', lineHeight: '1.6' }}>
            <span style={{ display: 'inline-block' }}>※送信いただいた内容は、</span>
            <span style={{ display: 'inline-block' }}>当ラボのプライバシーポリシーに基づき</span>
            <span style={{ display: 'inline-block' }}>適切に管理いたします。</span>
          </p>

          <div style={{ textAlign: 'center' }}>
            <button type="submit" className="btn btn-primary" style={{ ...submitBtnStyle, width: '100%', maxWidth: '300px' }}>入力内容を確認する</button>
          </div>

          <div style={{ marginTop: '20px', fontSize: '0.7rem', color: '#ccc', textAlign: 'center' }}>
            This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" style={{ color: '#ccc' }}>Privacy Policy</a> and <a href="https://policies.google.com/terms" style={{ color: '#ccc' }}>Terms of Service</a> apply.
          </div>
        </form>
      </div>
    </div>
  );
};

// Helper Components
const ConfirmItem = ({ label, value, isMultiline }) => (
  <div style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
    <label style={{ fontSize: '0.85rem', color: '#888', display: 'block', marginBottom: '5px' }}>{label}</label>
    <div style={{ fontWeight: '500', whiteSpace: isMultiline ? 'pre-wrap' : 'normal', lineHeight: '1.6' }}>{value}</div>
  </div>
);

// Styles
const pageStyle = { paddingTop: '100px', paddingBottom: '60px', maxWidth: '800px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' };
const headerStyle = { textAlign: 'center', marginBottom: '40px' };
const titleStyle = { fontSize: '2rem', marginBottom: '15px', color: 'var(--primary-color)', fontWeight: '900', lineHeight: '1.3' };
const subtitleStyle = { fontSize: '1rem', color: 'var(--text-light)', lineHeight: '1.6' };
const formWrapperStyle = { backgroundColor: '#fff', padding: '30px 20px', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)', border: '1px solid #f0f0f0', animation: 'fadeIn 0.6s ease-out' };
const formGroupStyle = { marginBottom: '20px' };
const labelStyle = { display: 'block', marginBottom: '8px', fontWeight: '700', fontSize: '0.95rem' };
const inputStyle = { width: '100%', padding: '14px 18px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' };
const reqStyle = { color: '#e53e3e', marginLeft: '5px' };
const submitBtnStyle = { padding: '16px 40px', fontSize: '1.1rem', fontWeight: 'bold', borderRadius: '50px', width: '100%', maxWidth: '300px' };
const btnContainerStyle = { display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '40px', flexDirection: 'column', alignItems: 'center' };
const confirmListStyle = { backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '12px', border: '1px solid #f0f0f0' };
const embeddedHeaderStyle = { fontSize: '1.2rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '25px', textAlign: 'center' };

// Add global styles for animation if not present
if (typeof document !== 'undefined') {
  const styleTag = document.getElementById('contact-animations');
  if (!styleTag) {
    const style = document.createElement('style');
    style.id = 'contact-animations';
    style.innerHTML = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
  }
}

export default Contact;
