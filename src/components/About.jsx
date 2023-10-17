import '../css/about.css';
import { useInView } from 'framer-motion';
import { useRef } from "react";
import {
    aboutIntro,
    personalDetails,
    Languages,
    Frameworks,
    Databases,
    Ide,
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
                    <h3>Languages</h3>
                    <div className='abt-info-layer-techs-div-left'>
                        {Languages.map((lang, index) => (
                            <div key={index} className='abt-info-layer-tech-icons' >
                                <span style={slideAnim(isInView, 10)}>{lang.label}</span>
                                <img style={slideAnim(isInView, 7)} src={lang.value} />
                            </div>
                        ))}
                    </div>

                    <h3>Frameworks</h3>
                    <div className='abt-info-layer-techs-div-left'>
                        {Frameworks.map((frame, index) => (
                            <div key={index} className='abt-info-layer-tech-icons' style={slideAnim(isInView, 6)}>
                                <span style={slideAnim(isInView, 12)}>{frame.label}</span>
                                <img style={slideAnim(isInView, 9)} src={frame.value}  />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='abt-info-layer-techs-div'>
                    <h3>Databases</h3>
                    <div className='abt-info-layer-techs-div-right'>
                        {Databases.map((data, index) => (
                            <div key={index} className='abt-info-layer-tech-icons'>
                                <span style={slideAnim(isInView, 14)}>{data.label}</span>
                                <img style={slideAnim(isInView, 11)} src={data.value} />
                            </div>
                        ))}
                    </div>
                    <h3>IDE's & OS</h3>
                    <div className='abt-info-layer-techs-div-right'>
                        {Ide.map((ide, index) => (
                            <div key={index} className='abt-info-layer-tech-icons'>
                                <span style={slideAnim(isInView, 16)}>{ide.label}</span>
                                <img style={slideAnim(isInView, 13)} src={ide.value} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;