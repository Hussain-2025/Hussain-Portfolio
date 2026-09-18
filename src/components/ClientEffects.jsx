import React, { useEffect, useState } from 'react';

export default function ClientEffects() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Hide Loader
    const loaderTimer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    // 2. Navbar Scrolled State
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    // 3. Scroll Reveal Observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const observeReveals = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((el) => revealObserver.observe(el));
    };

    observeReveals();
    const revealInterval = setInterval(observeReveals, 1000);

    return () => {
      clearTimeout(loaderTimer);
      clearInterval(revealInterval);
      window.removeEventListener('scroll', handleScroll);
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className={`loader-wrapper ${!loading ? 'hidden' : ''}`}>
      <div className="loader-title">Hussain Asghar</div>
      <div className="loader-bar-bg">
        <div className="loader-bar-fill"></div>
      </div>
      <div style={{ 
        marginTop: '1.5rem', 
        color: 'var(--text-muted)', 
        fontSize: '0.75rem', 
        letterSpacing: '0.15em', 
        textTransform: 'uppercase' 
      }}>
        Loading Portfolio
      </div>
    </div>
  );
}
