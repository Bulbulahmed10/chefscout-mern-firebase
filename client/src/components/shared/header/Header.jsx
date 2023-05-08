import React, { useEffect } from 'react'
import Navbar from './navbar/Navbar'
import { useLocation } from 'react-router-dom';
import "./header.css"
const Header = () => {

  const location = useLocation();
    useEffect(() => {
      if (location.pathname === "/") {
        document.title = "Chefscout - HOME";
      } else {
        document.title = `Chefscout  ${location.pathname
          .replace("/", "-")
          .toUpperCase()}`;
      }
  
      if (location.state) {
        document.title = location.state;
      }
    }, [location.pathname]);

  return (
    <header className='absolute z-20 top-0 left-0 right-0 w-full customCssHeader'>
      <h1 className="text-center font-StyleScript my-8 text-5xl font-medium tracking-wider text-white">
        chefscout
      </h1>
      <div>
        <Navbar />
      </div>
    </header>
  )
}

export default Header