
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/navBar/NavBar'
import Home from './pages/home/index'


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />

      </Routes>
    </div>
  )

}

export default App
