import React from 'react'
import './styles.css'
import AnchorTemporaryDrawer from './Drawer'
import Button from '../Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='navbar'>
      <h1 className='logo'>CryptoTracker <span style={{color: "var(--blue)"}}>.</span></h1>
      <div className='links'>
        <Link to="/"><p className='link'>Home</p></Link>
        <Link to="/Comapre"><p className='link'>Compare</p></Link>
        <Link to="/News"><p className='link'>News</p></Link>
        <Link to="/Watchlist"><p className='link'>WatchList</p></Link>
        <Link to="/Dashboard">
          <Button
          text={"Dashboard"}
         
          onClick={()=> console.log("btn clicked")}/>
          </Link>



      </div>
      <div className='mobile-drawer'>
           <AnchorTemporaryDrawer/>
      </div>
    </div>
  )
}

export default Header