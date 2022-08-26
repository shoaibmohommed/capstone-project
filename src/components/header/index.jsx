import { Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './index.scss'

const Header = () => (
  <div className="navigation-bar">
    <Link className="logo-container" to="/">
      <CrwnLogo className="logo" />
    </Link>
    <div className="nav-links">
      <Link className="nav-link" to="/shop">
        Shop
      </Link>
      <Link className="nav-link" to="/signin">
        Sign In
      </Link>
    </div>
  </div>
)

export default Header
