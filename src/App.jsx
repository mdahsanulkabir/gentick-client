

import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Layout from './components/Layout'
import Login from './pages/Login'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />}>
      </Route>
      <Route path='/home' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
