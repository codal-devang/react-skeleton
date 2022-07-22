import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../auth/auth'

const Navbar = () => {
  const auth = useAuth()
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline'
    }
  }

  return (
    <nav className='primary-nav'>
      <NavLink to='/' style={navLinkStyles}>
        Home
      </NavLink>
      <NavLink to='/about' style={navLinkStyles}>
        About
      </NavLink>
      <NavLink to='/products' style={navLinkStyles}>
        Products
      </NavLink>
      <NavLink to='/users' style={navLinkStyles}>
        Users
      </NavLink>
      <NavLink to='/profile' style={navLinkStyles}>
        Profile
      </NavLink>
      {!auth.user &&
      <NavLink to="/sign-up"><span class="glyphicon glyphicon-user"></span> Sign Up</NavLink>
}
      {!auth.user && (
        <NavLink to='/login' style={navLinkStyles}>
          Login
        </NavLink>
      )}
    </nav>
  )
}

export default React.memo(Navbar)