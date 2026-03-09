'use client';

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    company: '',
    email: '',
    tel: '',
    content: ''
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="container section-padding-sm" style={pageStyle}>
        <div style={formWrapperStyle} className="mobile-text-center">
          <h2 style={{ color: 'var(--accent)', marginBottom: '20px' }}>お問い合わせありがとうございます</h2>
          <p>内容を確認の上、担当者より折り返しご連絡させていただきます。</p>
          <button onClick={() => setStatus('idle')} className="btn btn-primary" style={{ marginTop: '30px' }}>
            フォームに戻る
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container section-padding-sm" style={pageStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle} className="mobile-font-size-lg">お問い合わせ</h1>
        <p style={subtitleStyle}>新潟での教育旅行、地域体験、農村ホームステイに関するご相談・ご質問を承ります。</p>
      </div>

      <div style={formWrapperStyle} className="section-padding-sm">
        <form onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label style={labelStyle}>お問い合わせ種別<span style={reqStyle}>*</span></label>
            <select
              name="type"
              style={inputStyle}
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="">選択してください</option>
              <option value="教育旅行の実施について">教育旅行の実施について</option>
              <option value="体験プログラムの詳細について">体験プログラムの詳細について</option>
              <option value="農村ホームステイ（民泊）について">農村ホームステイ（民泊）について</option>
              <option value="取材・メディア掲載について">取材・メディア掲載について</option>
              <option value="その他">その他</option>
            </select>
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>お名前（担当者名）<span style={reqStyle}>*</span></label>
            <input
              name="name"
              type="text"
              style={inputStyle}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>貴社名・団体名</label>
            <input
              name="company"
              type="text"
              style={inputStyle}
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>メールアドレス<span style={reqStyle}>*</span></label>
            <input
              name="email"
              type="email"
              style={inputStyle}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>お電話番号</label>
            <input
              name="tel"
              type="tel"
              style={inputStyle}
              value={formData.tel}
              onChange={handleChange}
            />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>お問い合わせ内容<span style={reqStyle}>*</span></label>
            <textarea
              name="content"
              style={{ ...inputStyle, height: '200px' }}
              value={formData.content}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button
              type="submit"
              className="btn btn-primary"
              style={submitBtnStyle}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? '送信中...' : 'この内容で送信する'}
            </button>
          </div>
          {status === 'error' && (
            <p style={{ color: 'red', marginTop: '20px', textAlign: 'center' }}>
              送信中にエラーが発生しました。時間を置いて再度お試しください。
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

const pageStyle = { paddingTop: '150px', paddingBottom: '100px', maxWidth: '800px', margin: '0 auto' };
const headerStyle = { textAlign: 'center', marginBottom: '60px' };
const titleStyle = { fontSize: '2.5rem', marginBottom: '20px', color: 'var(--primary-color)' };
const subtitleStyle = { fontSize: '1.1rem', color: 'var(--text-light)', lineHeight: '1.6' };
const formWrapperStyle = { backgroundColor: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #eee' };
const formGroupStyle = { marginBottom: '25px' };
const labelStyle = { display: 'block', marginBottom: '8px', fontWeight: '600' };
const inputStyle = { width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '1rem' };
const reqStyle = { color: 'red', marginLeft: '5px' };
const submitBtnStyle = { padding: '15px 50px', fontSize: '1.1rem', fontWeight: 'bold' };

export default Contact;
