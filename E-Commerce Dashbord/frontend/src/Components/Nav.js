import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Nav() {
  const auth = localStorage.getItem('user')
  const user = auth && auth !== 'undefined' ? JSON.parse(auth) : null;
  const navigate = useNavigate();

  const logout = () => {
    navigate('/signup')
    localStorage.clear();
    console.log("Logout");

  }
  return (
    <div className='nav-bar' >

      <img  className="logo" alt="img" src='https://img.freepik.com/free-vector/butterfly-colorful-logo-
      // template_361591-1587.jpg?t=st=1738698441~
      // exp=1738702041~hmac=c71d7ff39b5aad3c00f0316d85bfb7dd
      // bc57de730a0a444090613957258a512c&w=740'/>

        {auth ? <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Product</Link></li>
          <li><Link to="/add-product">Add Product</Link></li>
          <li><Link to="/update">Update Product</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><button onClick={logout}>Log Out ({user?.name})</button></li>

        </ul>
          :
          <ul className='nav-right'>
            <li><Link to="/signup">SignUp</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        }
             
      
    </div>
  )
}
