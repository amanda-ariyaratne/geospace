import React, { useState } from "react";

// material-ui
import { Box, CircularProgress, Typography } from "@material-ui/core";

// react-router
import { useParams } from "react-router-dom";
import { useEffect } from "react";

// classes
import Scatterplot from "../classes/map/Scatterplot";
import HeatMap from "../classes/map/HeatMap";
import Route from "../classes/map/Route";
import BarChart from "../classes/chart/BarChart";
import LineChart from "../classes/chart/LineChart";
import SankeyChart from "../classes/chart/SankeyChart";

// axios
import axios from "axios";

// components
import MapVis from "./MapVis";
import BarVis from "../components/Charts/BarVis";
import LineVis from "../components/Charts/LineVis";
import SankeyVis from "../components/Charts/SankeyVis";

// deck.gl
import { FlyToInterpolator } from "deck.gl";

export default function VisWrapper(props) {
  const [currentVis, setCurrentVis] = useState(null);
  const [dataset, setDataset] = useState(null);
  const [viewState, setViewState] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 0.85,
    bearing: 0,
    pitch: 0,
    transitionDuration: 2000,
    transitionInterpolator: new FlyToInterpolator(),
  });

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://18.209.179.112:8080/api/dataset/get/${id.toString()}`)
      .then(({ data }) => {
        switch (data.type) {
          case "scatterplot":
            let scatterplot = new Scatterplot(data.data, data.headers, 1, 0);
            scatterplot.radiusScale = data.radiusScale;
            scatterplot.pickable = data.pickable;
            scatterplot.opacity = data.opacity;
            scatterplot.radiusMinPixels = data.radiusMinPixels;
            scatterplot.getRadius = data.getRadius;
            scatterplot.getColor = data.getColor;
            scatterplot.showOnHover = data.showOnHover;
            scatterplot.mapStyle = data.mapStyle;
            setViewState(data.viewstate);
            setDataset(scatterplot);
            setCurrentVis("scatterplot");
            break;

          case "heat":
            let heat = new HeatMap(data.data, data.headers, 1, 0);
            heat.radiusPixels = data.radiusPixels;
            heat.intensity = data.intensity;
            heat.threshold = data.threshold;
            heat.opacity = data.opacity;
            heat.showOnHover = data.showOnHover;
            heat.mapStyle = data.mapStyle;
            setDataset(heat);
            setCurrentVis("heat");
            break;

          case "route":
            let route = new Route([], data.headers, 1, 0, 3, 2);
            route.dataTable.dataset = data.data;
            route.pickable = data.pickable;
            route.widthScale = data.widthScale;
            route.rounded = data.rounded;
            route.opacity = data.opacity;
            route.showOnHover = data.showOnHover;
            route.mapStyle = data.mapStyle;
            setDataset(route);
            setCurrentVis("route");
            break;

          case "bar":
            let bar = new BarChart(
              data.data,
              data.headers,
              data.xHeaderIndex,
              data.yHeaderIndices
            );
            bar.title = data.title;
            bar.subtitle = data.subtitle;
            bar.isStacked = data.isStacked;
            bar.vAxis = data.vAxis;
            bar.hAxis = data.hAxis;
            setDataset(bar);
            setCurrentVis("bar");
            break;

          case "line":
            let line = new LineChart(
              data.data,
              data.headers,
              data.xHeaderIndex,
              data.yHeaderIndices
            );
            line.xAxisType = data.xAxisType;
            line.dataTable.setDataset(data.data, data.xAxisType);
            line.title = data.title;
            line.curveType = data.curveType;
            line.vAxis = data.vAxis;
            line.hAxis = data.hAxis;
            setDataset(line);
            setCurrentVis("line");
            break;

          case "sankey":
            let sankey = new SankeyChart(
              data.data,
              data.headers,
              data.from,
              data.to,
              data.weight
            );
            setDataset(sankey);
            setCurrentVis("sankey");
            break;

          default:
            break;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  switch (currentVis) {
    case "scatterplot":
    case "heat":
    case "route":
      return (
        <Box order={2} className="main ">
          <Box className="viz">
            <div className="positioned">
              <MapVis
                viewState={viewState}
                setViewState={setViewState}
                dataset={dataset}
              />
            </div>
          </Box>
        </Box>
      );

    case "bar":
      return (
        <Box order={2} className="main">
          <Box className="viz chartspace">
            <BarVis dataset={dataset} />
          </Box>
        </Box>
      );

    case "line":
      return (
        <Box order={2} className="main">
          <Box className="viz chartspace">
            <LineVis dataset={dataset} />
          </Box>
        </Box>
      );

    case "sankey":
      return (
        <Box order={2} className="main">
          <Box className="viz chartspace">
            <SankeyVis dataset={dataset} />
          </Box>
        </Box>
      );

    default:
      return (
        <Box
          order={2}
          className="main "
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <CircularProgress />
          <Typography>Retrieving from the database</Typography>
          <Typography>Please wait a moment</Typography>
        </Box>
      );
  }
}
