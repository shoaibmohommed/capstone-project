import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import CategoryList from './components/category-list'
import Home from './routes/home'
import Authentication from './components/authentication'
import Checkout from './components/checkout'
import Shop from './routes/shop'
import { useEffect } from 'react'
import {
  createUserFromAuth,
  onAuthStateChangeListner
} from './utils/firebase'
import { setUser } from './store/user'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChangeListner((user) => {
      if (user) {
        createUserFromAuth(user)
      }
      dispatch(setUser(user))
    })
    return unsubscribe
  }, [dispatch])

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
