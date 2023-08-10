'use client';
import { useState, useEffect } from 'react';

const ScrollUpButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 600
        ? setBackToTopButton(true)
        : setBackToTopButton(false);
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {backToTopButton && (
        <button
          onClick={scrollUp}
          className='fixed bottom-[30px] right-[30px] w-7 h-7 bg-primary-blue rounded-full text-white flex justify-center items-center font-bold pt-1'
        >
          ^
        </button>
      )}
    </div>
  );
};

export default ScrollUpButton;
