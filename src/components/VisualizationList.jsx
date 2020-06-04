import React, { useState, Fragment } from "react";

// components
import ScatterplotConfiguration from "./Configurations/ScatterplotConfiguration";
import HeatConfiguration from "./Configurations/HeatConfiguration";

// material-ui
import {
  Box,
  Typography,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import MapIcon from "@material-ui/icons/Map";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import LaunchIcon from "@material-ui/icons/Launch";
import { makeStyles } from "@material-ui/core/styles";

// classes
import VisualizationMapper from "../classes/data/VisualizationMapper";
import Scatterplot from "../classes/map/Scatterplot";
import HeatMap from "../classes/map/HeatMap";
import Route from "../classes/map/Route";

// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addScatterplot } from "../state/actions/scatterplot";
import { addHeat } from "../state/actions/heat";
import { addRoute } from "../state/actions/route";
import { changeCurrentVisualization } from "../state/actions/currentVisualization";

// react-router
import { Redirect } from "react-router-dom";

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

export default function VisualizationList(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const datafile = useSelector((state) => state.datafile);
  const [openConfig, setOpenConfig] = useState(null);

  const headers = datafile !== null ? datafile.headers : [];
  const vm = new VisualizationMapper(headers);
  const visList = vm.map();

  // *************** Scatterplot Configuration *************** //
  const [scatterplotConfig, setScatterplotConfig] = useState({
    longitude: -1,
    latitude: -1,
  });

  const changeScatterplotLongitude = (event) => {
    setScatterplotConfig((prevConfig) => {
      return {
        ...prevConfig,
        longitude: event.target.value,
      };
    });
  };

  const changeScatterplotLatitude = (event) => {
    setScatterplotConfig((prevConfig) => {
      return {
        ...prevConfig,
        latitude: event.target.value,
      };
    });
  };

  const handleScatterplotOpen = () => {
    if (
      scatterplotConfig.longitude === -1 ||
      scatterplotConfig.latitude === -1
    ) {
      return;
    }
    const scatterplot = new Scatterplot(
      datafile.data,
      headers,
      scatterplotConfig.latitude,
      scatterplotConfig.longitude
    );
    dispatch(addScatterplot(scatterplot));
    dispatch(changeCurrentVisualization("scatterplot"));
    props.history.push("/maps");
  };
  // **************************************************** //

  // *************** Heat Configuration *************** //
  const [heatConfig, setHeatConfig] = useState({
    longitude: -1,
    latitude: -1,
  });

  const changeHeatLongitude = (event) => {
    setHeatConfig((prevConfig) => {
      return {
        ...prevConfig,
        longitude: event.target.value,
      };
    });
  };

  const changeHeatLatitude = (event) => {
    setHeatConfig((prevConfig) => {
      return {
        ...prevConfig,
        latitude: event.target.value,
      };
    });
  };

  const handleHeatOpen = () => {
    if (heatConfig.longitude === -1 || heatConfig.latitude === -1) {
      return;
    }
    const heat = new HeatMap(
      datafile.data,
      headers,
      heatConfig.latitude,
      heatConfig.longitude
    );
    dispatch(addHeat(heat));
    dispatch(changeCurrentVisualization("heat"));
    props.history.push("/maps");
  };
  // **************************************************** //

  // *************** Route Configuration *************** //
  const [routeConfig, setRouteConfig] = useState({
    srcLongitude: -1,
    srcLatitude: -1,
    dstLongitude: -1,
    dstLatitude: -1,
  });

  const changeRouteSrcLongitude = (event) => {
    setRouteConfig((prevConfig) => {
      return {
        ...prevConfig,
        srcLongitude: event.target.value,
      };
    });
  };

  const changeRouteSrcLatitude = (event) => {
    setRouteConfig((prevConfig) => {
      return {
        ...prevConfig,
        srcLatitude: event.target.value,
      };
    });
  };

  const changeRouteDstLongitude = (event) => {
    setRouteConfig((prevConfig) => {
      return {
        ...prevConfig,
        dstLongitude: event.target.value,
      };
    });
  };

  const changeRouteDstLatitude = (event) => {
    setRouteConfig((prevConfig) => {
      return {
        ...prevConfig,
        dstLatitude: event.target.value,
      };
    });
  };

  const handleRouteOpen = () => {
    if (
      routeConfig.srcLongitude === -1 ||
      routeConfig.srcLatitude === -1 ||
      routeConfig.dstLongitude === -1 ||
      routeConfig.dstLatitude === -1
    ) {
      return;
    }
    console.log("hey");
    const route = new Route(
      datafile.data,
      headers,
      routeConfig.srcLatitude,
      routeConfig.srcLongitude,
      routeConfig.dstLatitude,
      routeConfig.dstLongitude
    );
    route.dataTable.callFetchDataFromGoogleApi().then(() => {
      dispatch(addRoute(route));
      dispatch(changeCurrentVisualization("route"));
      props.history.push("/maps");
    });
  };

  // **************************************************** //

  // *************** Bar Configuration *************** //
  const [barConfig, setBarConfig] = useState({
    x: -1,
    y: -1,
  });

  const changeBarX = (event) => {
    setBarConfig((prevConfig) => {
      return {
        ...prevConfig,
        x: event.target.value,
      };
    });
  };

  const changeBarY = (event) => {
    setBarConfig((prevConfig) => {
      return {
        ...prevConfig,
        y: event.target.value,
      };
    });
  };

  const handleBarOpen = () => {
    return;
  };
  // **************************************************** //

  // *************** Line Configuration *************** //
  const [lineConfig, setLineConfig] = useState({
    x: -1,
    y: -1,
  });

  const changeLineX = (event) => {
    setLineConfig((prevConfig) => {
      return {
        ...prevConfig,
        x: event.target.value,
      };
    });
  };

  const changeLineY = (event) => {
    setLineConfig((prevConfig) => {
      return {
        ...prevConfig,
        y: event.target.value,
      };
    });
  };

  const handleLineOpen = () => {
    return;
  };
  // **************************************************** //

  // *************** Sankey Configuration *************** //
  const [sankeyConfig, setSankeyConfig] = useState({
    from: -1,
    to: -1,
  });

  const changeSankeyFrom = (event) => {
    setSankeyConfig((prevConfig) => {
      return {
        ...prevConfig,
        from: event.target.value,
      };
    });
  };

  const changeSankeyTo = (event) => {
    setSankeyConfig((prevConfig) => {
      return {
        ...prevConfig,
        to: event.target.value,
      };
    });
  };

  const handleSankeyOpen = () => {
    return;
  };
  // **************************************************** //

  return datafile !== null ? (
    <Box
      flexGrow={1}
      order={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={5}
      className={classes.flexColumn}
    >
      <Typography variant="h3">Choose the visualization method</Typography>

      <Box display="flex" flexDirection="row" justifyContent="center">
        <Box className={classes.listBox}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem>
              <ListItemIcon>
                <AccountTreeIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Maps" />
            </ListItem>
            <Divider />
            {visList.scatterplotmap ? (
              <ListItem
                button
                onClick={() => {
                  setOpenConfig("scatterplot");
                }}
              >
                <ListItemIcon>
                  <MapIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Scatterplot Map" />
              </ListItem>
            ) : null}
            {visList.heatmap ? (
              <ListItem
                button
                onClick={() => {
                  setOpenConfig("heat");
                }}
              >
                <ListItemIcon>
                  <MapIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Heat Map" />
              </ListItem>
            ) : null}
            {visList.routemap ? (
              <ListItem
                button
                onClick={() => {
                  setOpenConfig("route");
                }}
              >
                <ListItemIcon>
                  <MapIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Route Map" />
              </ListItem>
            ) : null}
          </List>
        </Box>
        <Box className={classes.listBox}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem>
              <ListItemIcon>
                <AccountTreeIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Charts" />
            </ListItem>
            <Divider />
            {visList.barchart ? (
              <ListItem
                button
                onClick={() => {
                  setOpenConfig("bar");
                }}
              >
                <ListItemIcon>
                  <AssessmentIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Column Chart" />
              </ListItem>
            ) : null}
            {visList.linechart ? (
              <ListItem
                button
                onClick={() => {
                  setOpenConfig("line");
                }}
              >
                <ListItemIcon>
                  <AssessmentIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Line Chart" />
              </ListItem>
            ) : null}
            {visList.sankeychart ? (
              <ListItem
                button
                onClick={() => {
                  setOpenConfig("sankey");
                }}
              >
                <ListItemIcon>
                  <AssessmentIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Sankey Chart" />
              </ListItem>
            ) : null}
          </List>
        </Box>
      </Box>
      {openConfig === "scatterplot" ? (
        <ScatterplotConfiguration
          headers={headers}
          scatterplotConfig={scatterplotConfig}
          changeScatterplotLatitude={changeScatterplotLatitude}
          changeScatterplotLongitude={changeScatterplotLongitude}
          handleScatterplotOpen={handleScatterplotOpen}
        />
      ) : null}
      {openConfig === "heat" ? (
        <HeatConfiguration
          headers={headers}
          heatConfig={heatConfig}
          changeHeatLatitude={changeHeatLatitude}
          changeHeatLongitude={changeHeatLongitude}
          handleHeatOpen={handleHeatOpen}
        />
      ) : null}
      {openConfig === "route" ? (
        <RouteConfiguration
          headers={headers}
          routeConfig={routeConfig}
          changeRouteSrcLongitude={changeRouteSrcLongitude}
          changeRouteSrcLatitude={changeRouteSrcLatitude}
          changeRouteDstLongitude={changeRouteDstLongitude}
          changeRouteDstLatitude={changeRouteDstLatitude}
          handleRouteOpen={handleRouteOpen}
        />
      ) : null}
      {openConfig === "bar" ? (
        <BarConfiguration
          headers={headers}
          barConfig={barConfig}
          changeBarX={changeBarX}
          changeBarY={changeBarY}
          handleBarOpen={handleBarOpen}
        />
      ) : null}
      {openConfig === "line" ? (
        <LineConfiguration
          headers={headers}
          lineConfig={lineConfig}
          changeLineX={changeLineX}
          changeLineY={changeLineY}
          handleLineOpen={handleLineOpen}
        />
      ) : null}
      {openConfig === "sankey" ? (
        <SankeyConfiguration
          headers={headers}
          sankeyConfig={sankeyConfig}
          changeSankeyFrom={changeSankeyFrom}
          changeSankeyTo={changeSankeyTo}
          handleSankeyOpen={handleSankeyOpen}
        />
      ) : null}
    </Box>
  ) : (
    <Redirect to="/" />
  );
}

function RouteConfiguration(props) {
  const classes = useStyles();
  return (
    <Fragment>
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
    </Fragment>
  );
}

function BarConfiguration(props) {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="row" alignItems="baseline">
      <FormControl
        variant="outlined"
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
            if (header.selected === "string" || header.selected === "number") {
              return <MenuItem value={header.index}>{header.name}</MenuItem>;
            }
          })}
        </Select>
      </FormControl>
      <FormControl
        variant="outlined"
        className={classes.formControl}
        error={props.barConfig.y === -1 ? true : false}
      >
        <InputLabel id="y-label">Y Axis</InputLabel>
        <Select
          labelId="y-label"
          value={props.barConfig.y}
          onChange={props.changeBarY}
          label="Y Axis"
        >
          <MenuItem value={-1}>
            <em>None</em>
          </MenuItem>
          {props.headers.map((header) => {
            if (header.selected === "number") {
              return <MenuItem value={header.index}>{header.name}</MenuItem>;
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

function LineConfiguration(props) {
  const classes = useStyles();
  return (
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
              return <MenuItem value={header.index}>{header.name}</MenuItem>;
            }
          })}
        </Select>
      </FormControl>
      <FormControl
        variant="outlined"
        className={classes.formControl}
        error={props.lineConfig.y === -1 ? true : false}
      >
        <InputLabel id="y-label">Y Axis</InputLabel>
        <Select
          labelId="y-label"
          value={props.lineConfig.y}
          onChange={props.changeLineY}
          label="Y Axis"
        >
          <MenuItem value={-1}>
            <em>None</em>
          </MenuItem>
          {props.headers.map((header) => {
            if (header.selected === "number") {
              return <MenuItem value={header.index}>{header.name}</MenuItem>;
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
  );
}

function SankeyConfiguration(props) {
  const classes = useStyles();
  return (
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
              return <MenuItem value={header.index}>{header.name}</MenuItem>;
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
              return <MenuItem value={header.index}>{header.name}</MenuItem>;
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
  );
}
