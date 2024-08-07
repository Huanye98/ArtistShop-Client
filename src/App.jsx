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
  const hideLayout = location.pathname.startsWith("/portfolio") || location.pathname ===("/")

  return (
    <div className='m-0'>
      {!hideLayout && <StoreNav />}
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
        <Route path='/store/:productId' element= {<ProductDetails/>}/>

        <Route path='/*' element= {<E404/>}/>
        <Route path='/error500' element= {<E500/>}/>
      </Routes>

      {!hideLayout && <StoreFooter/>}
    </div>
  )
}

export default App
