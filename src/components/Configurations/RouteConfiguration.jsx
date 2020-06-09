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
  CircularProgress,
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

export default function RouteConfiguration(props) {
  const classes = useStyles();

  return (
    <Fragment>
      <Typography variant="h6">Route Map</Typography>
      <Box display="flex" flexDirection="row" alignItems="baseline">
        <FormControl
          variant="outlined"
          className={classes.formControl}
          error={props.routeConfig.srcLongitude === -1 ? true : false}
        >
          <InputLabel id="longitude-label">Source Longitude</InputLabel>
          <Select
            labelId="src-longitude-label"
            value={props.routeConfig.srcLongitude}
            onChange={props.changeRouteSrcLongitude}
            label="Source Longitude"
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
          error={props.routeConfig.srcLatitude === -1 ? true : false}
        >
          <InputLabel id="src-latitude-label">Source Latitude</InputLabel>
          <Select
            labelId="src-latitude-label"
            value={props.routeConfig.srcLatitude}
            onChange={props.changeRouteSrcLatitude}
            label="Source Latitude"
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
      </Box>
      <Box display="flex" flexDirection="row" alignItems="baseline">
        <FormControl
          variant="outlined"
          className={classes.formControl}
          error={props.routeConfig.dstLongitude === -1 ? true : false}
        >
          <InputLabel id="dst-longitude-label">
            Destination Longitude
          </InputLabel>
          <Select
            labelId="dst-longitude-label"
            value={props.routeConfig.dstLongitude}
            onChange={props.changeRouteDstLongitude}
            label="Destination Longitude"
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
          error={props.routeConfig.dstLatitude === -1 ? true : false}
        >
          <InputLabel id="dst-latitude-label">Destination Latitude</InputLabel>
          <Select
            labelId="dst-latitude-label"
            value={props.routeConfig.dstLatitude}
            onChange={props.changeRouteDstLatitude}
            label="Destination Latitude"
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
      </Box>
      <Box>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          size="large"
          startIcon={<LaunchIcon />}
          onClick={props.handleRouteOpen}
        >
          OPEN
        </Button>
      </Box>
      {props.routeConfig.loading ? (
        <Box display="flex" flexDirection="row" alignItems="center">
          <CircularProgress style={{ position: "relative", right: "10px" }} />
          <Typography>Please wait while we calculate the routes</Typography>
        </Box>
      ) : null}
    </Fragment>
  );
}
