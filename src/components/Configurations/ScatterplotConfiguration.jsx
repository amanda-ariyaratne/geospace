import React, { Fragment } from "react";

// material-ui
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
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
}));

export default function ScatterplotConfiguration(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography variant="h6">Scatterplot Map</Typography>
      <Box display="flex" flexDirection="row" alignItems="baseline">
        <FormControl
          variant="outlined"
          className={classes.formControl}
          error={props.scatterplotConfig.longitude === -1 ? true : false}
        >
          <InputLabel id="longitude-label">Longitude</InputLabel>
          <Select
            labelId="longitude-label"
            value={props.scatterplotConfig.longitude}
            onChange={props.changeScatterplotLongitude}
            label="Longitude"
          >
            <MenuItem value={-1}>
              <em>None</em>
            </MenuItem>
            {props.headers.map((header) => {
              if (header.selected === "longitude") {
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
          error={props.scatterplotConfig.latitude === -1 ? true : false}
        >
          <InputLabel id="latitude-label">Latitude</InputLabel>
          <Select
            labelId="latitude-label"
            value={props.scatterplotConfig.latitude}
            onChange={props.changeScatterplotLatitude}
            label="Latitude"
          >
            <MenuItem value={-1}>
              <em>None</em>
            </MenuItem>
            {props.headers.map((header) => {
              if (header.selected === "latitude") {
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
          onClick={props.handleScatterplotOpen}
        >
          OPEN
        </Button>
      </Box>
    </Fragment>
  );
}
