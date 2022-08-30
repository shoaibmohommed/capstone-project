import { Routes, Route } from 'react-router-dom'
import CategoryList from './components/category-list'
import Home from './routes/home'
import Authentication from './components/authentication'
import Shop from './components/shop'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<CategoryList />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App
