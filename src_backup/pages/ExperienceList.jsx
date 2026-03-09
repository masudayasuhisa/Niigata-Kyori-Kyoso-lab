import React from 'react';
import { database } from '../data/database';
import ExperienceCard from '../components/ExperienceCard';
import useReveal from '../hooks/useReveal';

const ExperienceList = () => {
  const [filter, setFilter] = React.useState('ALL');
  const { experiences } = database;
  useReveal();

  const categories = [
    { id: 'ALL', label: 'すべて' },
    { id: 'AGRICULTURE', label: '農業体験' },
    { id: 'CULTURE', label: '文化体験' },
    { id: 'NATURE', label: '自然体験' },
    { id: 'FOOD', label: '食体験' },
  ];

  const filteredExperiences = filter === 'ALL' 
    ? experiences 
    : experiences.filter(exp => exp.category === filter);

  return (
    <div style={pageWrapperStyle}>
      <section style={heroSectionStyle}>
        <div className="container fade-in-up">
          <h1 style={h1Style}>EXPERIENCE</h1>
          <p style={subStyle}>新潟の四季と、人々の営みに触れる本物の体験を。</p>
        </div>
      </section>

      <section style={listSectionStyle} className="reveal">
        <div className="container">
          <div style={filterContainerStyle}>
            {categories.map(cat => (
              <button 
                key={cat.id} 
                onClick={() => setFilter(cat.id)}
                style={{
                  ...filterButtonStyle,
                  backgroundColor: filter === cat.id ? 'var(--primary-color)' : 'transparent',
                  color: filter === cat.id ? 'white' : 'var(--text-light)',
                  borderColor: filter === cat.id ? 'var(--primary-color)' : '#ddd',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div style={gridStyle}>
            {filteredExperiences.map(exp => (
              <ExperienceCard key={exp.id} {...exp} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Styles
const pageWrapperStyle = { paddingTop: '90px' };
const heroSectionStyle = { 
  backgroundColor: '#f8f9fa', 
  padding: '100px 0', 
  textAlign: 'center',
  borderBottom: '1px solid #eee'
};
const h1Style = { fontSize: '4rem', fontWeight: '900', color: 'var(--primary-color)', marginBottom: '20px', letterSpacing: '2px' };
const subStyle = { fontSize: '1.2rem', color: 'var(--text-light)' };
const listSectionStyle = { padding: '80px 0' };
const filterContainerStyle = { display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '60px', flexWrap: 'wrap' };
const filterButtonStyle = { 
  padding: '10px 25px', 
  borderRadius: '30px', 
  border: '1px solid', 
  fontSize: '0.9rem', 
  fontWeight: '600', 
  cursor: 'pointer',
  transition: 'var(--transition-smooth)'
};
const gridStyle = { 
  display: 'grid', 
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
  gap: '40px' 
};

export default ExperienceList;
