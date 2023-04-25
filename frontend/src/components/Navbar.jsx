import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <ul className='ul'>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/home">Classes</Link></li>


        </ul>
    </div>
  )
}
