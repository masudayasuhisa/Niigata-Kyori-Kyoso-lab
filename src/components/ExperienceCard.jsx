import React from 'react';

const ExperienceCard = ({ title, categoryLabel, location, image, onClick, className }) => {
  return (
    <div style={cardStyle} className={`${className || ''} reveal`} onClick={onClick}>
      <div style={imageWrapperStyle}>
        {image ? (
          <img src={image.src || image} alt={title} style={imgStyle} />
        ) : (
          <div style={placeholderStyle}>{categoryLabel}</div>
        )}
        <div style={badgeStyle}>{categoryLabel}</div>
      </div>
      <div style={contentStyle}>
        <h3 style={titleStyle}>{title}</h3>
        <p style={locationStyle}>📍 {location}</p>
        <div style={tagsStyle}>
          <span style={tagStyle}>#教育旅行</span>
          <span style={tagStyle}>#新潟体験</span>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  backgroundColor: 'white',
  borderRadius: 'var(--border-radius)',
  overflow: 'hidden',
  boxShadow: 'var(--glass-shadow)',
  transition: 'var(--transition-premium)',
  cursor: 'pointer',
  height: '100%',
  border: '1px solid rgba(0,0,0,0.05)',
};

const imageWrapperStyle = {
  height: '240px',
  position: 'relative',
  overflow: 'hidden',
};

const imgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'var(--transition-smooth)',
};

const placeholderStyle = {
  width: '100%',
  height: '100%',
  backgroundColor: '#f1f2f6',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#a4b0be',
  fontSize: '1.2rem',
  fontWeight: 'bold',
};

const badgeStyle = {
  position: 'absolute',
  top: '20px',
  left: '20px',
  backgroundColor: 'var(--accent)',
  color: 'white',
  padding: '6px 14px',
  borderRadius: '100px',
  fontSize: '0.7rem',
  fontWeight: '800',
  letterSpacing: '0.1em',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
};

const contentStyle = {
  padding: '24px',
};

const titleStyle = {
  fontSize: '1.4rem',
  marginBottom: '12px',
  fontWeight: '800',
  color: 'var(--primary)',
  lineHeight: '1.35',
};

const locationStyle = {
  fontSize: '0.95rem',
  color: 'var(--text-light)',
  marginBottom: '20px',
};

const tagsStyle = {
  display: 'flex',
  gap: '8px',
};

const tagStyle = {
  fontSize: '0.8rem',
  backgroundColor: '#f1f2f6',
  padding: '5px 12px',
  borderRadius: '50px',
  color: '#57606f',
};

export default ExperienceCard;
