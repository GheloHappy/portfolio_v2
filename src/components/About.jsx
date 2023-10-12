import '../css/about.css';
import { useRef } from "react";
import { motion, useInView } from 'framer-motion';
import {
    aboutIntro
} from './infos/AboutInfo';

const About = () => {

    return (
        <div className='about-page' id='about'>
            <div className='abt-info-layer'>
                <div className='abt-left'>
                    <div className='abt-left-info'>
                        <h2>Information</h2>
                    </div>
                </div>
                <div className='abt-right'>
                    <div className='abt-right-info'>
                        {aboutIntro.map((intro, index) => (
                            <p key={index}>
                                {intro.value}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;