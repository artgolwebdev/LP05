import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Don't render if not visible
  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '25px',
        right: '25px',
        width: '56px',
        height: '56px',
        background: 'linear-gradient(135deg, #87a96b, #4a7c59)',
        color: 'white',
        borderRadius: '50%',
        cursor: 'pointer',
        zIndex: 1000,
        fontSize: '20px',
        fontWeight: '600',
        boxShadow: '0 4px 16px rgba(34, 139, 34, 0.3), 0 2px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'linear-gradient(135deg, #4a7c59, #2d5016)';
        e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(34, 139, 34, 0.4), 0 4px 12px rgba(0, 0, 0, 0.15)';
        e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'linear-gradient(135deg, #87a96b, #4a7c59)';
        e.currentTarget.style.transform = 'scale(1) translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(34, 139, 34, 0.3), 0 2px 8px rgba(0, 0, 0, 0.1)';
        e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.2)';
      }}
      title="Scroll to top"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
