import React, { useState, useEffect } from "react";

// material-ui
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  Input,
  Chip,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// classes
import BarChartData from "../../classes/chart/BarChart";

// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addSeries } from "../../state/actions/barchart";

const useModelStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px 40px",
  },
  box: {
    padding: "10px 40px",
  },
  dialogClose: {
    color: theme.palette.primary.dark,
  },
  dialogSave: {
    color: theme.palette.primary.light,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  input: {
    display: "none",
  },
  btnUpload: {
    marginRight: theme.spacing(1),
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(header, yAxis, theme) {
  return {
    fontWeight:
      yAxis.indexOf(header) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function ModifyDataDialog(props) {
  const classes = useModelStyles();
  const { onClose, open } = props;
  let barChart = useSelector((state) => state.barChart);
  useEffect(() => {
    setXAxis(barChart.xAxis);
    setYAxis(barChart.yAxis);
  }, [open]);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();

  const [xAxis, setXAxis] = useState(barChart.xAxis);
  const [yAxis, setYAxis] = useState(barChart.yAxis);
  const [error, setError] = useState("");

  const handleClose = () => {
    restoreDefaults();
    onClose();
  };

  const handleSelectXAxis = (event) => {
    setXAxis(event.target.value);
  };

  const handleSelectYAxis = (event) => {
    setYAxis(event.target.value);
  };

  const handleSave = () => {
    const barChartData = new BarChartData(barChart.headers, xAxis, yAxis);
    try {
      barChartData.setDataset(barChart.rawData);
      dispatch(
        addSeries({
          series: barChartData.series,
          legendHeaders: barChartData.legendHeaders,
          xAxis,
          yAxis,
        })
      );
    } catch (err) {
      setError("Y axis can only contain numerical data");
    }
    handleClose();
  };

  const restoreDefaults = () => {
    setXAxis(barChart.xAxis);
    setYAxis(barChart.yAxis);
    setError("");
  };

  return (
    <React.Fragment>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth="md"
        disableBackdropClick
        classes={{
          paper: classes.paper,
        }}
      >
        <DialogTitle id="simple-dialog-title">Chart Details</DialogTitle>

        <Box className={classes.box}>
          {barChart.rawData.length === 0 ? (
            <Typography>
              No data to create a chart. You can add a dataset by clicking the
              DATASET button on the left side panel.
            </Typography>
          ) : (
            <React.Fragment>
              <Box>
                <div className={classes.label}>
                  <Typography variant="subtitle1">Select X Axis</Typography>
                </div>
                <FormControl variant="standard" className={classes.formControl}>
                  <InputLabel>X Axis</InputLabel>
                  <Select
                    native
                    variant="standard"
                    value={xAxis}
                    onChange={handleSelectXAxis}
                  >
                    <option aria-label="None" value="" />
                    {barChart.headers.map((header, index) => {
                      return (
                        <option key={index} value={index}>
                          {header}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <div className={classes.label}>
                  <Typography variant="subtitle1">Select Y Axis</Typography>
                  <Typography variant="subtitle1">
                    You can select multiple fields. They can be stacked
                    horizontally or vertically.
                  </Typography>
                </div>
                <FormControl className={classes.formControl}>
                  <InputLabel id="y-axis-label">Y Axis</InputLabel>
                  <Select
                    labelId="y-axis-label"
                    id="y-axis-select"
                    multiple
                    value={yAxis}
                    onChange={handleSelectYAxis}
                    input={<Input id="select-multiple-chip" />}
                    renderValue={(selected) => (
                      <div className={classes.chips}>
                        {selected.map((value) => (
                          <Chip
                            key={value}
                            label={barChart.headers[value]}
                            className={classes.chip}
                          />
                        ))}
                      </div>
                    )}
                    MenuProps={MenuProps}
                  >
                    {barChart.headers.map((header, index) => (
                      <MenuItem
                        key={index}
                        value={index}
                        style={getStyles(header, yAxis, theme)}
                      >
                        {header}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              {error !== "" ? (
                <Box>
                  <div className={classes.label}>
                    <Typography variant="subtitle1"></Typography>
                    <Typography variant="subtitle1" color="error">
                      {error}
                    </Typography>
                  </div>
                </Box>
              ) : null}
            </React.Fragment>
          )}
        </Box>

        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            className={classes.dialogClose}
          >
            Close
          </Button>
          {barChart.rawData.length === 0 ? null : (
            <Button
              autoFocus
              className={classes.dialogSave}
              onClick={handleSave}
            >
              Save
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
