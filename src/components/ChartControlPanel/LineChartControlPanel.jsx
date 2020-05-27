import React from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

// components
import LCAddDataButton from "./LCAddDataButton";
import LCModifyChartButton from "./LCModifyChartButton";
import LCLegend from "./LCLegend";
import LCXAxisTitle from "./LCXAxisTitle";
import LCYAxisTitle from "./LCYAxisTitle";
import LCResetZoomButton from "./LCResetZoomButton";

// redux
import { useSelector } from "react-redux";
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

export default function LineChartControlPanel(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const lineChart = useSelector((state) => state.lineChart);

  return (
    <Box>
      <LCAddDataButton boxStyle={classes.boxStyle} />
      <LCModifyChartButton boxStyle={classes.boxStyle} />

      {/* Line Chart Legend */}
      {lineChart.series.length > 0 ? (
        <React.Fragment>
          <LCXAxisTitle boxStyle={classes.boxStyle} />
          <LCYAxisTitle boxStyle={classes.boxStyle} />
          <LCResetZoomButton
            boxStyle={classes.boxStyle}
            setLastDrawLocation={props.setLastDrawLocation}
          />
          <LCLegend
            legendStyle={classes.legendStyle}
            legendHeaders={lineChart.legendHeaders}
          />
        </React.Fragment>
      ) : null}
    </Box>
  );
}
