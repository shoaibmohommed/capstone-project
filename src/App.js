import { Routes, Route } from 'react-router-dom'
import CategoryList from './components/category-list'
import Home from './routes/home'
import Authentication from './components/authentication'
import Checkout from './components/checkout'
import Shop from './routes/shop'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<CategoryList />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="signin" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App
