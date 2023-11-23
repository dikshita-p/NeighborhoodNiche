import { useState,useContext } from 'react';
import {Dialog,Box , TextField,Typography,Button,styled} from '@mui/material';

import { authenticateSignup , authenticateLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
const Component= styled(Box)`
    height:80vh;
    width:90vh;


`;
const Image=styled(Box)`
    background: #2874f0 url(https://img.freepik.com/free-psd/shopping-vertical-background_23-2150409471.jpg) center 65% no-repeat;
    height: 100%;
    width:30%;
    padding: 45px 35px;
    & > p , &  >h5{
        color:black;
        font-weight:750;
    }

`;
const Wrapper = styled(Box)`
    display:flex;
    flex-direction: column;
    flex:1;
    padding: 35px 35px;
    & > div , &> button , &>p {
        margin-top: 20px;
    }
`;
const LoginButton = styled(Button)`
    text-transform:none;
    background : #FB641B;
    color: #fff;
    height : 48px;
    border-radius : 2px;
`;
// const RequestOTP = styled(Button)`
//     text-transform:none;
//     background : #fff;
//     color: #2874f0;
//     height : 48px;
//     border-radius : 2px;
//     box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
// `;
const CreateAcc= styled(Typography)`
    font-size: 14px;
    text-align:center;
    color: #2874f0;
    font-weight : 600;
    cursor: pointer;
`;
const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`;
const accountIntialValues ={
    login:{
        view :'login',
        heading: "Login",
        subHeading : "Get access to your orders, wishlist and recommendations"
    },
    signup :{
        view: 'signup',
        heading: "Look's like you're new here!",
        subHeading : "Signup to get started"
    }
}
const signupIntialValues={
    firstname : '',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:''
}
const loginInitialValues = {
    username: '',
    password: ''
};


const LoginDialog = ({open , setOpen})=>{
    const [account , toggleAccount] = useState(accountIntialValues.login);
    const [signup , setSignup] =useState(signupIntialValues);
    const [ login, setLogin ] = useState(loginInitialValues);
    const [error,setError] =useState(false);
    const {setAccount} = useContext(DataContext);


    const handleClose =()=>{
        setOpen(false);
        toggleAccount(accountIntialValues.login);
        setError(false);
    }
    const toggleSignup =()=>{
        toggleAccount(accountIntialValues.signup);
    }

    const onInputChange =(e) =>{
        setSignup({ ...signup,[e.target.name]:e.target.value });
    }
    const signupUser = async() => {
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.username);
    }
    const loginUser = async() => {
        let response = await authenticateLogin(login);
        // console.log(response);
        // if (response.status===200){
        //     handleClose();
        //     setAccount(response.data.data.firstname);
        // }
        // else{
        //     setError(true);
        // }
        if(!response) 
            setError(true);
        else {
            setError(false);
            handleClose();
            setAccount(login.username);
        }
    }
    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    return(
        <Dialog open ={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
            <Component>
                <Box style={{display:"flex", height:'100%'}}>
                    <Image>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style ={{margin: 20}}>{account.subHeading} </Typography>
                    </Image>
                    {
                        account.view === 'login' ?
                    
                        <Wrapper>
                            <TextField variant='standard' onChange={(e) => onValueChange(e)} name='username' label="Enter Username"/>
                            {error &&<Error>Please enter valid username or password</Error>}
                            <TextField variant='standard' onChange={(e) => onValueChange(e)} name='password' label="Enter Password"/>
                            <LoginButton onClick={()=> loginUser()}>Login</LoginButton>
                            <Typography>OR</Typography>
                            {/* <RequestOTP>Request OTP</RequestOTP> */}
                            <CreateAcc onClick={()=> toggleSignup()}>Create an Account</CreateAcc>
                        </Wrapper>
                       : 
                        <Wrapper>
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='firstname' label="Enter First Name"/>
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='lastname' label="Enter Last Name"/>
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='username' label="Enter Username"/>
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='email' label="Enter Email"/>
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='password' label="Enter Password"/>
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='phone' label="Enter Phone"/>
                            <LoginButton onClick={()=> signupUser()}>Continue</LoginButton>
                        </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>    
    )
}
export default LoginDialog;