import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Loader } from 'rsuite';

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const getProductById = useSelector((state) => state.selectProduct);
  //   const {title}   =getProductById;

  const getSingleProductDetail = async (productId) => {
    const responseData = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log(err));
    dispatch(selectProduct(responseData.data));
  };

  useEffect(() => {
    if (productId && productId !== "") getSingleProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <>
      <h1>ProductDetail</h1>
      {Object.keys(getProductById).length === 0 ? (
           <Loader size="lg" center="true" />
      ) : (
        <>
             <Card sx={{ maxWidth: 745, justifyContent: "center" }}>
                    <CardActionArea sx={{ display: "flex" }}>
                      <CardMedia
                        component="img"
                        height="250"
                        image={getProductById.image}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {getProductById.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                         {getProductById.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Add to Cart
                      </Button>
                    </CardActions>
                  </Card>
        </>
      )}
    </>
  );
};

export default ProductDetail;
