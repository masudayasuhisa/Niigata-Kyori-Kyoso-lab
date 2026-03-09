'use client';

import React from 'react';
import Link from 'next/link';

export default function SuccessPage() {
    return (
        <div className="container" style={containerStyle}>
            <div style={cardStyle}>
                <div style={iconWrapperStyle}>
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={svgStyle}>
                        <path d="M12 22C12 22 12 17 12 12C12 7 15 4 19 4C19 4 20 8 16 12C12 16 12 22 12 22Z" fill="var(--primary)" />
                        <path d="M12 22C12 22 12 18 12 14C12 10 9 7 5 7C5 7 4 11 8 15C12 19 12 22 12 22Z" fill="var(--primary)" opacity="0.7" />
                        <path d="M12 22V12" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>
                <h1 style={titleStyle}>
                    <span style={{ display: 'inline-block' }}>送信が完了</span>
                    <span style={{ display: 'inline-block' }}>しました</span>
                </h1>
                <p style={textStyle}>
                    <span style={{ display: 'inline-block' }}>お問い合わせいただき、</span>
                    <span style={{ display: 'inline-block' }}>誠にありがとうございます。</span><br />
                    <span style={{ display: 'inline-block' }}>内容を確認の上、</span>
                    <span style={{ display: 'inline-block' }}>担当者より折り返しご連絡</span>
                    <span style={{ display: 'inline-block' }}>させていただきます。</span>
                </p>
                <p style={{ ...textStyle, fontSize: '0.9rem', color: '#888', marginTop: '15px' }}>
                    <span style={{ display: 'inline-block' }}>数日経っても連絡がない場合は、</span>
                    <span style={{ display: 'inline-block' }}>お手数ですが再度</span>
                    <span style={{ display: 'inline-block' }}>お問い合わせください。</span>
                </p>
                <div style={btnWrapperStyle}>
                    <Link href="/" style={btnStyle}>
                        トップページへ戻る
                    </Link>
                </div>
            </div>
        </div>
    );
}

const containerStyle = {
    paddingTop: '120px',
    paddingBottom: '80px',
    paddingLeft: '20px',
    paddingRight: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh'
};

const cardStyle = {
    backgroundColor: '#fff',
    padding: '50px 25px',
    borderRadius: '24px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.05)',
    textAlign: 'center',
    maxWidth: '500px',
    width: '100%',
    border: '1px solid #f0f0f0',
    animation: 'fadeIn 0.8s ease-out'
};

const iconWrapperStyle = {
    marginBottom: '30px',
    display: 'flex',
    justifyContent: 'center',
    animation: 'float 3s ease-in-out infinite'
};

const svgStyle = {
    filter: 'drop-shadow(0 4px 10px rgba(38, 122, 77, 0.2))'
};

// Add float animation to global styles via a trick or assuming global.css
if (typeof document !== 'undefined') {
    const styleId = 'success-animations';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.innerHTML = `
            @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
                100% { transform: translateY(0px); }
            }
        `;
        document.head.appendChild(style);
    }
}

const titleStyle = {
    fontSize: '1.75rem',
    fontWeight: '900',
    color: 'var(--primary)',
    marginBottom: '20px',
    fontFamily: '"Kaisei Tokumin", serif',
    lineHeight: '1.3'
};

const textStyle = {
    fontSize: '0.95rem',
    lineHeight: '1.7',
    color: 'var(--text-light)',
    margin: 0
};

const btnWrapperStyle = {
    marginTop: '40px'
};

const btnStyle = {
    backgroundColor: 'var(--primary)',
    color: 'white',
    padding: '16px 45px',
    borderRadius: '50px',
    fontSize: '1rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    display: 'inline-block',
    boxShadow: '0 8px 25px rgba(38, 122, 77, 0.2)',
    transition: 'transform 0.3s'
};
