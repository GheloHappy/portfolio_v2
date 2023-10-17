import propic from '../assets/img/propic_glitched.png';
import reactjs from '../assets/img/frameworks/reactjs.png';
import '../css/home.css';
import { motion } from 'framer-motion';
import {
    fadeAnim,
    slideAnim
} from './animations/Animations';

const Home = () => {
    return (
        <div className="home-page" id='home'>
            <div className='left'>
                <motion.div className='welcome'
                    variants={fadeAnim(0.5)}
                    initial='initial'
                    animate='animate'>
                    <h3>Hi there! I'm</h3>
                    <span>GHELONICO </span>
                    <span className='last-name'>MALIGAYA</span>
                    <h3>Software Developer</h3>
                </motion.div>
                <motion.div className='power-mobile' variants={fadeAnim(1)}
                    initial='initial'
                    animate='animate'>
                    <p>Powered by</p>
                    <img src={reactjs} className='mobile-logo' alt='react Logo' />
                </motion.div>
            </div>
            <div className='right'>
                <div className='propic' >
                    <motion.img src={propic} alt='profile picture' variants={fadeAnim(1)}
                        initial='initial'
                        animate='animate' />
                    <motion.div className='power' variants={fadeAnim(1.5)}
                        initial='initial'
                        animate='animate'>
                        <p>Powered by</p>
                        <img src={reactjs} alt='react Logo' />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Home;