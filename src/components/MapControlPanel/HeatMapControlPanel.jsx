import React from "react";

// components
import MapStyle from "./MapStyle";
import ViewVisualizationListButton from "../Shared/ViewVisualizationListButton";
import ShareButton from "../Shared/ShareButton";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  Slider,
} from "@material-ui/core";

// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addHeat,
  changeHeatMapRadius,
  changeHeatMapIntensity,
  changeHeatMapThreshold,
  changeHeatMapOpacity,
} from "../../state/actions/heat";

const useStyles = makeStyles((theme) => ({
  boxStyle: {
    margin: theme.spacing(2, 1),
  },
  opacityBox: {
    marginTop: 15,
  },
  slider: {
    width: "100%",
  },
}));

export default function HeatMapControlPanel(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const heatMap = useSelector((state) => state.heat);
  const radius = useSelector((state) => state.heat.radiusPixels);
  const intensity = useSelector((state) => state.heat.intensity);
  const threshold = useSelector((state) => state.heat.threshold);
  const opacity = useSelector((state) => state.heat.opacity);

  const datafile = useSelector((state) => state.datafile);
  const headers = datafile !== null ? datafile.headers : [];

  const handleChangeLongitude = (event) => {
    heatMap.dataTable.longitudeHeaderIndex = event.target.value;
    heatMap.dataTable.setDataset(heatMap.dataTable.dataset);
    dispatch(addHeat(heatMap));
  };

  const handleChangeLatitude = (event) => {
    heatMap.dataTable.latitudeHeaderIndex = event.target.value;
    heatMap.dataTable.setDataset(heatMap.dataTable.dataset);
    dispatch(addHeat(heatMap));
  };

  const handleChangeRadius = (event, value) => {
    dispatch(changeHeatMapRadius(value));
  };

  const handleChangeIntensity = (event, value) => {
    dispatch(changeHeatMapIntensity(value));
  };

  const handleChangeThreshold = (event, value) => {
    dispatch(changeHeatMapThreshold(value));
  };
  const handleChangeOpacity = (event, value) => {
    dispatch(changeHeatMapOpacity(value));
  };

  return (
    <React.Fragment>
      <ViewVisualizationListButton />
<<<<<<< HEAD
<<<<<<< HEAD
      <ShareButton viewState={props.viewState} />
=======
      <ShareButton />
>>>>>>> d0b8b5a60233aab4c69da06912ceaf32d14ce176
=======
      <ShareButton />
>>>>>>> d0b8b5a60233aab4c69da06912ceaf32d14ce176
      <MapStyle boxStyle={classes.boxStyle} />

      <Box className={classes.boxStyle}>
        <FormControl variant="filled" fullWidth>
          <InputLabel htmlFor="longitude-input">Longitude</InputLabel>
          <Select
            native
            variant="filled"
            onChange={(event) => handleChangeLongitude(event)}
            value={0}
          >
            {headers.map((header) => {
              if (header.selected === "longitude") {
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
      <Box className={classes.boxStyle}>
        <FormControl variant="filled" fullWidth>
          <InputLabel htmlFor="latitude-input">Latitude</InputLabel>
          <Select
            native
            variant="filled"
            onChange={(event) => handleChangeLatitude(event)}
            value={1}
          >
            {headers.map((header) => {
              if (header.selected === "latitude") {
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
      <Box
        display="flex"
        flexDirection="column"
        className={`${classes.boxStyle} ${classes.opacityBox}`}
      >
        <Typography variant="subtitle1">Radius</Typography>

        <div className={classes.slider}>
          <Slider
            aria-labelledby="continuous-slider"
            min={0}
            max={100}
            step={1}
            valueLabelDisplay="auto"
            value={radius}
            onChange={handleChangeRadius}
          />
        </div>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        className={`${classes.boxStyle} ${classes.opacityBox}`}
      >
        <Typography variant="subtitle1">Intensity</Typography>

        <div className={classes.slider}>
          <Slider
            aria-labelledby="continuous-slider"
            min={0}
            max={100}
            step={1}
            valueLabelDisplay="auto"
            value={intensity}
            onChange={handleChangeIntensity}
          />
        </div>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        className={`${classes.boxStyle} ${classes.opacityBox}`}
      >
        <Typography variant="subtitle1">Threshold</Typography>

        <div className={classes.slider}>
          <Slider
            aria-labelledby="continuous-slider"
            min={0}
            max={1}
            step={0.01}
            valueLabelDisplay="auto"
            value={threshold}
            onChange={handleChangeThreshold}
          />
        </div>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        className={`${classes.boxStyle} ${classes.opacityBox}`}
      >
        <Typography variant="subtitle1">Opacity</Typography>

        <div className={classes.slider}>
          <Slider
            aria-labelledby="continuous-slider"
            min={0}
            max={1}
            step={0.01}
            valueLabelDisplay="auto"
            value={opacity}
            onChange={handleChangeOpacity}
          />
        </div>
      </Box>
    </React.Fragment>
  );
}
