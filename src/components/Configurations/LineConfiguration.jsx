<<<<<<< HEAD
<<<<<<< HEAD
import React, { Fragment } from "react";
=======
import React from "react";
>>>>>>> d0b8b5a60233aab4c69da06912ceaf32d14ce176
=======
import React from "react";
>>>>>>> d0b8b5a60233aab4c69da06912ceaf32d14ce176

// material-ui
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Input,
  Chip,
  useTheme,
<<<<<<< HEAD
<<<<<<< HEAD
  Typography,
=======
>>>>>>> d0b8b5a60233aab4c69da06912ceaf32d14ce176
=======
>>>>>>> d0b8b5a60233aab4c69da06912ceaf32d14ce176
} from "@material-ui/core";
import LaunchIcon from "@material-ui/icons/Launch";
import { makeStyles } from "@material-ui/core/styles";

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
  listBox: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    width: 360,
    backgroundColor: theme.palette.background.paper,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 240,
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  flexColumn: {
    "& > *": {
      padding: "16px 0px",
    },
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
}));

export default function LineConfiguration(props) {
  const classes = useStyles();
  const theme = useTheme();
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <Fragment>
      <Typography variant="h6">Line Chart</Typography>
      <Box display="flex" flexDirection="row" alignItems="baseline">
        <FormControl
          variant="outlined"
          className={classes.formControl}
          error={props.lineConfig.x === -1 ? true : false}
        >
          <InputLabel id="x-label">X Axis</InputLabel>
          <Select
            labelId="x-label"
            value={props.lineConfig.x}
            onChange={props.changeLineX}
            label="X Axis"
          >
            <MenuItem value={-1}>
              <em>None</em>
            </MenuItem>
            {props.headers.map((header) => {
              if (
                header.selected === "string" ||
                header.selected === "number"
              ) {
                return (
                  <MenuItem key={header.index} value={header.index}>
                    {header.name}
                  </MenuItem>
                );
              }
            })}
          </Select>
        </FormControl>
        <FormControl
          className={classes.formControl}
          error={props.lineConfig.y.length === 0 ? true : false}
          variant="outlined"
        >
          <InputLabel id="y-label">Y Axis</InputLabel>
          <Select
            labelId="y-label"
            value={props.lineConfig.y}
            onChange={props.changeLineY}
            label="Y Axis"
            multiple
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected) => (
              <div className={classes.chips}>
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={props.headers[value].name}
                    className={classes.chip}
                  />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            <MenuItem disabled value="">
              <em>None</em>
            </MenuItem>
            {props.headers.map((header) => {
              if (header.selected === "number") {
                return (
                  <MenuItem
                    key={header.index}
                    value={header.index}
                    style={getStyles(header.name, props.lineConfig.y, theme)}
                  >
                    {header.name}
                  </MenuItem>
                );
              }
            })}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          size="large"
          startIcon={<LaunchIcon />}
          onClick={props.handleLineOpen}
        >
          OPEN
        </Button>
      </Box>
    </Fragment>
=======
=======
>>>>>>> d0b8b5a60233aab4c69da06912ceaf32d14ce176
    <Box display="flex" flexDirection="row" alignItems="baseline">
      <FormControl
        variant="outlined"
        className={classes.formControl}
        error={props.lineConfig.x === -1 ? true : false}
      >
        <InputLabel id="x-label">X Axis</InputLabel>
        <Select
          labelId="x-label"
          value={props.lineConfig.x}
          onChange={props.changeLineX}
          label="X Axis"
        >
          <MenuItem value={-1}>
            <em>None</em>
          </MenuItem>
          {props.headers.map((header) => {
            if (header.selected === "string" || header.selected === "number") {
              return (
                <MenuItem key={header.index} value={header.index}>
                  {header.name}
                </MenuItem>
              );
            }
          })}
        </Select>
      </FormControl>
      <FormControl
        className={classes.formControl}
        error={props.lineConfig.y.length === 0 ? true : false}
        variant="outlined"
      >
        <InputLabel id="y-label">Y Axis</InputLabel>
        <Select
          labelId="y-label"
          value={props.lineConfig.y}
          onChange={props.changeLineY}
          label="Y Axis"
          multiple
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={props.headers[value].name}
                  className={classes.chip}
                />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          <MenuItem disabled value="">
            <em>None</em>
          </MenuItem>
          {props.headers.map((header) => {
            if (header.selected === "number") {
              return (
                <MenuItem
                  key={header.index}
                  value={header.index}
                  style={getStyles(header.name, props.lineConfig.y, theme)}
                >
                  {header.name}
                </MenuItem>
              );
            }
          })}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        size="large"
        startIcon={<LaunchIcon />}
        onClick={props.handleLineOpen}
      >
        OPEN
      </Button>
    </Box>
<<<<<<< HEAD
>>>>>>> d0b8b5a60233aab4c69da06912ceaf32d14ce176
=======
>>>>>>> d0b8b5a60233aab4c69da06912ceaf32d14ce176
  );
}
