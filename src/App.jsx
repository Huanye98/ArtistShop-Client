import { Route,Routes, useLocation } from 'react-router-dom'

import Login from "./pages/auth/Login"
import SignUp from "./pages/auth/SignUp"
import Profile from "./pages/Profile"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Store from "./pages/Store"
import AdminPage from './pages/AdminPage'
import E500 from './pages/E500'
import E404 from './pages/E404'

import StoreSidebar from "./components/StoreSidebar"
import StoreNav from "./components/StoreNav"
import StoreFooter from "./components/StoreFooter"
import Private from "./components/auth/Private"
import Admin from "./components/auth/Admin"
import ProductDetails from './pages/ProductDetails'

function App() {
  const location = useLocation()
  const navAndFooter = location.pathname.startsWith("/portfolio") || location.pathname ===("/")
  const sidebar = location.pathname.startsWith("/store")  
 
  return (
    <div className='m-0'>
      {!navAndFooter  && <StoreNav />}
      {sidebar && <StoreSidebar />}

      <Routes>
        <Route path='/' element= {<Home/>}/>

        <Route path='/portfolio' element= {<Portfolio/>}/>
        <Route path='/portfolio/:illustId' element= {<Portfolio/>}/>
        
        <Route path='/admin' element= {<Admin><AdminPage className="with-layout"/></Admin>}/>
        <Route path='/profile' element= {<Private><Profile className="with-layout"/></Private>}/>
        <Route path='/cart' element= {<Private><Cart className="with-layout"/></Private>}/>

        <Route path='/login' element= {<Login className="with-layout"/>}/>
        <Route path='/signup' element= {<SignUp className="with-layout"/>}/>

        <Route path='/store' element= {<Store className="with-sidebar"/>}/>
        <Route path='/store/:productId' element= {<ProductDetails className="with-sidebar"/>}/>

        <Route path='/*' element= {<E404 className="with-layout"/>}/>
        <Route path='/error500' element= {<E500 className="with-layout"/>}/>
      </Routes>

      {!navAndFooter && <StoreFooter/>}
    </div>
  )
}

export default App
