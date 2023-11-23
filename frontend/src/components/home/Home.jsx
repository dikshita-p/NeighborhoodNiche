
import { Fragment } from "react";
import { useEffect } from "react";
// components
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from './Slide';
import { getProducts } from "../../redux/actions/productAction";
import { useDispatch , useSelector } from "react-redux";

import { Box,styled } from "@mui/material";

const Component = styled(Box)`
    padding:10px;
    background: #F2F2F2;
` 

const Home= () =>{

    const {products} = useSelector(state => state.getProducts);
    console.log(products);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())

    },[dispatch])
    return (
        <>
            <NavBar />
            <Component>
                <Banner />

                <Slide products={products} title="Top Offers"/>
                <Slide products={products} title="Business 1"/>
                <Slide products={products} title="Business 2"/>
                <Slide products={products} title="Business 3"/>
                <Slide products={products} title="Business 4"/>
                <Slide products={products} title="Business 5"/>
            </Component>
            
        </>
    )
}
export default Home;