import React from 'react';
import Cta2 from './Cta2';


const Philosophy = () => {
    return (
        <div className="philosophy_container">
            <div className="philosophy_title">
                <h2><span className='transparent-outline'>PHILOSOPHY</span></h2>
            </div>
            <div className="philosophy_content">
                <div className="philosophy_feature">
                <div className="philosophy_images">
                    <img src="./images/intent-running-man.svg" alt="intent running" className="philosophy_image" />
                </div>
                    <h3>INTENT</h3>
                    <p>
                        The word intent means intention of purpose. Every person I work with adopts a purposeful mindset to achieve their goal. I, myself will train, program and coach you with that same level of intent to ensure that you reach your desired outcome.
                    </p>
                </div>
                <div className="philosophy_feature">
                <img src="./images/intent-data-driven-pie.svg" alt="intent data" className="philosophy_image" />
                    <h3>DATA DRIVEN</h3>
                    <p>
                        'If you're not assessing, you're guessing - I really value the ability to collect data so we can physically see where and how we are improving. Having someting tangible to work with is also great to get or achieve buy in from the athlete.'
                    </p>
                </div>
                <div className="philosophy_feature">
                <img src="./images/intent-use-of-science.svg" alt="intent science" className="philosophy_image" />
                    <h3>USE OF SCIENCE</h3>
                    <p>
                        Of course innovation is great, but when there is well documented research to back up certain methods of training, I'm going to utilise that information. My approach is largely science based and the training methods applied are to create the necessary stimulus for that individual athlete and their needs.
                    </p>
                </div>
            </div>
            <div className='philosophy_cta'>
            <Cta2 />
            </div>
            
        </div>
    );
};

export default Philosophy;
