

import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Layout from './components/Layout'
import Login from './pages/Login'
import CreateUser from './pages/CreateUser'
import CreateCustomer from './pages/CreateCustomer'
import CreateCustomerAssetLocation from './pages/CustomerAssetLocation'
import CreateCustomerAsset from './pages/CreateCustomerAsset'
import CreateAssetPart from './pages/CreateAssetPart'
import UpdateUser from './pages/UpdateUser'
import CreateTicket from './pages/CreateTicket'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />}>
      </Route>
      <Route path='/home' element={<Layout />}>
        <Route path='home' element={<Home />} />
        <Route path='create-user' element={<CreateUser />} />
        <Route path='create-customer' element={<CreateCustomer />} />
        <Route path='create-customer-asset-location' element={<CreateCustomerAssetLocation />} />
        <Route path='create-customer-asset' element={<CreateCustomerAsset />} />
        <Route path='create-asset-part' element={<CreateAssetPart />} />
        <Route path='update-user' element={<UpdateUser />} />
        <Route path='create-ticket' element={<CreateTicket />} />
      </Route>
    </Routes>
  )
}

export default App
