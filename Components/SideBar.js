import React from 'react'
import classes from '../styles/Components/SideBar/sidebar.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import AppleIcon from '@mui/icons-material/Apple';

const SideBar = () => {
  return (
    <section className={classes.container}>
      <div className={classes.logo}>
        <AppleIcon style={{fontSize : '50px'}}/>
      </div>
      <div className={classes.iconContainer}>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <FacebookIcon style={{fontSize : '30px'}}/>
          </li>
          <li className={classes.li}>
          <InstagramIcon style={{fontSize : '30px'}}/>
          </li>
          <li className={classes.li}>
            <TwitterIcon style={{fontSize : '30px'}}/>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SideBar