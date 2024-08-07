import { useState } from 'react'
import { Route,Routes, useLocation } from 'react-router-dom'

import Profile from "./pages/Profile"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Portfolio from "./pages/Portfolio"
import SignUp from "./pages/SignUp"
import Store from "./pages/Store"
import AdminPage from './pages/AdminPage'
import E500 from './pages/E500'
import E404 from './pages/E404'

import StoreSidebar from "./components/StoreSidebar"
import StoreNav from "./components/StoreNav"
import StoreFooter from "./components/StoreFooter"
import Private from "./components/auth/Private"

function App() {
  const location = useLocation()
  const hideLayout = location.pathname.startsWith("/portfolio")

  return (
    <div>
      {!hideLayout && <StoreNav/>}
      {!hideLayout && <StoreSidebar/>}

      <Routes>
        <Route path='/admin' element= {<Admin><AdminPage/></Admin>}/>
        <Route path='/profile' element= {<Private><Profile/></Private>}/>
        <Route path='/cart' element= {<Private><Cart/></Private>}/>
        
        <Route path='/' element= {<Home/>}/>

        <Route path='/portfolio' element= {<Portfolio/>}/>
        <Route path='/portfolio/:illustId' element= {<Portfolio/>}/>

        <Route path='/login' element= {<Login/>}/>
        <Route path='/signup' element= {<SignUp/>}/>

        <Route path='/store' element= {<Store/>}/>
        <Route path='/store/:productId' element= {<Store/>}/>

        <Route path='/error404' element= {<E404/>}/>
        <Route path='/error500' element= {<E500/>}/>
      </Routes>

      {!hideLayout && <StoreFooter/>}
    </div>
  )
}

export default App
