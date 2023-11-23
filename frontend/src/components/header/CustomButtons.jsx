
import { useState , useContext} from 'react';
import { Box , Button,Badge, Typography , styled} from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { useSelector } from 'react-redux';

import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';
import {Link } from 'react-router-dom';

const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    textDecoration: 'none',
    color:'inherit',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    & > button , & > p , & > div {
        margin-right: 20px !important;
        font-size: 16px;
        align-items : center;
    }
`;


const LoginButton = styled(Button)`
    color: #2874f0;
    background: #fff;
    text-transform: none;
    padding: 5px 40px ;
    border-radius:2px;
    box-shadow:none;
    font-weight:600;
    height: 32px;

`;

const CustomButtons= () =>{
    const [open,setOpen] = useState(false);

    const {account } =useContext(DataContext);
    const { cartItems } = useSelector(state => state.cart);
    
    const openDialog = () =>{
        setOpen(true);
    }
    return (
        
        <Wrapper>
            {
                account ? <Profile account={account}  /> :
                    <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
                
            }            
            <Typography style={{marginTop: 3 , width: 135,cursor:"pointer"}}> Add Business</Typography>
            <Typography style={{marginTop:3 , cursor : "pointer"}}>More</Typography>

            <Container to ='/cart'>
                <Badge badgeContent={cartItems?.length} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </Container>
            <LoginDialog  open={open} setOpen={setOpen}/>
        </Wrapper>
    )
}
export default CustomButtons;