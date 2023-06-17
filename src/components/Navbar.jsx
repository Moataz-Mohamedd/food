import React, { useState } from 'react';
import { Link ,useLocation} from 'react-router-dom'
import Sidebar from './Sidebar';
import {faHome,faList,faCog} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  const location=useLocation()
  const [showSidebar, setShowSidebar] = useState(false);
  const links = [
    {
      name: "Home",
      path: "/",
      icon : faHome
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon : faList
    },
    {
      name: "Settings",
      path: "/settings",
      icon : faCog
    }
  ]

  return (
    <>
      <div className='container navbar'>
        <Link to='/' className='logo'>F<span>oo</span>diesHub</Link>
        <div className="nav-links">
          {
            links.map(({ name, path,icon }) => {
              return (
                <Link to={path} key={name} className={location.pathname === path ? 'active' : ' ' }>{name}</Link>
              )
            })
          }
        </div>
        <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? 'sidebar-btn active' : 'sidebar-btn'}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSidebar && <Sidebar links={links} show={(SORH)=>{setShowSidebar(SORH)}} /> }
      
    </>
  )
}

export default Navbar
