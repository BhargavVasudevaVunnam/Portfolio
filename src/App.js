import React, { useEffect, useRef } from 'react';
import './App.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

function App() {
  const ht = window.innerHeight;

  const fact1Ref = useRef(0);
  const fact2Ref = useRef(0);
  const fact3Ref = useRef(0);

  function animateit() {
    const sl = window.scrollY;

    if (sl >= 0 && sl < ht) {
      fact1Ref.current = (sl - 0) * 0.5;
    } else if (sl >= ht && sl < ht * 2) {
      fact2Ref.current = (sl - ht) * 0.5;
    } else if (sl >= ht * 2 && sl < ht * 3) {
      fact3Ref.current = (sl - ht * 2) * 0.5;
    }

    // Update CSS variables for smooth transitions
    document.documentElement.style.setProperty('--fact1', `${fact1Ref.current}px`);
    document.documentElement.style.setProperty('--fact2', `${fact2Ref.current}px`);
    document.documentElement.style.setProperty('--fact3', `${fact3Ref.current}px`);
  }

  function handleScroll() {
    requestAnimationFrame(animateit);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="PageContainer">
      <div id="p1" className="parallax">
        <Page1 />
      </div>
      <div id="p2" className="parallax">
        <Page2 />
      </div>
      <div id="p3" className="parallax">
        <Page3 />
      </div>
    </div>
  );
}

export default App;
