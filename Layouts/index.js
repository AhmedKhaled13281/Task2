import React from 'react'
import Header from '../Components/Header'
import SideBar from '../Components/SideBar'
import classes from '../styles/Components/Layouts/layout.module.css'

const Layout = ({children}) => {
  return (
    <section className={classes.container}>
        <div className={classes.sideBar}>
            <SideBar />
        </div>
        <div className={classes.MainContent}>
            <Header />
            {children}
        </div>
    </section>
  )
}

export default Layout