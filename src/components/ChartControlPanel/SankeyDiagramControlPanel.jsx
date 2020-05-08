import React from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

// components
import SDAddDataButton from "./SDAddDataButton";
import SDModifyChartButton from "./SDModifyChartButton";

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

export default function SankeyDiagramControlPanel() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const sankeyDiagram = useSelector((state) => state.sankeyDiagram);

  return (
    <Box>
      <SDAddDataButton boxStyle={classes.boxStyle} />
      <SDModifyChartButton boxStyle={classes.boxStyle} />
    </Box>
  );
}
