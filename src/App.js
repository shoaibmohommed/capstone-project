import { Routes, Route } from 'react-router-dom'
import CategoryList from './components/category-list'
import Home from './routes/home'
import Authentication from './components/authentication'
import Shop from './components/shop'
import Checkout from './components/checkout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<CategoryList />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App
