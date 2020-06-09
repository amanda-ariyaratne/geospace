import React, { useState } from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  Input,
  Chip,
  MenuItem,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

// components
import ViewVisualizationListButton from "../Shared/ViewVisualizationListButton";
import ShareButton from "../Shared/ShareButton";

// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addLine,
  changeLineChartTitle,
  changeLineXTitle,
  changeLineYTitle,
  changeLineCurveType,
} from "../../state/actions/line";

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

const useStyles = makeStyles((theme) => ({
  boxStyle: {
    margin: theme.spacing(4, 1),
  },
  opacityBox: {
    marginTop: 15,
  },
  slider: {
    width: "100%",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
}));

export default function LineChartControlPanel(props) {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  const lineChart = useSelector((state) => state.line);
  const xAxis = useSelector((state) => state.line.dataTable.xHeaderIndex);
  const yAxis = useSelector((state) => state.line.dataTable.yHeaderIndices);
  const chartTitle = useSelector((state) => state.line.title);
  const xTitle = useSelector((state) => state.line.hAxis.title);
  const yTitle = useSelector((state) => state.line.vAxis.title);
  const curveType = useSelector((state) => state.line.curveType);
  const datafile = useSelector((state) => state.datafile);
  const headers = datafile !== null ? datafile.headers : [];
<<<<<<< HEAD
<<<<<<< HEAD
  const xAxisType = useSelector((state) => state.line.xAxisType);
  // const [xAxisType, setXAxisType] = useState(
  //   useSelector((state) => state.line.xAxisType)
  // );
=======
  const [xAxisType, setXAxisType] = useState(
    useSelector((state) => state.line.xAxisType)
  );
>>>>>>> d0b8b5a60233aab4c69da06912ceaf32d14ce176
=======
  const [xAxisType, setXAxisType] = useState(
    useSelector((state) => state.line.xAxisType)
  );
>>>>>>> d0b8b5a60233aab4c69da06912ceaf32d14ce176

  const handleXAxisChange = (event) => {
    lineChart.dataTable.xHeaderIndex = event.target.value;
    if (headers[event.target.value].selected === "number") {
      lineChart.dataTable.setDataset(datafile.data, xAxisType);
    } else {
<<<<<<< HEAD
<<<<<<< HEAD
      lineChart.xAxisType = "string";
=======
      setXAxisType("string");
>>>>>>> d0b8b5a60233aab4c69da06912ceaf32d14ce176
=======
      setXAxisType("string");
>>>>>>> d0b8b5a60233aab4c69da06912ceaf32d14ce176
      lineChart.dataTable.setDataset(datafile.data, "string");
    }
    lineChart.hAxis.minValue = lineChart.dataTable.getXMin();
    dispatch(addLine(lineChart));
  };

  const handleYAxisChange = (event) => {
    lineChart.dataTable.yHeaderIndices = event.target.value;
    if (headers[xAxis].selected === "number") {
      lineChart.dataTable.setDataset(datafile.data, xAxisType);
    } else {
<<<<<<< HEAD
<<<<<<< HEAD
      lineChart.xAxisType = "string";
=======
>>>>>>> d0b8b5a60233aab4c69da06912ceaf32d14ce176
=======
>>>>>>> d0b8b5a60233aab4c69da06912ceaf32d14ce176
      lineChart.dataTable.setDataset(datafile.data, "string");
    }
    dispatch(addLine(lineChart));
  };

  const handleChartTitleChange = (event) => {
    dispatch(changeLineChartTitle(event.target.value));
  };

  const handleXTitleChange = (event) => {
    dispatch(changeLineXTitle(event.target.value));
  };

  const handleYTitleChange = (event) => {
    dispatch(changeLineYTitle(event.target.value));
  };

  const handleChangeCurveType = (event) => {
    dispatch(changeLineCurveType(event.target.value));
  };

  const handleChangeXAxisType = (event) => {
<<<<<<< HEAD
<<<<<<< HEAD
    lineChart.xAxisType = event.target.value;
=======
    setXAxisType(event.target.value);
>>>>>>> d0b8b5a60233aab4c69da06912ceaf32d14ce176
=======
    setXAxisType(event.target.value);
>>>>>>> d0b8b5a60233aab4c69da06912ceaf32d14ce176
    lineChart.dataTable.setDataset(datafile.data, event.target.value);
    dispatch(addLine(lineChart));
  };

  return (
    <Box style={{ width: 225 }}>
      <ViewVisualizationListButton />
<<<<<<< HEAD
<<<<<<< HEAD
      <ShareButton viewState={[]} />
=======
      <ShareButton />
>>>>>>> d0b8b5a60233aab4c69da06912ceaf32d14ce176
=======
      <ShareButton />
>>>>>>> d0b8b5a60233aab4c69da06912ceaf32d14ce176
      <Box display="flex" flexDirection="column" className={classes.boxStyle}>
        <Typography variant="subtitle1" color="secondary">
          X Axis
        </Typography>
        <FormControl variant="standard" color="secondary">
          <Select native value={xAxis} onChange={handleXAxisChange}>
            <option aria-label="None" value="" />

            {headers.map((header) => {
              if (
                header.selected === "string" ||
                header.selected === "number"
              ) {
                return (
                  <option key={header.index} value={header.index}>
                    {header.name}
                  </option>
                );
              }
            })}
          </Select>
        </FormControl>
      </Box>
      <Box display="flex" flexDirection="column" className={classes.boxStyle}>
        <Typography variant="subtitle1" color="secondary">
          X Axis Type
        </Typography>
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup
            aria-label="type"
            name="type1"
            value={headers[xAxis].selected === "number" ? xAxisType : "string"}
            onChange={handleChangeXAxisType}
          >
            <FormControlLabel
              value="string"
              control={<Radio />}
              label="String"
            />
            <FormControlLabel
              value="number"
              control={<Radio />}
              label="Number"
              disabled={headers[xAxis].selected === "string"}
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box display="flex" flexDirection="column" className={classes.boxStyle}>
        <Typography variant="subtitle1" color="secondary">
          Y Axis
        </Typography>
        <FormControl variant="standard" color="secondary">
          <Select
            labelId="y-label"
            value={yAxis}
            onChange={handleYAxisChange}
            label="Y Axis"
            multiple
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected) => (
              <div className={classes.chips}>
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={headers[value].name}
                    className={classes.chip}
                  />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {headers.map((header) => {
              if (header.selected === "number") {
                return (
                  <MenuItem
                    key={header.index}
                    value={header.index}
                    style={getStyles(
                      header.name,
                      lineChart.dataTable.yHeaderIndices,
                      theme
                    )}
                  >
                    {header.name}
                  </MenuItem>
                );
              }
            })}
          </Select>
        </FormControl>
      </Box>
      <Box display="flex" flexDirection="column" className={classes.boxStyle}>
        <Typography variant="subtitle1" color="secondary">
          Chart Title
        </Typography>
        <TextField
          id="title-chart"
          value={chartTitle}
          variant="outlined"
          fullWidth
          onChange={handleChartTitleChange}
          color="secondary"
        />
      </Box>
      <Box display="flex" flexDirection="column" className={classes.boxStyle}>
        <Typography variant="subtitle1" color="secondary">
          X Axis Title
        </Typography>
        <TextField
          id="title-x"
          value={xTitle}
          variant="outlined"
          fullWidth
          onChange={handleXTitleChange}
          color="secondary"
        />
      </Box>
      <Box display="flex" flexDirection="column" className={classes.boxStyle}>
        <Typography variant="subtitle1" color="secondary">
          Y Axis Title
        </Typography>
        <TextField
          id="title-y"
          value={yTitle}
          variant="outlined"
          fullWidth
          onChange={handleYTitleChange}
          color="secondary"
        />
      </Box>

      <Box display="flex" flexDirection="column" className={classes.boxStyle}>
        <Typography variant="subtitle1" color="secondary">
          Curve Type
        </Typography>
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={curveType}
            onChange={handleChangeCurveType}
          >
            <FormControlLabel
              value="none"
              control={<Radio />}
              label="Straight"
            />
            <FormControlLabel
              value="function"
              control={<Radio />}
              label="Smoothed"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
}
