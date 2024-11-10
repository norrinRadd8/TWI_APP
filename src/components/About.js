import React, { useState } from 'react';
import Modal from './Modal';

const About = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = (event) => {
        event.preventDefault(); 
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <section id="about">
        <div className="about_container">
            <div className="about_content">
                <div className="about_images">
                    <img src="./images/fitness.svg" alt="fitness_icon" className="about_icon" />
                </div>
                {/* <h2 className="about_title"><span className='transparent-outline'>ALEX ELVY</span></h2> */}
                
                <p className="about_text">
                    Alex Elvy is a seasoned strength and conditioning coach specialising in working with professional athletes, particularly in the realms of boxing and football. As a dedicated coach, Alex channels his expertise and passion into driving elite performance, guiding athletes towards their peak physical capabilities.
                    
                </p>
               <div className='about_button'>
               <p><button className="learn-more-link" onClick={handleOpenModal}>LEARN MORE</button></p> 
               </div>
                              
                
            </div>

            <Modal show={showModal} handleClose={handleCloseModal}>
                <div className="modal-content">
                    <p>
                        Alex Elvy is a seasoned strength and conditioning coach specialising in working with professional athletes, particularly in the realms of boxing and football. As a dedicated coach, Alex channels his expertise and passion into driving elite performance, guiding athletes towards their peak physical capabilities.
                    </p>
                    <p>
                        In the world of boxing, Alex has established himself as a trusted figure, working closely with high-profile athletes such as Conor Benn, WBC World Champion Skye Nicolson, Commonwealth Champion Sam Gilley, as well as top prospects in George Liddard and Maisey Rose. His involvement spans from guiding fighters through the rigors of weight management for weigh-ins to fine-tuning their physical condition before stepping into the ring.
                    </p>
                    <p>
                        Similarly, within football, Alex's impact is felt, as he collaborates with players predominantly during their off-season to ensure they return to pre-season training in optimal shape. Notable footballers he has worked with include Joe Ward of Derby County FC, Nathan Ralph of Southend United FC, Jack Barham of Aldershot Town FC, and Abbi Smith of Billericay Town Women's FC.
                    </p>
                    <p>
                        Beyond his work with professional athletes and running his coaching business, Alex is a father, which has led to a burning desire to help other Dads, having felt the struggles himself. Alex has developed a deep passion for helping Dads unlock their athletic potential, regain their youth, and elevate their overall health. Using the same proven training principles he applies with elite athletes, he empowers Dads to overcome chronic challenges like mental health struggles and obesity—issues that are often exacerbated by the demands of fatherhood, careers, and life's responsibilities.
                    </p>
                    <p>
                        Understanding the unique pressures Dads face, he founded 'The Athletic Dad', an elite online coaching and educational platform designed specifically for them. Our community is dedicated to helping Dads reclaim their vitality and well-being, ensuring they not only succeed in their personal and professional lives but also enjoy long-term health and longevity.
                    </p>
                    <p>
                        In addition, Alex has established 'TWI Online', an online coaching platform that offers performance-led coaching and nutritional guidance to everyday athletes and gym enthusiasts. Through TWI Online, individuals seeking to level up their performance can access bespoke, 1-2-1 coaching, structured training regimes, and expert guidance to enhance their training routines and achieve their dream physiques.
                    </p>
                    <p>
                        Alex's approach to training is characterised by a fusion of scientific knowledge and practical experience. Leveraging his educational background and hands-on expertise, he implements evidence-based strategies that yield efficient and effective results, devising bespoke methodologies aimed at achieving optimal performance outcomes. Each training session is meticulously crafted, employing methods tailored to the unique demands of the athlete, ensuring that they reach their full potential.
                    </p>
                    <p>
                        His commitment to staying abreast of the latest advancements in sports science ensures that his clients receive the most effective and efficient training protocols.
                    </p>
                    <p>
                        With a profound dedication to driving athletes towards peak physical performance, Alex has traveled the world, assisting individuals in reaching their highest potential. Continuously pushing boundaries and raising the bar for athletic achievement, he remains a trusted partner for elite athletes seeking to push their boundaries and achieve unparalleled success.
                    </p>
                </div>
            </Modal>
        </div>
        </section>
    );
};

export default About;
