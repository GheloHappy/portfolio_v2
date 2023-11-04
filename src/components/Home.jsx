import '../css/home.css';
import { motion } from 'framer-motion';
import {
    fadeAnim,
    } from './animations/Animations';
import ImageLinks from './links/ImageLinks';

const Home = () => {
    return (
        <div className="home-page" id='home'>
            <div className='left'>
                <div className='welcome'
                    >
                    <h3>Hi there! I'm</h3>
                    <span>GHELONICO </span>
                    <span className='last-name'>MALIGAYA</span>
                    <h3>Software Developer</h3>
                </div>
                <div className='power-mobile' variants={fadeAnim(1)}
                    >
                    <p>Powered by</p>
                    {/* <img src={reactjs} className='mobile-logo' alt='react Logo' /> */}
                    <img src={ImageLinks.reactjs} className='mobile-logo' alt='react_Logo' />
                </div>
            </div>
            <div className='right'>
                <div className='propic' >
                    <img src='https://ik.imagekit.io/ghelowee/Portfolio/propic_glitched.webp?updatedAt=1699032604863' alt='profile_picture' variants={fadeAnim(1)}
                        />
                    <div className='power' variants={fadeAnim(1.5)}
                        >
                        <p>Powered by</p>
                        <img src={ImageLinks.reactjs} alt='react Logo' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;