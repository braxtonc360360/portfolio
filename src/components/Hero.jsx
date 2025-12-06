import React, { useState, useEffect } from 'react';
import '../css/Hero.css';
import { Link } from 'react-router-dom';
const Hero = ({ title, subtitle, footer, ctaText, ctaPath }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const words = Array.isArray(title) ? title : [title];
    const i = loopNum % words.length;
    const fullText = words[i];

    const handleTyping = () => {
      let updatedText = isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setTypingSpeed(40);
      } else {
        setTypingSpeed(150);
      }

      if (!isDeleting && updatedText === fullText) {
        setTypingSpeed(2000); 
        setIsDeleting(true);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); 
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);

  }, [text, isDeleting, loopNum, title, typingSpeed]);

  return (
    <div className="hero-container">
      <h1 className="hero-title">
        {text}
        <span className="cursor">|</span>
      </h1>
      
      <p className="hero-subtitle">
        {subtitle}
      </p>
      
      {ctaText && ctaPath && (
        <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
          <Link to={ctaPath} className="retro-btn">

            {ctaText}
          </Link>
        </div>
      )}
      
      {footer && (
        <div className="hero-footer">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Hero;