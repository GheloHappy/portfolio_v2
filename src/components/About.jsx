import '../css/about.css';
import { useInView } from 'framer-motion';
import { useRef } from "react";
import {
    aboutIntro,
    personalDetails,
    Icons,
} from './infos/AboutInfo';
import { slideAnim } from './animations/Animations';


const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className='about-page' id='about'>
            <div className='abt-info-layer'>
                <div className='abt-left'>
                    <div className='abt-left-info'>
                        <h2 ref={ref}
                            style={slideAnim(isInView, 2)}>
                            Information
                        </h2>
                    </div>
                </div>
                <div className='abt-right'
                    style={slideAnim(isInView, 3)}>
                    <div className='abt-right-info'>
                        {aboutIntro.map((intro, index) => (
                            <p key={index}>
                                {intro.value}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            <div className='abt-info-layer'>
                <div className='abt-left' style={slideAnim(isInView, 4)}>
                    <div className='abt-left-info'>
                        <h2>In Summary</h2>
                    </div>
                </div>
                <div className='abt-right' ref={ref}
                    style={slideAnim(isInView, 5)}>
                    {personalDetails.map((item, index) => (
                        <div className='abt-right-info-summary' key={index}>
                            <div className='abt-right-info-summary-label'>
                                <p>{item.label} :</p>
                            </div>
                            <div className='abt-right-info-summary-value'>
                                <p>{item.value}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            <div className='abt-info-layer-techs'>
                <div className='abt-info-layer-techs-div'>
                    <h1>test1</h1>
                    <div className='abt-info-layer-techs-div-left'>
                        {Icons.map((icon, index) => (
                            <div key={index} className='abt-info-layer-tech-icons'>
                                <img src={icon.value} />
                            </div>
                        ))}
                        {Icons.map((icon, index) => (
                            <div key={index} className='abt-info-layer-tech-icons'>
                                <img src={icon.value} />
                            </div>
                        ))}
                    </div>
                    <div className='abt-info-layer-techs-div-left'>
                        {Icons.map((icon, index) => (
                            <div key={index} className='abt-info-layer-tech-icons'>
                                <img src={icon.value} />
                            </div>
                        ))}
                        {Icons.map((icon, index) => (
                            <div key={index} className='abt-info-layer-tech-icons'>
                                <img src={icon.value} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='abt-info-layer-techs-div'>
                    <h1>test2</h1>
                    <h1>test2</h1>
                </div>
            </div>
        </div>
    )
}

export default About;