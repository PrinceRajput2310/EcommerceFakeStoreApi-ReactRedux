import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
//import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { Loader } from "rsuite";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const ProductComponent = () => {
  const product = useSelector((state) => state.allProduct.products);

  console.log(product.length);
  return (
    <>
      <Box sx={{ width: "100%" }}>
        {Object.keys(product).length == 0 ? (
          <Loader size="lg" center="true" />
        ) : (
          <>
            <Grid
              container
              rowSpacing={{ xs: 1, sm: 2, md: 3 }}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              spacing={1}
            >
              {product &&
                product.map((item) => {
                  return (
                    <>
                      <Grid item xs={3} key={item.id}>
                        <Paper>
                          <Card sx={{ maxWidth: 345, maxHeight: 550 }}>
                            <Link to={`/product/${item.id}`}>
                              <CardActionArea>
                                <CardMedia
                                  // sx={{height:"140px",width:"140px",alignItem:"center"}}
                                  component="img"
                                  // height="140"
                                  // width="100"
                                  image={item.image}
                                  alt="green iguana"
                                />
                                <CardContent>
                                  <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                  >
                                    {item.title}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    color="text.secondary"
                                  >
                                    Price:{item.price}
                                  </Typography>
                                </CardContent>
                              </CardActionArea>
                              <CardActions>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  {item.category}
                                </Typography>
                              </CardActions>
                            </Link>
                          </Card>
                        </Paper>
                      </Grid>
                    </>
                  );
                })}
            </Grid>
          </>
        )}
      </Box>
    </>
  );
};

export default ProductComponent;
