import React from 'react';

const Contact = () => {
  return (
    <div className="container" style={pageStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>お問い合わせ</h1>
        <p style={subtitleStyle}>新潟での教育旅行、地域体験、農村ホームステイに関するご相談・ご質問を承ります。</p>
      </div>

      <div style={formWrapperStyle}>
        <form>
          <div style={formGroupStyle}>
            <label style={labelStyle}>お問い合わせ種別<span style={reqStyle}>*</span></label>
            <select style={inputStyle} required>
              <option value="">選択してください</option>
              <option>教育旅行の実施について</option>
              <option>体験プログラムの詳細について</option>
              <option>農村ホームステイ（民泊）について</option>
              <option>取材・メディア掲載について</option>
              <option>その他</option>
            </select>
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>お名前（担当者名）<span style={reqStyle}>*</span></label>
            <input type="text" style={inputStyle} required />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>貴社名・団体名</label>
            <input type="text" style={inputStyle} />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>メールアドレス<span style={reqStyle}>*</span></label>
            <input type="email" style={inputStyle} required />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>お電話番号</label>
            <input type="tel" style={inputStyle} />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>お問い合わせ内容<span style={reqStyle}>*</span></label>
            <textarea style={{ ...inputStyle, height: '200px' }} required></textarea>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button type="submit" className="btn btn-primary" style={submitBtnStyle}>入力内容を確認する</button>
          </div>
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
