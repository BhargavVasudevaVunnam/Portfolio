import './App.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import React, { useEffect, useRef, useState } from 'react';

function App() {
  const ht = window.innerHeight;

  const fact1Ref = useRef(0);
  const fact2Ref = useRef(0);
  const fact3Ref = useRef(0);

  const [fact1Style, setFact1Style] = useState({ transform: `translateY(${fact1Ref.current}px)` });
  const [fact2Style, setFact2Style] = useState({ transform: `translateY(${fact2Ref.current}px)` });
  const [fact3Style, setFact3Style] = useState({ transform: `translateY(${fact3Ref.current}px)` });

  function handleScroll() {
    var sl = window.scrollY;

    if (sl >= 0 && sl < ht) {
      fact1Ref.current = (sl-0) * 0.6;
      setFact1Style({ transform: `translateY(${fact1Ref.current}px)` });
    } else if (sl >= ht && sl < ht * 2) {
      fact2Ref.current = (sl-(ht * 1) ) * 0.6;
      setFact2Style({ transform: `translateY(${fact2Ref.current}px)` });
    } else if (sl >= ht * 2 && sl < ht * 3) {
      fact3Ref.current = (sl-(ht * 2)) * 0.6;
      setFact3Style({ transform: `translateY(${fact3Ref.current}px)` });
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="PageContainer">
      <div id="p1" style={fact1Style}>
        <Page1 />
      </div>
      <div id="p2" style={fact2Style}>
        <Page2 />
      </div>
      <div id="p3" style={fact3Style}>
        <Page3 />
      </div>
    </div>
  );
}

export default App;
