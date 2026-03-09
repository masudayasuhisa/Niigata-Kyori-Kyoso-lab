import React from 'react';

const RegionCard = ({ name, description, image }) => {
    return (
        <div style={cardStyle} className="region-card reveal">
            <div style={imageWrapperStyle}>
                {image ? (
                    <img src={image.src || image} alt={name} style={imgStyle} />
                ) : (
                    <div style={placeholderStyle}>
                        <span style={iconStyle}>🏞️</span>
                    </div>
                )}
                <div style={overlayStyle}></div>
                <div style={contentStyle}>
                    <h3 style={nameStyle}>{name}</h3>
                    <p style={descriptionStyle}>{description}</p>
                    <div style={linkStyle}>エリア詳細を見る ➔</div>
                </div>
            </div>
        </div>
    );
};

const cardStyle = {
    borderRadius: 'var(--border-radius)',
    overflow: 'hidden',
    cursor: 'pointer',
    height: '320px',
    position: 'relative',
    transition: 'var(--transition-premium)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
};

const imageWrapperStyle = {
    width: '100%',
    height: '100%',
    position: 'relative',
};

const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
};

const placeholderStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: '#1a252f',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const iconStyle = {
    fontSize: '3rem',
    opacity: 0.3,
};

const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.2) 60%, rgba(15, 23, 42, 0) 100%)',
    zIndex: 1,
};

const contentStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: '30px',
    zIndex: 2,
    color: 'white',
    width: '100%',
};

const nameStyle = {
    fontSize: '2rem',
    fontWeight: '900',
    marginBottom: '10px',
    letterSpacing: '1px',
};

const descriptionStyle = {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    opacity: 0.8,
    marginBottom: '20px',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
};

const linkStyle = {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: 'var(--accent)',
    letterSpacing: '0.05em',
};

export default RegionCard;
