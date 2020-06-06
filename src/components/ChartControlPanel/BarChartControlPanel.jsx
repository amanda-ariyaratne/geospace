import React from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  RadioGroup,
  FormControlLabel,
  Radio,
  Input,
  Chip,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addBar,
  changeBarStackDirection,
  changeBarChartTitle,
  changeBarXTitle,
  changeBarYTitle,
} from "../../state/actions/bar";

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

export default function BarChartControlPanel(props) {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  const barChart = useSelector((state) => state.bar);
  const xAxis = useSelector((state) => state.bar.dataTable.xHeaderIndex);
  const yAxis = useSelector((state) => state.bar.dataTable.yHeaderIndices);
  const stackDirection = useSelector((state) => state.bar.isStacked);
  const chartTitle = useSelector((state) => state.bar.title);
  const xTitle = useSelector((state) => state.bar.hAxis.title);
  const yTitle = useSelector((state) => state.bar.vAxis.title);
  const datafile = useSelector((state) => state.datafile);
  const headers = datafile !== null ? datafile.headers : [];

  const handleXAxisChange = (event) => {
    barChart.dataTable.xHeaderIndex = event.target.value;
    barChart.dataTable.setDataset(datafile.data);
    dispatch(addBar(barChart));
  };

  const handleYAxisChange = (event) => {
    barChart.dataTable.yHeaderIndices = event.target.value;
    barChart.dataTable.setDataset(datafile.data);
    dispatch(addBar(barChart));
  };

  const handleChangeStackDirection = (event) => {
    dispatch(
      changeBarStackDirection(event.target.value === "true" ? true : false)
    );
  };

  const handleChartTitleChange = (event) => {
    dispatch(changeBarChartTitle(event.target.value));
  };

  const handleXTitleChange = (event) => {
    dispatch(changeBarXTitle(event.target.value));
  };

  const handleYTitleChange = (event) => {
    dispatch(changeBarYTitle(event.target.value));
  };

  return (
    <Box style={{ width: 225 }}>
      <Box display="flex" flexDirection="column" className={classes.boxStyle}>
        <FormControl variant="standard" color="secondary">
          <InputLabel>X Axis</InputLabel>
          <Select native value={xAxis} onChange={handleXAxisChange}>
            <option aria-label="None" value="" />

            {headers.map((header) => {
              if (header.selected === "string") {
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
        <FormControl variant="standard" color="secondary">
          <InputLabel id="y-label">Y Axis</InputLabel>
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
                      barChart.dataTable.yHeaderIndices,
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
        <Typography variant="subtitle1">Chart Title</Typography>
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
        <Typography variant="subtitle1">X Axis Title</Typography>
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
        <Typography variant="subtitle1">Y Axis Title</Typography>
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
        <Typography variant="subtitle1">Stack Direction</Typography>
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={stackDirection}
            onChange={handleChangeStackDirection}
          >
            <FormControlLabel
              value={false}
              control={<Radio />}
              label="Horizontal"
            />
            <FormControlLabel
              value={true}
              control={<Radio />}
              label="Vertical"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
}
