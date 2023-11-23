import { useState, useEffect } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { InputBase, List, ListItem, Box, styled } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux'; 
import { getProducts as listProducts } from '../../redux/actions/productAction';
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
    background: #fff;
    width : 38%;
    border-radius: 2px;
    margin-left : 10px;
    display : flex;
`;
const InputSearchBase = styled(InputBase)`
    padding-left : 20px;
    width : 100%;
    font-size:unset;
`;
const SearchIconWrapper = styled(Box)`
    color: black;
    padding : 5px;
    display: flex;
`;
const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;



const Search= () =>{
    
        const [ text, setText ] = useState('');
        const [ open, setOpen ] = useState(true)
    
        const getText = (text) => {
            setText(text);
            setOpen(false)
        }
        const getProducts = useSelector(state => state.getProducts);
        const { products } = getProducts;

        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(listProducts())
        }, [dispatch])

        return (
        <SearchContainer>
            <InputSearchBase 
                    placeholder="Search Products"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => getText(e.target.value)}
            />
            <SearchIconWrapper>
               <SearchIcon />
            </SearchIconWrapper>
            {
              text && 
              <ListWrapper hidden={open}>
                {
                  products.filter(product => product.title.shortTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <Link 
                        to={`/product/${product.id}`} 
                        style={{ textDecoration:'none', color:'inherit'}}
                        onClick={() => setOpen(true)}  
                      >
                        {product.title.shortTitle}
                      </Link>
                    </ListItem>
                  ))
                }  
              </ListWrapper>
            }
        </SearchContainer>
    )
}
export default Search;