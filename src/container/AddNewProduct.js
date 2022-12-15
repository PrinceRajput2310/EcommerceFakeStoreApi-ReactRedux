import React, { useEffect, useState } from "react";
import { Modal, Button, ButtonToolbar, Placeholder } from "rsuite";
import axios from "axios";
import { addProductToStoreAction  } from "../redux/actions/productActions";
import { useSelector ,useDispatch} from "react-redux";

const AddNewProduct = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState("");
  const dispatch=useDispatch();

 const  product=useSelector(store=>store)

  const addProductToStore = async () => {
    const addProductResponse = await axios
      .post("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify({
          title: "test product",
          price: 13.5,
          description: "lorem ipsum set",
          image: "https://i.pravatar.cc",
          category: "electronic",
        }),
      })
      .catch((err) => console.log(err));
    setData(addProductResponse);
    console.log(data);
    console.log(product)
  };

  useEffect(() => {
     // dispatch( addProductToStoreAction( addProductToStore(data)));
     addProductToStore();
  }, []);

  return (
    <>
      <ButtonToolbar>
        <Button onClick={handleOpen}> Add New Product</Button>
      </ButtonToolbar>

      <Modal open={open} onClose={handleClose} style={{ marginTop: "100px" }}>
        <Modal.Header>
          <Modal.Title>ApnaBazar.Com</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Placeholder.Paragraph /> */}
          <label>
            Title <input type="text" placeholder="Enter Category" />
          </label>{" "}
          <br />
          <label>
            Price <input type="text" placeholder="Enter Category" />
          </label>
          <br />
          <label>
            Description <input type="text" placeholder="Enter Category" />
          </label>
          <br />
          <label>
            image <input type="text" placeholder="Enter Category" />
          </label>
          <br />
          <label>
            Category <input type="text" placeholder="Enter Category" />
          </label>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
          <Button onClick={()=>{dispatch(addProductToStoreAction(data))}} appearance="primary">
            
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddNewProduct;
