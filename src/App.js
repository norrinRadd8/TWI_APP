
import React, {useState, useEffect, useRef} from 'react';
import Main from "./components/Main";
import Mission from './components/Mission';
import Results from './components/Results';
import About from './components/About';
import Navbar from "./components/Navbar";
import Quote from './components/Quote';
import Video from "./components/Video"; 
import Philosophy from './components/Philosophy';
import Online from './components/Online';
import Coach from './components/Coach';
import FAQ from './components/Faq';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
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
      <Quote />
      <Video embedId={"5OTyuhCEJ6I"} />
      <Video embedId={"g5ul2vH-aDs"} /> 
      <Video embedId={"-jX1WplYrZU"} />
      <Results />
      <Coach />
      <FAQ />
      <Footer />
      <Privacy />
    </div>
  );
}

export default App;


