import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ExperienceCard from './components/ExperienceCard';
import FarmStay from './pages/FarmStay';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ExperienceList from './pages/ExperienceList';
import PlanList from './pages/PlanList';
import Supporter from './pages/Supporter';
import { database } from './data/database';

import useReveal from './hooks/useReveal';

function App() {
  const [page, setPage] = React.useState('home');
  useReveal();

  // Scroll to top on page change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const { experiences, regions } = database;

  const renderPage = () => {
    switch(page) {
      case 'farmstay': return <FarmStay />;
      case 'contact': return <Contact />;
      case 'privacy': return <PrivacyPolicy />;
      case 'experiences': return <ExperienceList />;
      case 'plans': return <PlanList />;
      case 'supporter': return <Supporter />;
      default: return (
        <>
          <Hero />
          
          <section style={featureSectionStyle} className="reveal">
            <div className="container">
              <div style={bannerStyle}>
                <h2 style={{ fontSize: '2.2rem', lineHeight: '1.5', fontWeight: '900' }}>
                  にいがたの「農村」を、教育と感動の舞台へ。<br />
                  <span style={{ fontSize: '1.2rem', fontWeight: '500', opacity: 0.8, display: 'block', marginTop: '15px' }}>地域体験プログラムと農村ホームステイの統合プラットフォーム</span>
                </h2>
              </div>
              
              <div style={featureGridStyle}>
                <div style={{ ...featureCardBaseStyle, background: 'linear-gradient(135deg, #d35400 0%, #e67e22 100%)' }} onClick={() => setPage('farmstay')}>
                  <div style={featureTagStyle}>RECOMMEND</div>
                  <h3 style={featureCardTitleStyle}>農村ホームステイ</h3>
                  <p style={featureCardDescStyle}>受け入れホスト募集中！子どもたちの未来を共に創る、新しい交流のかたち。</p>
                  <div style={featureCardLinkStyle}>詳しく見る ➔</div>
                </div>
                <div style={{ ...featureCardBaseStyle, background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)' }} onClick={() => setPage('plans')}>
                  <h3 style={featureCardTitleStyle}>周遊プラン</h3>
                  <p style={featureCardDescStyle}>新潟の魅力を凝縮した、教育・研修旅行向けのモデルコースをご提案します。</p>
                  <div style={featureCardLinkStyle}>一覧を見る ➔</div>
                </div>
                <div style={{ ...featureCardBaseStyle, background: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)' }} onClick={() => setPage('supporter')}>
                  <h3 style={featureCardTitleStyle}>企業サポーター</h3>
                  <p style={featureCardDescStyle}>地域と企業の新しいパートナーシップ。CSRや社員研修の場として活用ください。</p>
                  <div style={featureCardLinkStyle}>詳細へ ➔</div>
                </div>
              </div>
            </div>
          </section>

          {/* EXPERIENCE SECTION */}
          <section style={listSectionStyle} className="reveal">
            <div className="container">
              <div style={sectionHeaderStyle}>
                <h2 style={sectionTitleStyle}>EXPERIENCE</h2>
                <div style={sectionSubTitleContainerStyle}>
                  <span style={sectionSubTitleStyle}>体験プログラム</span>
                  <p style={sectionDescStyle}>新潟の四季と、人々の営みに触める本物の体験を。教育的価値の高いプログラムを揃えています。</p>
                </div>
              </div>
              <div style={experienceGridStyle}>
                {experiences.slice(0, 3).map(exp => (
                  <ExperienceCard key={exp.id} {...exp} />
                ))}
              </div>
              <div style={{ textAlign: 'center', marginTop: '80px' }}>
                <button className="btn btn-primary" onClick={() => setPage('experiences')}>すべての体験プログラムを見る</button>
              </div>
            </div>
          </section>

          {/* REGION SECTION */}
          <section style={{ ...listSectionStyle, backgroundColor: '#fff' }} className="reveal">
            <div className="container">
              <div style={sectionHeaderStyle}>
                <h2 style={sectionTitleStyle}>REGION</h2>
                <div style={sectionSubTitleContainerStyle}>
                  <span style={sectionSubTitleStyle}>活動エリア</span>
                  <p style={sectionDescStyle}>個性豊かな5つのエリア。それぞれの風土が育んだ魅力的な資源をご紹介します。</p>
                </div>
              </div>
              <div style={experienceGridStyle}>
                {regions.map(region => (
                  <ExperienceCard key={region.id} title={region.name} categoryLabel="REGION" location={region.description} />
                ))}
              </div>
            </div>
          </section>

          {/* CONCEPT SECTION */}
          <section style={infoSectionStyle} className="reveal">
            <div className="container" style={infoContainerStyle}>
              <div style={infoBoxStyle}>
                <h3 style={infoTitleStyle}>にいがた郷里共創ラボとは</h3>
                <p style={infoTextStyle}>
                  新潟県には、世界に誇れる「農村の暮らし」と、それを支える「あたたかい人々」がいます。<br />
                  私たちは、それらを教育旅行や地域体験として再構築し、次世代を担う子どもたちと地域、<br />
                  そして学校を繋ぐ架け橋となることを目指しています。
                </p>
                
                <div style={conceptGridStyle}>
                  <div style={conceptItemStyle}>
                    <h4>教育的な価値の創造</h4>
                    <p>単なる観光ではなく、学びとしての体験。新潟のフィールドを活かした独自カリキュラムを提案します。</p>
                  </div>
                  <div style={conceptItemStyle}>
                    <h4>持続可能な地域づくり</h4>
                    <p>外部との交流を通じて地域の誇りを取り戻し、次世代へ継承する仕組みを創り出します。</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }
  };

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header setPage={setPage} />
      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>
      <Footer setPage={setPage} />
    </div>
  );
}

// Styles
const featureSectionStyle = { padding: '100px 0', backgroundColor: '#fcfcfc' };
const bannerStyle = { backgroundColor: '#34495e', color: 'white', padding: '60px 40px', textAlign: 'center', borderRadius: '4px', marginBottom: '60px' };
const featureGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' };
const featureCardBaseStyle = { color: 'white', padding: '50px 30px', textAlign: 'left', borderRadius: '8px', cursor: 'pointer', transition: 'transform 0.3s ease', position: 'relative', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' };
const featureTagStyle = { position: 'absolute', top: '20px', right: '20px', backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.7rem', padding: '4px 10px', borderRadius: '4px', fontWeight: 'bold' };
const featureCardTitleStyle = { fontSize: '1.6rem', fontWeight: '800', marginBottom: '15px' };
const featureCardDescStyle = { fontSize: '1rem', lineHeight: '1.6', opacity: 0.9, marginBottom: '25px', minHeight: '80px' };
const featureCardLinkStyle = { fontSize: '1rem', fontWeight: 'bold', borderBottom: '2px solid white', display: 'inline-block' };
const listSectionStyle = { padding: '120px 0', backgroundColor: '#f9f9f9' };
const sectionHeaderStyle = { display: 'flex', alignItems: 'flex-start', gap: '50px', marginBottom: '80px' };
const sectionTitleStyle = { fontSize: '5rem', fontWeight: '900', color: '#eaeaea', lineHeight: '0.8', margin: '0' };
const sectionSubTitleContainerStyle = { display: 'flex', flexDirection: 'column', gap: '15px' };
const sectionSubTitleStyle = { fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--primary-color)' };
const sectionDescStyle = { color: 'var(--text-light)', maxWidth: '600px', fontSize: '1.1rem', lineHeight: '1.8' };
const experienceGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' };
const moreButtonStyle = { backgroundColor: 'transparent', color: 'var(--primary-color)', border: '2px solid var(--primary-color)', padding: '18px 60px', borderRadius: '50px', fontSize: '1.1rem', fontWeight: 'bold' };
const infoSectionStyle = { padding: '150px 0', backgroundColor: '#1a252f', color: 'white' };
const infoContainerStyle = { display: 'flex', justifyContent: 'center' };
const infoBoxStyle = { maxWidth: '1000px', textAlign: 'center' };
const infoTitleStyle = { fontSize: '3rem', fontWeight: '800', marginBottom: '40px' };
const infoTextStyle = { fontSize: '1.3rem', lineHeight: '2', marginBottom: '80px', opacity: 0.9 };
const conceptGridStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', textAlign: 'left' };
const conceptItemStyle = { padding: '40px', borderTop: '4px solid var(--accent-color)', backgroundColor: 'rgba(255,255,255,0.03)' };

export default App;
