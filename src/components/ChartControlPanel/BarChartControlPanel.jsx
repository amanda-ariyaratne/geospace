import React from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

// components
import AddDataButton from "./BCAddDataButton";
import ModifyChartButton from "./BCModifyChartButton";
import BCStackDirection from "./BCStackDirection";
import BCLegend from "./BCLegend";
import BCXAxisTitle from "./BCXAxisTitle";
import BCYAxisTitle from "./BCYAxisTitle";

// redux
import { useSelector } from "react-redux";
import { toggleStack } from "../../state/actions/barchart";
import { useDispatch } from "react-redux";

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

export default function BarChartControlPanel(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const barChart = useSelector((state) => state.barChart);

  const handleStackBy = (axis) => {
    dispatch(toggleStack(axis));
  };

  return (
    <Box>
      <AddDataButton boxStyle={classes.boxStyle} />
      <ModifyChartButton boxStyle={classes.boxStyle} />
      {barChart.series.length > 0 ? (
        <React.Fragment>
          <BCXAxisTitle boxStyle={classes.boxStyle} />
          <BCYAxisTitle boxStyle={classes.boxStyle} />

          <BCStackDirection
            boxStyle={classes.boxStyle}
            formControl={classes.formControl}
            stackBy={barChart.stackBy}
            handleStackBy={handleStackBy}
          />

          <BCLegend
            legendStyle={classes.legendStyle}
            legendHeaders={barChart.legendHeaders}
          />
        </React.Fragment>
      ) : null}
    </Box>
  );
}
