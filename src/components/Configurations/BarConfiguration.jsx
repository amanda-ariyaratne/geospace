import React from "react";

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
} from "@material-ui/core";
import LaunchIcon from "@material-ui/icons/Launch";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

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

export default function BarConfiguration(props) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box display="flex" flexDirection="row" alignItems="baseline">
      <FormControl
        className={classes.formControl}
        error={props.barConfig.x === -1 ? true : false}
      >
        <InputLabel id="x-label">X Axis</InputLabel>
        <Select
          labelId="x-label"
          value={props.barConfig.x}
          onChange={props.changeBarX}
          label="X Axis"
        >
          <MenuItem value={-1}>
            <em>None</em>
          </MenuItem>
          {props.headers.map((header) => {
            if (header.selected === "string") {
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
        error={props.barConfig.y.length === 0 ? true : false}
        variant="outlined"
      >
        <InputLabel id="y-label">Y Axis</InputLabel>
        <Select
          labelId="y-label"
          value={props.barConfig.y}
          onChange={props.changeBarY}
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
                  style={getStyles(header.name, props.barConfig.y, theme)}
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
        onClick={props.handleBarOpen}
      >
        OPEN
      </Button>
    </Box>
  );
}
