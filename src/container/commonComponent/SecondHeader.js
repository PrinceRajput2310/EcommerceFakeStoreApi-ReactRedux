import React from "react";
import "./SecondHeader.scss";
import { Box } from "@mui/material";
import AddNewProduct from "../AddNewProduct";
import { SelectPicker } from "rsuite";
import { FlexboxGrid } from "rsuite";

const data = [
  "Eugenia",
  "Bryan",
  "Linda",
  "Nancy",
  "Lloyd",
  "Alice",
  "Julia",
  "Albert",
].map((item) => ({ label: item, value: item }));

const SelectCategory = () => (
  <>
    <SelectPicker data={data} style={{ width: 224 }} />
  </>
);

const SecondHeader = () => {
  return (
    <>
      {/* <Box component={"div"} className="headerDataContainer">
        <Box component={"div"} className="selectDataContainer">
         Category <SelectCategory/>
        </Box>
        <Box component={"div"} className="displayDataContainer">
          Display Product  <SelectCategory/>
        </Box>
        <Box component={"div"} className="searchDataContainer">
          prince
        </Box>
        <Box component={"div"} className="addproductDataContainer">
          <AddNewProduct />
        </Box>
      </Box> */}
      <div className="show-grid">
        <FlexboxGrid justify="space-between">
          <FlexboxGrid.Item
            colspan={8}
            style={{ display: "flex", alignItems: "center" }}
          >
            {" "}
            <span>Category{" "}</span>
            <SelectCategory />
          </FlexboxGrid.Item>

          <FlexboxGrid.Item
            colspan={8}
            style={{ display: "flex", alignItems: "center" }}
          >
            Display Product 
            <SelectCategory />
          </FlexboxGrid.Item>

          <FlexboxGrid.Item colspan={8}>
            Display Product
            <SelectCategory />
          </FlexboxGrid.Item>

          <FlexboxGrid.Item colspan={8}>
            <AddNewProduct />
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </div>
    </>
  );
};

export default SecondHeader;
