import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";

const red500 = "#f44336";
const red900 = "#b71c1c";

const CustomSlider = styled(Slider)(({ theme }) => ({
  color: red500, //color of the slider between thumbs
  "& .MuiSlider-thumb": {
    backgroundColor: red500, //color of thumbs
  },
  "& .MuiSlider-rail": {
    color: red900, ////color of the slider outside  teh area between thumbs
  },
}));

const RangeSlider = () => {
  const { yearFilter } = useSelector((state) => state.moviePage);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    dispatch({ type: "YEAR_CHANGE", payload: { yearFilter: newValue } });
  };

  return (
    <Box sx={{ width: 240 }}>
      <CustomSlider
        min={1990}
        max={2022}
        value={yearFilter}
        valueLabelDisplay='auto'
        onChange={handleChange}
      />
    </Box>
  );
};

export default RangeSlider;
