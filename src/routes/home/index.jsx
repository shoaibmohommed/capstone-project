import { Outlet } from 'react-router-dom'
import Header from '../../components/header'

const Home = () => (
  <div>
    <Header />
    <div>
      <Outlet />
    </div>
  </div>
)

export default Home
