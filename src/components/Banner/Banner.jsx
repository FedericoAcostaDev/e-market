import { Container, Paper, Typography, Button, Grid } from "@material-ui/core";
import logo from "../../assets/banner.png";
import "./styles.css";

const Banner = () => {
  return (
    <Paper>
      <div className="banner">
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Typography className="title" variant="h1">
                This week 30% off on decorative appliances
              </Typography>
              <Button className="shopping-button" href="#products">
                Shopping
              </Button>
            </Grid>
            <Grid className="brand" item sm={6}>
              <img src={logo} alt="Brand-tv" className="image" />
            </Grid>
          </Grid>
        </Container>
      </div>
    </Paper>
  );
};

export default Banner;
