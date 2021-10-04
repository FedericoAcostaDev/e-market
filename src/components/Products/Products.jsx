import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import Banner from "../Banner/Banner";

import Product from "./Product/Product";
import useStyles from "./styles";
import FilterProduct from "../FilterProducts/FilterProducts";

const Products = ({ categories, onAddToCart }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <FilterProduct categories={categories} />
      <Banner />
      <div id="products">
        {categories.map((category) => {
          return (
            <div className="contents">
              <Container>
                <Typography className="headline" variant="h6" component="h6">
                  {category.name}
                </Typography>
                <Grid container justifyContent="center" spacing={4}>
                  {category.productsData.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                      <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Products;
