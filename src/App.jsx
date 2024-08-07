import { useState } from 'react'
import { Route,Routes } from 'react-router'

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

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <StoreSidebar/>
      <StoreNav/>
      <Routes>
        <Route path='/admin' element= {<AdminPage/>}/>
        <Route path='/profile' element= {<Profile/>}/>
        <Route path='/cart' element= {<Cart/>}/>
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
      
      <StoreFooter/>
    </div>
  )
}

export default App
