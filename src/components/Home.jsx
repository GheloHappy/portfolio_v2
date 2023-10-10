import propic from '../assets/img/propic_edited.png'
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
                {/* <img src={propic} alt='profile picture'/> */}
                <h1>Right</h1>
            </div>
        </div>
    )
}

export default Home;