import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/Home'
import CartContextProvider from './context/CartContextProvider'

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App