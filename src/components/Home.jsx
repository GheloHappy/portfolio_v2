import propic from '../assets/img/propic_glitched.png';
import '../css/home.css';
import { motion } from 'framer-motion';
import { 
    fadeAnimationVariant,
    fadeAnimationVariantDelayed 
} from './animations/Animations'; 

const Home = () => {
    return (
        <div className="home-page">
            <div className='left'>
                <motion.div className='welcome'
                    variants={fadeAnimationVariant}
                    initial='initial'
                    animate='animate'>
                    <h3>Hi there! I'm</h3>
                    <span>GHELONICO </span>
                    <span className='last-name'>MALIGAYA</span>
                    <h3>Software Developer</h3>
                </motion.div>
            </div>
            <div className='right'>
                <motion.div className='propic'variants={fadeAnimationVariantDelayed}
                    initial='initial'
                    animate='animate'>
                    <img src={propic} alt='profile picture' />

                </motion.div>
            </div>
        </div>
    )
}

export default Home;