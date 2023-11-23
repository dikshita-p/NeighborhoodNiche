import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Box, Typography,Button,Divider,styled} from '@mui/material';

import {Link} from 'react-router-dom';


const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};
const Component = styled(Box)`
    margin-top: 10px;
    background: #FFFFFF;
`;
const Deal = styled(Box)`
    display: flex;    
    padding: 15px 20px;
`;
const DealText = styled(Typography)`
    font-size: 22px;
    font-weight: 600;
    line-height: 32px;
    margin-right: 25px;
`;
const ViewAllButton = styled(Button)`
    margin-left: auto;
    background-color: #2874f0;
    border-radius: 2px;
    font-size: 13px;
`;
const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px
`;
const Image = styled('img')({
    width: 150,
    height: 150
})

const Slide = ({products,title}) => {
    return (
        <Component>
            <Deal>
                <DealText>
                    {title}
                </DealText>
                <ViewAllButton variant="contained" color="primary">View All</ViewAllButton>
            </Deal>           
            <Divider />
            <Carousel 
                responsive ={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                centerMode ={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
            {
                    products.map(product => (
                        <Link to={`product/${product.id}`} style ={{textDecoration:'none'}}>                    
                            <Box textAlign="center" style={{padding:'25px 15px'}}>
                            <Image src={product.url} alt='product' />
                            <Text style={{ fontWeight: 600, color: '#212121' }}>{product.title.shortTitle}</Text>
                            <Text style={{ color: 'green' }}>{product.discount}</Text>
                            <Text style={{ color: '#212121', opacity: '.6' }}>{product.tagline}</Text>
                            </Box>
                        </Link>

                    ))
                }
            </Carousel>
        </Component>
    )
}

export default Slide;