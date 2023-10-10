import './App.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' />
        <Route path='/about' />
        <Route path='*' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
