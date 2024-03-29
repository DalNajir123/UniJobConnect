import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get current scroll position
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Set button visibility based on scroll position
      setIsVisible(scrollTop > 100); // Adjust 100 to the desired scroll position
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
  onClick={scrollToTop}
  className={`fixed font-bold bottom-10 right-10 bg-gradient-to-r from-zinc-500 to-sky-600 text-white py-2 px-4 rounded-lg hover:scale-110 hover:from-sky-600 hover:to-zinc-600 transition-transform duration-700 ease-in-out transform ${isVisible ? 'block' : 'hidden'}`}
>
  <span className='text-lg '>Scroll To Top</span>
</button>


  );
}

export default ScrollToTopButton;
