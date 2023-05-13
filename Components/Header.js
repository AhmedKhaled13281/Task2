import React from 'react'
import classes from '../styles/Components/Header/header.module.css'

const Header = () => {
  return (
    <>
      <nav className={classes.nav}>
        <div>
          <h2 className={classes.title}>
            <span style={{color : '#00984E'}}>UIUX</span> Labs
          </h2>
        </div>
        <div>
          <ul className={classes.ul}>
            <li className={classes.li}>Home</li>
            <li className={classes.li}>Collection</li>
            <li className={classes.li}>Stores</li>
            <li className={classes.li}>Contact Us</li>
            <li className={classes.li}>About Us</li>
            <li className={classes.li}>Blog</li>
          </ul>
        </div>
        <div>
            <button className={classes.Button}>Sign Up</button>
        </div>
      </nav>
    </>
  );
}

export default Header