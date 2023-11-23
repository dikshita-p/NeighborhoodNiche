
import {  Typography, Table, TableBody, TableRow, TableCell, styled } from '@mui/material';




const ColumnText = styled(TableRow)`
    font-size: 16px;
    vertical-align: baseline;
    & > td {
        font-size: 16px;
        margin-top: 10px;
    }
`



const ProductDetail = ({ product }) => {
    
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));
    
    return (
        <>
            
            
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell style={{color: 'black' , fontWeight: 600 }}>{product.description}</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <span style={{ color: '#2874f0' }}>XYZ</span>
                            
                            <Typography>View more from Seller</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell >Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>   
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail;