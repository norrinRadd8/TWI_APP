
import React, {useState, useEffect, useRef} from 'react';

import Header from "./components/Header"
import Main from "./components/Main";
// import Statement from './components/Statement';
import Mission from './components/Mission';
import Philosophy from './components/Philosophy';
import About from './components/About';
import Cta from './components/Cta';
import Navbar from "./components/Navbar";
import Video from "./components/Video"; 
import Results from './components/Results';
import FAQ from './components/Faq';

import "./index.css";

const App = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const headerRef = useRef();

  useEffect(() => {
    const currentHeaderRef = headerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (currentHeaderRef) {
      observer.observe(currentHeaderRef);
    }

    return () => {
      if (currentHeaderRef) {
        observer.unobserve(currentHeaderRef);
      }
    };
  }, []);
 
  return (
    <div className="app_container">
      <div ref={headerRef}>
        <Header />
      </div>
      <Navbar isHeaderVisible={isHeaderVisible} />
      <Main />
      <Mission />
      <Philosophy />
      <About />
      <Cta />
      <Video embedId={"g5ul2vH-aDs"} />  
      <Results />
      <FAQ />
    </div>
  );
}

export default App;


