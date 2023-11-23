

import { AppBar , Toolbar ,Box, styled} from '@mui/material';

// components import
import Search from './Search';
import CustomButtons from './CustomButtons';
import {Link} from 'react-router-dom';

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;

const Component = styled(Link)`
    margin-left: 40px; 
    text-decoration:none;   

`;
const CustomButtonWrapper =styled(Box)(({theme}) => ({
    margin:'0 5% 0 2%',
    [theme.breakpoints.down('md')]:{
        display:'none'
    }

}));
const Header =() =>{
    const logoURL = require('./logo3.jpg');
    
    return(
        <StyledHeader>
            <Toolbar style ={{minHeight:55}}>
                <Component to ='/'>
                    <img src={logoURL} alt="logo" style={{  width: 125}}/>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    
    )
}

export default Header;