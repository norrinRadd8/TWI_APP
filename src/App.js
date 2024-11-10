
import React, {useState, useEffect, useRef} from 'react';

// import Header from "./components/Header"
import Main from "./components/Main";
// import Statement from './components/Statement';
import Mission from './components/Mission';
// import Cta from './components/Cta';
import Results from './components/Results';
// import Cta1 from './components/Cta1';
import About from './components/About';
import Navbar from "./components/Navbar";
import Quote from './components/Quote';
import Video from "./components/Video"; 
import Philosophy from './components/Philosophy';
import Online from './components/Online';
import Coach from './components/Coach';
import FAQ from './components/Faq';
import Footer from './components/Footer';
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
        {/* <Header /> */}
      </div>
      <Navbar isHeaderVisible={isHeaderVisible} />
      <Main />
      <Mission />
      <About />
      <Philosophy />
      <Online />
      {/* <Cta /> */}
      
      {/* <Cta1 /> */}
      <Quote />
      <Video embedId={"5OTyuhCEJ6I"} />
      <Video embedId={"g5ul2vH-aDs"} /> 
      <Video embedId={"-jX1WplYrZU"} />
      <Results />
      <Coach />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;


