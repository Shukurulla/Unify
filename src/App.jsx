import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/Home'
import CartContextProvider from './context/cart/CartContextProvider'
import Waiters from './pages/Waiters'
import WaiterPreviewContextProvider from './context/waiters/WaiterPreviewContextProvider'

function App() {

  return (
    <CartContextProvider>
      <WaiterPreviewContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="waiters" element={<Waiters />} />
          </Routes>
        </BrowserRouter>
      </WaiterPreviewContextProvider>
    </CartContextProvider>
  )
}

export default App