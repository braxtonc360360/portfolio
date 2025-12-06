import React, { useState, useEffect } from 'react';

const TextType = ({
  text,
  speed = 100,
  deleteSpeed = 50,
  waitTime = 2000,
  cursorChar = "_",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % text.length;
      const fullText = text[i];

      setDisplayedText(
        isDeleting
          ? fullText.substring(0, displayedText.length - 1)
          : fullText.substring(0, displayedText.length + 1)
      );

      let nextSpeed = speed;
      if (isDeleting) nextSpeed = deleteSpeed;

      if (!isDeleting && displayedText === fullText) {
        // Finished typing the word. Pause!
        nextSpeed = waitTime;
        setIsDeleting(true);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        nextSpeed = 500; 
      }

      setTypingSpeed(nextSpeed);
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, typingSpeed, text, speed, deleteSpeed, waitTime]);

  return (
    <span className="text-type-wrapper">
      {displayedText}
      <span className="cursor">{cursorChar}</span>
      
      <style>{`
        .cursor {
          display: inline-block;
          margin-left: 2px;
          animation: blink 1s step-end infinite;
          color: var(--accent); /* Matches your site theme */
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
};

export default TextType;