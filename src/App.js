
import React, {useState, useEffect, useRef} from 'react';

import Header from "./components/Header"
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Video from "./components/Video"; 

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
      <Video embedId={"g5ul2vH-aDs"} />  
    </div>
  );
}

export default App;


