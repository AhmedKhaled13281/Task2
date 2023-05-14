import React , {useRef , useState} from 'react';
import validator from 'email-validator';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Backdrop , Box ,Modal , Fade , Button ,Typography , TextField , InputAdornment} from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {FormStyle , FormTitle , FormInput , FormButton} from '../styles/Components/modalStyle'
import useFetch from '@/customHooks/useFetch';

const ModalForm = ({open , handleModal , formType}) => {
    const {response , error  ,sendRequest} = useFetch()
    const [showPassword , setShowPassword] = useState(false)
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const errors = {}
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = async (e) => {
      e.preventDefault();
      const emailValue = emailRef.current.value;
      const passwordValue = passwordRef.current.value;
      const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        return passwordRegex.test(password);
      };

      const isValidEmail = validator.validate(emailValue);
      const isValidPassword = validatePassword(passwordValue)

      if (isValidEmail && isValidPassword) {
        const userData = {
            email : emailValue,
            password : passwordValue
        }
        if(formType === 'signup') {
           await sendRequest(userData , 'http://localhost:3000/api/register' , 'POST')
        }else {
            // in case we have a sign in data
        }
        toast.success('Success');
        handleModal()
      } else {
        console.log(error)
        toast.error('Email Or Password is NOT Valid');
      }

    }



  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={FormStyle}
          >
            <Typography
              id="transition-modal-title"
              variant="h4"
              component="h2"
              sx={FormTitle}
            >
              {formType === 'signup' ? "Sign Up" : "Sign In"}
            </Typography>
            <TextField
              error = {errors.emailNotValid}
              sx={FormInput}
              type="email"
              required
              id="email"
              label="Email"
              fullWidth
              inputRef={emailRef}
            />
            <p style={{color : 'red'}}>{errors.emailNotValid}</p>
            <TextField
              error={errors.passwordNotValid}
              sx={FormInput}
              required
              label="Password"
              fullWidth
              inputRef={passwordRef}
              type={showPassword ? "text" : "password"}
              id="password"
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    onClick={handleClickShowPassword}
                    sx={{ cursor: "pointer" }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </InputAdornment>
                ),
              }}
            />
            <p style={{color : 'red'}}>{errors.passwordNotValid}</p>
            <Button sx={FormButton} type="submit" variant="contained">
              Submit
            </Button>

          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalForm