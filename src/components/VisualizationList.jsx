import React, { useState } from "react";

// material-ui
import {
  Box,
  Typography,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import MapIcon from "@material-ui/icons/Map";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import { makeStyles } from "@material-ui/core/styles";

// components
import ScatterplotConfiguration from "./Configurations/ScatterplotConfiguration";
import HeatConfiguration from "./Configurations/HeatConfiguration";
import RouteConfiguration from "./Configurations/RouteConfiguration";
import BarConfiguration from "./Configurations/BarConfiguration";
import LineConfiguration from "./Configurations/LineConfiguration";
import SankeyConfiguration from "./Configurations/SankeyConfiguration";

// classes
import VisualizationMapper from "../classes/data/VisualizationMapper";
import Scatterplot from "../classes/map/Scatterplot";
import HeatMap from "../classes/map/HeatMap";
import Route from "../classes/map/Route";
import BarChart from "../classes/chart/BarChart";
import LineChart from "../classes/chart/LineChart";
import SankeyChart from "../classes/chart/SankeyChart";

// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addScatterplot } from "../state/actions/scatterplot";
import { addHeat } from "../state/actions/heat";
import { addRoute } from "../state/actions/route";
import { addBar } from "../state/actions/bar";
import { addLine } from "../state/actions/line";
import { addSankey } from "../state/actions/sankey";
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
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
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
      JSON.parse(JSON.stringify(datafile.data)),
      JSON.parse(JSON.stringify(headers)),
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
      JSON.parse(JSON.stringify(datafile.data)),
      JSON.parse(JSON.stringify(headers)),
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
    loading: false,
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

  const changeSetRouteLoading = () => {
    setRouteConfig((prevConfig) => {
      return {
        ...prevConfig,
        loading: !prevConfig.loading,
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
    const route = new Route(
      JSON.parse(JSON.stringify(datafile.data)),
      JSON.parse(JSON.stringify(headers)),
      routeConfig.srcLatitude,
      routeConfig.srcLongitude,
      routeConfig.dstLatitude,
      routeConfig.dstLongitude
    );
    changeSetRouteLoading();
    route.dataTable.callFetchDataFromGoogleApi().then(() => {
      changeSetRouteLoading();
      dispatch(addRoute(route));
      dispatch(changeCurrentVisualization("route"));
      props.history.push("/maps");
    });
  };

  // **************************************************** //

  // *************** Bar Configuration *************** //
  const [barConfig, setBarConfig] = useState({
    x: -1,
    y: [],
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
    if (barConfig.x === -1 || barConfig.y.length === 0) {
      return;
    }

    const bar = new BarChart(
      JSON.parse(JSON.stringify(datafile.data)),
      JSON.parse(JSON.stringify(headers)),
      barConfig.x,
      barConfig.y
    );
    dispatch(addBar(bar));
    dispatch(changeCurrentVisualization("bar"));
    props.history.push("/charts");
  };
  // **************************************************** //

  // *************** Line Configuration *************** //
  const [lineConfig, setLineConfig] = useState({
    x: -1,
    y: [],
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
    if (lineConfig.x === -1 || lineConfig.y.length === 0) {
      return;
    }

    const line = new LineChart(
      JSON.parse(JSON.stringify(datafile.data)),
      JSON.parse(JSON.stringify(headers)),
      lineConfig.x,
      lineConfig.y
    );
    dispatch(addLine(line));
    dispatch(changeCurrentVisualization("line"));
    props.history.push("/charts");
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
    if (sankeyConfig.from === -1 || sankeyConfig.to === -1) {
      return;
    }

    const sankey = new SankeyChart(
      JSON.parse(JSON.stringify(datafile.data)),
      JSON.parse(JSON.stringify(headers)),
      sankeyConfig.from,
      sankeyConfig.to,
      ""
    );
    dispatch(addSankey(sankey));
    dispatch(changeCurrentVisualization("sankey"));
    props.history.push("/charts");
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

      <Typography variant="h6">
        These are the types of visualization we found that matches your dataset.
      </Typography>

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
