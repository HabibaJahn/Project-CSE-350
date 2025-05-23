import { useState } from 'react';
import './Navbar.scss';

function Navbar(){
      const [open,setopen] = useState(false)
      return(
            <nav>
            <div className="left">
                  <a href="/" className="logo">
                        <img src="/logo.png" alt=""   />
                        <span>HomeHunt</span>
                  </a>
                  <a href="/">Home</a>
                  <a href="/">About</a>
                  <a href="/">Contact</a>
                  <a href="/">Agents</a>

            </div>
            <div className="right">
            <a href="/">Sign In</a>
            <a href="/" className="register">Sign Up</a>

            <div className="menuIcon">
                  <img src="/menu.png" alt="" onClick={()=> setopen(!open)}/>
            </div>
            <div className={open? "menu active" :"menu"}>
                  <a href="/">Home</a>
                  <a href="/">About</a>
                  <a href="/">Contact</a>
                  <a href="/">Agents</a>
                  <a href="/">Sign In</a>
                  <a href="/">Sign Up</a>
            </div>

            </div>
            </nav>
      )
}
export default Navbar;