import { Outlet } from 'react-router-dom'
import Header from '../../components/header'

const Home = () => (
  <div>
    <Header />
    <Outlet />
  </div>
)

export default Home
