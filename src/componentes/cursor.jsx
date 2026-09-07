import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over clickable elements
      const target = e.target;
      if (
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button'
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Hide default cursor globally, but only on non-touch devices
  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) {
      document.body.style.cursor = 'none';
      const elements = document.querySelectorAll('a, button, [role="button"]');
      elements.forEach(el => el.style.cursor = 'none');
    }
  }, []);

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-6 h-6 rounded-full border border-cyan-400 pointer-events-none z-[9999] mix-blend-screen transition-transform duration-100 ease-out hidden md:block"
        style={{ 
          transform: `translate(${position.x - 12}px, ${position.y - 12}px) scale(${isPointer ? 1.5 : 1})`,
          backgroundColor: isPointer ? 'rgba(34, 211, 238, 0.2)' : 'transparent'
        }}
      ></div>
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[10000] hidden md:block"
        style={{ 
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)` 
        }}
      ></div>
    </>
  );
};

export default Cursor;
