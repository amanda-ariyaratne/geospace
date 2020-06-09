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

export default function SankeyConfiguration(props) {
  const classes = useStyles();
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <Fragment>
      <Typography variant="h6">Heat Map</Typography>
      <Box display="flex" flexDirection="row" alignItems="baseline">
        <FormControl
          variant="outlined"
          className={classes.formControl}
          error={props.sankeyConfig.from === -1 ? true : false}
        >
          <InputLabel id="from-label">From</InputLabel>
          <Select
            labelId="from-label"
            value={props.sankeyConfig.from}
            onChange={props.changeSankeyFrom}
            label="From"
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
          variant="outlined"
          className={classes.formControl}
          error={props.sankeyConfig.to === -1 ? true : false}
        >
          <InputLabel id="to-label">To</InputLabel>
          <Select
            labelId="to-label"
            value={props.sankeyConfig.to}
            onChange={props.changeSankeyTo}
            label="To"
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
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          size="large"
          startIcon={<LaunchIcon />}
          onClick={props.handleSankeyOpen}
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
        error={props.sankeyConfig.from === -1 ? true : false}
      >
        <InputLabel id="from-label">From</InputLabel>
        <Select
          labelId="from-label"
          value={props.sankeyConfig.from}
          onChange={props.changeSankeyFrom}
          label="From"
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
        variant="outlined"
        className={classes.formControl}
        error={props.sankeyConfig.to === -1 ? true : false}
      >
        <InputLabel id="to-label">To</InputLabel>
        <Select
          labelId="to-label"
          value={props.sankeyConfig.to}
          onChange={props.changeSankeyTo}
          label="To"
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
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        size="large"
        startIcon={<LaunchIcon />}
        onClick={props.handleSankeyOpen}
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
