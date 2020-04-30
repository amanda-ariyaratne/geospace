import React from "react";

// material-ui
import { Box, Slider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  slider: {
    width: 245,
  },
  opacityBox: {
    marginTop: 15,
  },
}));

export default function WidthSlider(props) {
  const classes = useStyles();

  const handleChange = (event, value) => {
    props.setWidth(value);
  };

  return (
    <Box display="flex" className={`${props.boxStyle} ${classes.opacityBox}`}>
      <div className={props.labelStyle}>
        <Typography variant="subtitle1">Width</Typography>
      </div>
      <div className={classes.slider}>
        <Slider
          aria-labelledby="continuous-slider"
          min={0}
          max={100}
          step={1}
          valueLabelDisplay="auto"
          value={props.width}
          onChange={handleChange}
        />
      </div>
    </Box>
  );
}
