import { Routes, Route } from 'react-router-dom'
import CategoryList from './components/category-list'
import Home from './routes/home'
import Authentication from './components/authentication'

const Shop = () => <div>Hi I am shopping page.</div>
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
