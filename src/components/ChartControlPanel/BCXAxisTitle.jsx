import React, { useState } from "react";

// material-ui
import { Box, Button, TextField } from "@material-ui/core";

// redux
import { setXAxisTitle } from "../../state/actions/barchart";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function BCXAxisTitle(props) {
  const dispatch = useDispatch();
  const barChart = useSelector((state) => state.barChart);
  const [value, setValue] = useState(barChart.xAxisTitle);

  const handleChangeTitle = (event) => {
    setValue(event.target.value);
  };

  const handleSetClick = (event) => {
    dispatch(
      setXAxisTitle({
        xAxisTitle: value,
      })
    );
  };

  return (
    <Box display="flex" flexDirection="row" className={props.boxStyle}>
      <TextField
        label="X Axis Label"
        variant="outlined"
        onChange={(e) => handleChangeTitle(e)}
        autoComplete="off"
        fullWidth
        value={value}
        margin="dense"
        color="secondary"
      />
      <Button
        style={{ marginTop: 8, marginBottom: 4 }}
        variant="outlined"
        color="primary"
        onClick={handleSetClick}
      >
        SET
      </Button>
    </Box>
  );
}
