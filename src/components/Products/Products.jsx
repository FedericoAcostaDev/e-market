import React from "react";
import { Grid } from '@material-ui/core';

import Product  from "./Product/Product";
import useStyles from './styles';

const products = [
    {id:1, name:'shoes', description: 'running shoes.', price:'$50', image:'https://tse1.mm.bing.net/th?id=OIP.aqlZPRWduPFJAitypb_vUAHaHa&pid=Api'},
    {id:2, name:'Macbook', description: '2021 edition.', price:'$50', image:'https://s.hdnux.com/photos/01/15/52/15/20357974/7/rawImage.jpg'},

];

const Products = () =>{
    const classes = useStyles();

    return (
    <main className={classes.content} >
        <div className={classes.toolbar} /> 
        <Grid container justifyContent='center' spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                    </Grid>
        ))}
        </Grid>
            
    </main>
    );

}

export default Products;