import './App.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' />
        <Route path='*' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
