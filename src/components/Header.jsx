'use client';

import React from 'react';
import logoImg from '../assets/logo-full.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const IS_LP_MODE = true; // Set to false to show full site navigation

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const allNavItems = [
    { id: 'experiences', label: '体験', href: '/experiences' },
    { id: 'farm-stay', label: '宿泊', href: '/farm-stay' },
    { id: 'home', label: '地域', href: '/' },
    { id: 'plans', label: '周遊プラン', href: '/plans' },
    { id: 'farmstay-special', label: '農村ホームステイ（民泊）', isAccent: true, href: '/farm-stay' },
    { id: 'supporter', label: '企業サポーター', href: '/supporter' },
  ];

  // In LP mode, we hide all navigation items to focus on the LP content.
  const navItems = IS_LP_MODE ? [] : allNavItems;

  const isActive = (href) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className={`glass-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container" style={navWrapperStyle}>
        <Link href="/" style={{ ...logoStyle, display: 'block' }}>
          <img src={logoImg.src || logoImg} alt="にいがた郷里共創ラボ" style={{ height: '54px', verticalAlign: 'middle' }} />
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <Link
                  href={item.href}
                  className={item.isAccent ? `accent-link ${isActive('/farm-stay') ? 'active' : ''}` : ''}
                  style={item.isAccent ? {} : (isActive(item.href) ? { color: 'var(--accent)' } : {})}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* SNS Icons (Desktop) */}
        <div style={snsIconsStyle} className="desktop-sns">
          <a href="https://www.facebook.com/green2rhythm.jp" target="_blank" rel="noopener noreferrer" style={snsIconLinkStyle} title="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="https://www.instagram.com/green2rhythm/" target="_blank" rel="noopener noreferrer" style={snsIconLinkStyle} title="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
        </div>

        {/* Hamburger Button */}
        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)} style={hamburgerButtonStyle}>
          <div style={{ ...hamburgerLineStyle, transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></div>
          <div style={{ ...hamburgerLineStyle, opacity: isMenuOpen ? 0 : 1 }}></div>
          <div style={{ ...hamburgerLineStyle, transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none' }}></div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div style={{ ...mobileMenuOverlayStyle, transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}>
        <ul style={mobileNavLinksStyle}>
          {navItems.map((item) => (
            <li key={item.id} style={mobileNavItemStyle}>
              <Link
                href={item.href}
                style={{
                  ...mobileNavLinkStyle,
                  color: isActive(item.href) ? 'var(--accent)' : 'var(--primary)'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li style={{ ...mobileNavItemStyle, marginTop: '20px' }}>
            <div style={{ display: 'flex', gap: '25px', justifyContent: 'center' }}>
              <a href="https://www.facebook.com/green2rhythm.jp" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/green2rhythm/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

const headerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 1000,
  height: '90px',
  display: 'flex',
  alignItems: 'center',
};

const navWrapperStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
};

const logoStyle = {
  fontSize: '1.4rem',
  fontWeight: '900',
  color: 'var(--primary)',
  cursor: 'pointer',
  letterSpacing: '-0.5px',
};

const navLinksStyle = {
  display: 'flex',
  gap: '30px',
  fontSize: '0.9rem',
  fontWeight: '600',
  letterSpacing: '0.5px',
};

const accentLinkStyle = {
  color: 'var(--accent)',
  borderBottom: '2px solid var(--accent)',
  paddingBottom: '5px',
};

const snsIconLinkStyle = {
  cursor: 'pointer',
  opacity: 0.7,
  transition: 'all 0.3s ease',
  color: 'var(--primary)',
  display: 'flex',
  alignItems: 'center',
};

const snsIconsStyle = {
  display: 'flex',
  gap: '20px',
  fontSize: '1.3rem',
};

const hamburgerButtonStyle = {
  display: 'none',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '30px',
  height: '22px',
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  zIndex: 1100,
};

const hamburgerLineStyle = {
  width: '100%',
  height: '2px',
  backgroundColor: 'var(--primary)',
  transition: 'all 0.3s ease',
};

const mobileMenuOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  backgroundColor: 'white',
  zIndex: 1050,
  paddingTop: '120px',
  transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
};

const mobileNavLinksStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  textAlign: 'center',
};

const mobileNavItemStyle = {
  marginBottom: '30px',
};

const mobileNavLinkStyle = {
  fontSize: '1.4rem',
  fontWeight: '800',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
};

export default Header;
