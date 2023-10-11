import propic from '../assets/img/propic_glitched.png'
import '../css/home.css'

const Home = () => {
    return (
        <div className="home-page">
            <div className='left'>
                <div className='welcome'>
                    <h3>Hi there! I'm</h3>
                    <span>GHELONICO </span>
                    <span className='last-name'>MALIGAYA</span>
                    <h3>Software Developer</h3>
                </div>
            </div>
            <div className='right'>
                <div className='propic'>
                    <img src={propic} alt='profile picture' />

                </div>
            </div>
        </div>
    )
}

export default Home;