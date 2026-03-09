import React from 'react';

const DetailShell = ({ title, category, subtitle, children, onBack }) => {
    return (
        <div style={shellWrapperStyle}>
            <div style={detailHeroStyle}>
                <div className="container" style={heroContentStyle}>
                    <div style={backBtnStyle} onClick={onBack}>
                        ← 戻る
                    </div>
                    <div style={categoryBadgeStyle}>{category}</div>
                    <h1 style={titleStyle} className="mobile-font-size-lg">{title}</h1>
                    <p style={subtitleStyle}>{subtitle}</p>
                </div>
            </div>

            <div style={contentWrapperStyle} className="container responsive-grid">
                <div style={mainContentStyle} className="glass-card section-padding-sm">
                    {children}
                </div>

                <div style={sidebarStyle}>
                    <div className="glass-card" style={ctaBoxStyle}>
                        <h4 style={ctaTitleStyle}>お問い合わせ</h4>
                        <p style={ctaDescStyle}>この体験やプランについて詳しく知りたい方は、お気軽にご相談ください。</p>
                        <button className="btn btn-primary" style={{ width: '100%' }}>相談する</button>
                    </div>

                    <div style={infoBoxStyle}>
                        <h4 style={infoTitleStyle}>基本情報</h4>
                        <div style={infoItemStyle}>
                            <span style={infoLabelStyle}>対象</span>
                            <span style={infoValueStyle}>教育旅行 / 研修旅行</span>
                        </div>
                        <div style={infoItemStyle}>
                            <span style={infoLabelStyle}>エリア</span>
                            <span style={infoValueStyle}>新潟県内全域</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const shellWrapperStyle = {
    paddingTop: '80px',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
};

const detailHeroStyle = {
    backgroundColor: 'var(--bg-dark)',
    color: 'white',
    padding: '100px 0 160px',
    position: 'relative',
};

const heroContentStyle = {
    maxWidth: '1000px',
};

const backBtnStyle = {
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '700',
    opacity: 0.6,
    marginBottom: '30px',
    display: 'inline-block',
    transition: 'opacity 0.3s',
};

const categoryBadgeStyle = {
    display: 'inline-block',
    backgroundColor: 'var(--accent)',
    color: 'white',
    padding: '5px 15px',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontWeight: '800',
    marginBottom: '20px',
    letterSpacing: '0.1em',
};

const titleStyle = {
    fontSize: '3.5rem',
    fontWeight: '900',
    marginBottom: '20px',
    lineHeight: '1.2',
};

const subtitleStyle = {
    fontSize: '1.25rem',
    opacity: 0.8,
    lineHeight: '1.6',
};

const contentWrapperStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 320px',
    gap: '40px',
    marginTop: '-100px',
    paddingBottom: '100px',
    position: 'relative',
    zIndex: 10,
};

const mainContentStyle = {
    backgroundColor: 'white',
    padding: '60px',
    borderRadius: '20px',
};

const sidebarStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
};

const ctaBoxStyle = {
    padding: '40px 30px',
    backgroundColor: 'white',
    textAlign: 'center',
};

const ctaTitleStyle = {
    fontSize: '1.2rem',
    fontWeight: '800',
    marginBottom: '15px',
};

const ctaDescStyle = {
    fontSize: '0.9rem',
    lineHeight: '1.6',
    color: 'var(--text-light)',
    marginBottom: '30px',
};

const infoBoxStyle = {
    padding: '20px',
};

const infoTitleStyle = {
    fontSize: '1rem',
    fontWeight: '800',
    marginBottom: '20px',
    paddingBottom: '10px',
    borderBottom: '2px solid var(--accent)',
};

const infoItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
    fontSize: '0.9rem',
};

const infoLabelStyle = {
    color: '#999',
    fontWeight: '500',
};

const infoValueStyle = {
    fontWeight: '700',
    color: 'var(--primary)',
};

export default DetailShell;
