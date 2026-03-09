import React from 'react';

const ExperienceCard = ({ title, categoryLabel, location, image }) => {
  return (
    <div style={cardStyle} className="reveal">
      <div style={imageWrapperStyle}>
        {image ? (
          <img src={image} alt={title} style={imgStyle} />
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
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: 'var(--shadow-premium)',
  transition: 'var(--transition-smooth)',
  cursor: 'pointer',
  height: '100%',
  border: '1px solid rgba(0,0,0,0.03)',
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
  backgroundColor: 'var(--primary-color)',
  color: 'white',
  padding: '6px 12px',
  borderRadius: '4px',
  fontSize: '0.75rem',
  fontWeight: 'bold',
  letterSpacing: '1px',
};

const contentStyle = {
  padding: '24px',
};

const titleStyle = {
  fontSize: '1.4rem',
  marginBottom: '12px',
  fontWeight: '800',
  color: 'var(--primary-color)',
  lineHeight: '1.3',
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
