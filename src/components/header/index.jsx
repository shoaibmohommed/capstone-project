import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user'
import { signOutUser } from '../../utils/firebase'
import CartDropdown from '../cart-dropdown'
import CartIcon from '../cart-icon'
import './index.scss'

const Header = () => {
  const [showCartMenu, setShowCartMenu] = useState(false)
  const { currentUser } = useContext(UserContext)
  const cartHandler = () => {
    setShowCartMenu(!showCartMenu)
  }
  return (
    <div className="navigation-bar">
      <Link className="logo-container" to="/">
        <CrwnLogo className="logo" />
      </Link>
      <div className="nav-links">
        <Link className="nav-link" to="/shop">
          Shop
        </Link>
        {currentUser ? (
          <span className="nav-link" onClick={signOutUser}>
            SIGN OUT
          </span>
        ) : (
          <Link className="nav-link" to="/signin">
            Sign In
          </Link>
        )}
        <CartIcon onClick={cartHandler} />
      </div>
      {showCartMenu && <CartDropdown />}
    </div>
  )
}

export default Header
