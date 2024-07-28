import React, { useState } from 'react';
import Modal from './Modal';


const About = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = (event) => {
        event.preventDefault(); // Prevent any default behavior
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="about_container">
            <div className="about_content">
                <div className="about_images">
                    <img src="./images/alex.jpg" alt="Alex" className="image" />
                </div>
                <h2 className="about_title"><span className='transparent-outline'>ALEX ELVY</span></h2>
                <p className="about_text">
                    is a seasoned strength and conditioning coach specialising in working with professional athletes, particularly in the realms of boxing and football. As a dedicated coach, Alex channels his expertise and passion into driving elite performance, guiding athletes towards their peak physical capabilities.
                    <p><button className="learn-more-link" onClick={handleOpenModal}>Learn More.</button></p>
                </p>

            </div>
            <Modal show={showModal} handleClose={handleCloseModal}>

                <p>
                    Alex has over 15 years of experience in the fitness industry, working with top-level athletes to enhance their performance. His approach combines cutting-edge scientific knowledge with practical, hands-on coaching to deliver results. Alex's programs are tailored to the individual needs of each athlete, ensuring optimal progress and peak performance. His dedication to continuous learning and innovation has made him a respected figure in the field of strength and conditioning.
                </p>
                
                <p>
                    In the world of boxing, Alex has established himself as a trusted figure, working closely with high-profile athletes such as Conor Benn, WBC World Champion Skye Nicolson, Commonwealth Champion Sam Gilley, as well as top prospects in George Liddard and Maisey Rose. His involvement spans from guiding fighters through the rigors of weight management for weigh-ins to fine-tuning their physical condition before stepping into the ring.
                </p>
                <p>
                    Similarly, within football, Alex's impact is felt, as he collaborates with players predominantly during their off-season to ensure they return to pre-season training in optimal shape. Notable footballers he has worked with include Joe Ward of Derby County FC, Nathan Ralph of Southend United FC, Jack Barham of Aldershot Town FC, and Abbi Smith of Billericay Town Women's FC.
                </p>
                <p>
                    Beyond his work with individual athletes, Alex has also made significant contributions to the field of boxing by launching 'The Boxers Performance Program.' This initiative is tailored specifically for amateurs and professional prospects in the boxing world, aiming to make elite strength and conditioning coaching accessible and affordable.
                </p>
                <p>
                    In addition, Alex has established 'TWI Online,' an online coaching platform that offers performance-led coaching and nutritional guidance to everyday athletes and gym enthusiasts. Through TWI Online, individuals seeking to level up their performance can access bespoke, 1-2-1 coaching, structured training regimes, and expert guidance to enhance their training routines and achieve their dream physiques.
                </p>
                <p>
                    Alex's approach to training is characterised by a fusion of scientific knowledge and practical experience. Leveraging his educational background and hands-on expertise, he implements evidence-based strategies that yield efficient and effective results, devising bespoke methodologies aimed at achieving optimal performance outcomes. Each training session is meticulously crafted, employing bespoke methods tailored to the unique demands of the athlete, ensuring that they reach their full potential.
                </p>
                <p>
                    His commitment to staying abreast of the latest advancements in sports science ensures that his clients receive the most effective and efficient training protocols.
                </p>
                <p>
                    With a profound dedication to driving athletes towards peak physical performance, has seen him travel the world, assisting individuals in reaching their highest potential. Continuously pushing boundaries and raising the bar for athletic achievement, he remains a trusted partner for elite athletes seeking to push their boundaries and achieve unparalleled success in their respective fields, making him an invaluable asset to any competitors team.
                </p>
            </Modal>
        </div>
    );
};

export default About;
