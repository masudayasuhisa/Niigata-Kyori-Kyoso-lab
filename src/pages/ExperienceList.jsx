'use client';

import React from 'react';
import { database } from '../data/database';
import ExperienceCard from '../components/ExperienceCard';
import DetailShell from '../components/DetailShell';
import useReveal from '../hooks/useReveal';

const ExperienceList = () => {
  const [filter, setFilter] = React.useState('ALL');
  const [selection, setSelection] = React.useState(null);
  const { experiences } = database;
  useReveal();

  const categories = [
    { id: 'ALL', label: 'すべて' },
    { id: 'AGRICULTURE', label: '農業体験' },
    { id: 'CULTURE', label: '文化体験' },
    { id: 'NATURE', label: '自然体験' },
    { id: 'FOOD', label: '食体験' },
  ];

  if (selection) {
    const exp = experiences.find(e => e.id === selection.id);
    return (
      <DetailShell
        title={exp.title}
        category={exp.categoryLabel}
        subtitle={exp.description}
        onBack={() => setSelection(null)}
      >
        <div style={{ fontSize: '1.1rem', lineHeight: '2' }}>
          <p>新潟の大自然と歴史が息づくこの地で、伝統的な技法や日常の営みを体験いただきます。</p>
          <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>体験のポイント</h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li style={{ marginBottom: '15px' }}><strong>本物の体験:</strong> 職人や地域の人々から直接学ぶ価値のある時間。</li>
            <li style={{ marginBottom: '15px' }}><strong>教育的価値:</strong> 次世代へ繋ぐ伝統や環境意識を育みます。</li>
            <li style={{ marginBottom: '15px' }}><strong>地域交流:</strong> 地元の温かい人々との触れ合いが宝物になります。</li>
          </ul>
          <div style={{ marginTop: '50px', backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '12px' }}>
            <h4 style={{ marginBottom: '15px' }}>スケジュール例（半日）</h4>
            <p>09:00 - 集合・オリエンテーション</p>
            <p>09:30 - 体験開始</p>
            <p>11:30 - 振り返り・交流</p>
            <p>12:00 - 解散</p>
          </div>
        </div>
      </DetailShell>
    );
  }

  const filteredExperiences = filter === 'ALL'
    ? experiences
    : experiences.filter(exp => exp.category === filter);

  return (
    <div style={pageWrapperStyle}>
      <section style={heroSectionStyle} className="section-padding-sm">
        <div className="container fade-in-up">
          <h1 style={h1Style} className="mobile-font-size-lg">EXPERIENCE</h1>
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
                  backgroundColor: filter === cat.id ? 'var(--accent)' : 'transparent',
                  color: filter === cat.id ? 'white' : 'var(--primary)',
                  borderColor: filter === cat.id ? 'var(--accent)' : 'rgba(0,0,0,0.1)',
                  boxShadow: filter === cat.id ? '0 4px 12px rgba(211, 84, 0, 0.2)' : 'none',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div style={gridStyle} className="responsive-grid">
            {filteredExperiences.map(exp => (
              <ExperienceCard
                key={exp.id}
                {...exp}
                onClick={() => setSelection({ type: 'experience', id: exp.id })}
              />
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
  backgroundColor: 'var(--bg-soft)',
  padding: '120px 0',
  textAlign: 'center',
  borderBottom: '1px solid rgba(0,0,0,0.05)'
};
const h1Style = { fontSize: '4.5rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '20px', letterSpacing: '2px' };
const subStyle = { fontSize: '1.2rem', color: 'var(--text-light)', opacity: 0.8 };
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
