import React from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

// components
import AddDataButton from "./AddDataButton";
import ModifyChartButton from "./ModifyChartButton";

// redux
import { useSelector } from "react-redux";
import { toggleStack } from "../../state/actions/barchart";
import { useDispatch } from "react-redux";

// react-vis
import { DiscreteColorLegend } from "react-vis";

const useStyles = makeStyles((theme) => ({
  boxStyle: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(5, 1),
  },
  legendStyle: {
    margin: theme.spacing(1),
    backgroundColor: "gainsboro",
  },
}));

export default function ControlPanel(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const barChart = useSelector((state) => state.barChart);

  const handleStackBy = (event) => {
    let axis = event.target.value;
    dispatch(toggleStack(axis));
  };

  return (
    <Box>
      <AddDataButton boxStyle={classes.boxStyle} />
      <ModifyChartButton boxStyle={classes.boxStyle} />

      {/* Change Stack Direction Radio Buttons */}
      <Box className={classes.boxStyle}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Stack Direction</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={barChart.stackBy}
            onChange={handleStackBy}
          >
            <FormControlLabel value="x" control={<Radio />} label="X Axis" />
            <FormControlLabel value="y" control={<Radio />} label="Y Axis" />
          </RadioGroup>
        </FormControl>
      </Box>

      {/* Bar Chart Legend */}
      <Box className={classes.legendStyle}>
        <DiscreteColorLegend items={barChart.legendHeaders} />
      </Box>
    </Box>
  );
}
