import React,  {useState} from 'react'
import ModalForm from './Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classes from '../styles/Components/Header/header.module.css'

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleModal = () => setOpen((prev) => !prev)
  const [formType , setFormType] = useState()
  // const handleSigninModal = () => setOpen((prev) => !prev)
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

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
            <button className={classes.Button} onClick={() => {handleModal() , setFormType('signup')}}>Sign Up</button>
            <button className={classes.Button} onClick={() => {handleModal() , setFormType('signin')}}>Sign In</button>
        </div>
        <ToastContainer />
        {formType === 'signup' && <ModalForm open={open} handleModal={handleModal} formType="signup"/>}
        {formType === 'signin' && <ModalForm open={open} handleModal={handleModal} formType="signin"/>}
      </nav>
    </>
  );
}

export default Header