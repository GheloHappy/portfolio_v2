import './App.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home'
import Journey from './components/Journey';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Home />
      <About />
      <Journey />
      <Projects />
      <Contact />
      {/* <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/journey' element={<Journey />} />
        <Route path='*' />
      </Routes> */}
    </BrowserRouter>
  )
}

export default App
