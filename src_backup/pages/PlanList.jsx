import React from 'react';
import { database } from '../data/database';
import useReveal from '../hooks/useReveal';

const PlanList = () => {
  const { circularPlans } = database;
  useReveal();

  return (
    <div style={pageWrapperStyle}>
      <section style={heroSectionStyle}>
        <div className="container fade-in-up">
          <h1 style={h1Style}>CIRCULAR PLANS</h1>
          <p style={subStyle}>教育旅行・研修旅行に最適な、新潟を巡るモデルコース。</p>
        </div>
      </section>

      <section style={listSectionStyle}>
        <div className="container">
          {circularPlans.map((plan, index) => (
            <div key={plan.id} style={planCardStyle} className="reveal">
              <div style={planHeaderStyle}>
                <div style={tagStyle}>PLAN {index + 1}</div>
                <h2 style={planTitleStyle}>{plan.title}</h2>
                <div style={metaStyle}>
                  <span>エリア: {plan.area}</span> | <span>期間: {plan.duration}</span> | <span>目安予算: {plan.price}</span>
                </div>
                <p style={planDescStyle}>{plan.description}</p>
              </div>

              <div style={timelineStyle}>
                {plan.steps.map((step, idx) => (
                  <div key={idx} style={stepStyle}>
                    <div style={dayBadgeStyle}>DAY {step.day}</div>
                    <div style={stepContentStyle}>
                      <h4 style={stepTitleStyle}>{step.title}</h4>
                      <p style={stepDetailStyle}>{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <button className="btn btn-primary">このプランについて相談する</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Styles
const pageWrapperStyle = { paddingTop: '90px' };
const heroSectionStyle = { 
  backgroundColor: '#2c3e50', 
  color: 'white',
  padding: '100px 0', 
  textAlign: 'center',
};
const h1Style = { fontSize: '4rem', fontWeight: '900', marginBottom: '20px', letterSpacing: '2px' };
const subStyle = { fontSize: '1.2rem', opacity: 0.8 };
const listSectionStyle = { padding: '100px 0', backgroundColor: '#f9f9f9' };
const planCardStyle = { 
  backgroundColor: 'white', 
  borderRadius: '20px', 
  padding: '60px', 
  marginBottom: '80px',
  boxShadow: 'var(--shadow-premium)',
};
const planHeaderStyle = { textAlign: 'center', marginBottom: '60px', borderBottom: '1px solid #eee', paddingBottom: '40px' };
const tagStyle = { color: 'var(--accent-color)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '10px' };
const planTitleStyle = { fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px', color: 'var(--primary-color)' };
const metaStyle = { fontSize: '1rem', color: 'var(--text-light)', marginBottom: '20px' };
const planDescStyle = { maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8' };

const timelineStyle = { maxWidth: '700px', margin: '0 auto', borderLeft: '2px dashed #ddd', paddingLeft: '40px' };
const stepStyle = { position: 'relative', marginBottom: '40px' };
const dayBadgeStyle = { 
  position: 'absolute', 
  left: '-71px', 
  top: '0', 
  width: '60px', 
  height: '30px', 
  backgroundColor: 'var(--primary-color)', 
  color: 'white', 
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.8rem',
  fontWeight: 'bold'
};
const stepContentStyle = { textAlign: 'left' };
const stepTitleStyle = { fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '10px' };
const stepDetailStyle = { color: 'var(--text-light)', lineHeight: '1.6' };

export default PlanList;
