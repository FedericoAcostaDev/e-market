import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import Banner from "../Banner/Banner";
import FilterProduct from "../FilterProducts/FilterProducts";
import Product from "./Product/Product";
import useStyles from "./styles";

const Products = ({ categories, onAddToCart, addProduct }) => {
  const classes = useStyles();

  const [searchResult, setSearchResult] = React.useState([]);

  return (
    <main className={classes.content}>
      <FilterProduct
        addProduct={addProduct}
        categories={categories}
        searchResult={searchResult}
        setSearchResult={setSearchResult}
      />
      {!searchResult.length && (
        <>
          <Banner />
          <div id="products">
            {categories.map((category) => {
              return (
                <div className="contents">
                  <Container>
                    <Typography
                      className="headline"
                      variant="h6"
                      component="h6"
                    >
                      {category.name}
                    </Typography>
                    <Grid container justifyContent="center" spacing={4}>
                      {category.productsData.map((product) => (
                        <Grid
                          item
                          key={product.id}
                          xs={12}
                          sm={6}
                          md={4}
                          lg={3}
                        >
                          <Product
                            product={product}
                            onAddToCart={onAddToCart}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Container>
                </div>
              );
            })}
          </div>
        </>
      )}
    </main>
  );
};

export default Products;
