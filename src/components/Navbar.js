import React from 'react'
import {Link} from 'react-router-dom'
import micON from '../images/micON.png'
import { useMediaQuery } from 'react-responsive'
import {HiMenu} from 'react-icons/hi'
import Sidebar from './Sidebar'
const Navbar = () => {
    const [isOpen,setIsOpen] = React.useState(false)
    const openSidebar = ()=>{
        setIsOpen(true)
    }
    const isDesktop = useMediaQuery({
        query:'(min-width:1020px)'
    })
  return (
    <nav className='navbar'>
        <div className="nav-column-1">
            <div className="nav-column-1-center">
            <img className='nav-logo' src={micON} alt="" />
           {isDesktop && <div className="nav-routes-div-1">
                <Link className='nav-btn' to={`/music`}>Music</Link>
                <Link className='nav-btn' to={`/news`}>News</Link>
                <Link className='nav-btn' to={`/sport`}>Sport</Link>
                <Link className='nav-btn-more' to={`/more`}>Listen Now</Link>

            </div>}
            </div>
        </div>
            <div className="nav-column-2">
            {isDesktop&& <div className="nav-routes-div-2">
                <Link className='nav-btn' to={`/login`}>Sign In</Link>
                <Link className='nav-btn' to={`/register`}>Sign Up</Link>
            </div>}
           {!isDesktop && <div className="mobile-menu">
           <HiMenu onClick={openSidebar} className='hamburger-btn'/>
           <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
           </div> }
        </div>
    </nav>
  )
}

export default Navbar