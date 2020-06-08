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
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addRoute,
  changeRouteMapOpacity,
  changeRouteMapWidth,
  addMetadataToShowOnHover,
  removeMetadataFromShowOnHover,
} from "../../state/actions/route";

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

export default function RouteMapControlPanel(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const routeMap = useSelector((state) => state.route);
  const opacity = useSelector((state) => state.route.opacity);
  const width = useSelector((state) => state.route.widthScale);
  let showOnHover = useSelector((state) => state.route.showOnHover);

  const datafile = useSelector((state) => state.datafile);
  const headers = datafile !== null ? datafile.headers : [];

  const handleChangeSrcLongitude = (event) => {
    routeMap.dataTable.srcLongitudeHeaderIndex = event.target.value;
    routeMap.dataTable.setDataset(routeMap.dataTable.dataset);
    routeMap.dataTable.callFetchDataFromGoogleApi().then(() => {
      dispatch(addRoute(routeMap));
    });
  };

  const handleChangeSrcLatitude = (event) => {
    routeMap.dataTable.srcLatitudeHeaderIndex = event.target.value;
    routeMap.dataTable.setDataset(routeMap.dataTable.dataset);
    routeMap.dataTable.callFetchDataFromGoogleApi().then(() => {
      dispatch(addRoute(routeMap));
    });
  };

  const handleChangeDstLongitude = (event) => {
    routeMap.dataTable.dstLongitudeHeaderIndex = event.target.value;
    routeMap.dataTable.setDataset(routeMap.dataTable.dataset);
    routeMap.dataTable.callFetchDataFromGoogleApi().then(() => {
      dispatch(addRoute(routeMap));
    });
  };

  const handleChangeDstLatitude = (event) => {
    routeMap.dataTable.dstLatitudeHeaderIndex = event.target.value;
    routeMap.dataTable.setDataset(routeMap.dataTable.dataset);
    routeMap.dataTable.callFetchDataFromGoogleApi().then(() => {
      dispatch(addRoute(routeMap));
    });
  };

  const handleChangeOpacity = (event, value) => {
    dispatch(changeRouteMapOpacity(value));
  };

  const handleChangeWidth = (event, value) => {
    dispatch(changeRouteMapWidth(value));
  };

  const handleChangeMetaData = (event) => {
    const index = Number(event.target.name);

    if (event.target.checked) {
      showOnHover = [...showOnHover, index];

      dispatch(addMetadataToShowOnHover(index));
    } else {
      const newShowOnHover = [...showOnHover];
      const removeIndex = newShowOnHover.indexOf(index);
      newShowOnHover.splice(removeIndex, 1);
      showOnHover = newShowOnHover;
      dispatch(removeMetadataFromShowOnHover(index));
    }
    return;
  };

  return (
    <React.Fragment>
      <ViewVisualizationListButton />
      <ShareButton />
      <MapStyle boxStyle={classes.boxStyle} />

      <Box className={classes.boxStyle}>
        <FormControl variant="filled" fullWidth>
          <InputLabel htmlFor="longitude-input">Source Longitude</InputLabel>
          <Select
            native
            variant="filled"
            onChange={(event) => handleChangeSrcLongitude(event)}
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
          <InputLabel htmlFor="latitude-input">Source Latitude</InputLabel>
          <Select
            native
            variant="filled"
            onChange={(event) => handleChangeSrcLatitude(event)}
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

      <Box className={classes.boxStyle}>
        <FormControl variant="filled" fullWidth>
          <InputLabel htmlFor="longitude-input">
            Destination Longitude
          </InputLabel>
          <Select
            native
            variant="filled"
            onChange={(event) => handleChangeDstLongitude(event)}
            value={2}
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
          <InputLabel htmlFor="latitude-input">Destination Latitude</InputLabel>
          <Select
            native
            variant="filled"
            onChange={(event) => handleChangeDstLatitude(event)}
            value={3}
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

      <Box
        display="flex"
        flexDirection="column"
        className={`${classes.boxStyle} ${classes.opacityBox}`}
      >
        <Typography variant="subtitle1">Width</Typography>

        <div className={classes.slider}>
          <Slider
            aria-labelledby="continuous-slider"
            min={0}
            max={100}
            step={1}
            valueLabelDisplay="auto"
            value={width}
            onChange={handleChangeWidth}
          />
        </div>
      </Box>
      <Box display="flex" flexDirection="column" className={classes.boxStyle}>
        <Typography variant="subtitle1">Metadata</Typography>

        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>
            {routeMap.dataTable.headers.map((header) => {
              return (
                <FormControlLabel
                  key={header.index}
                  control={
                    <Checkbox
                      checked={
                        showOnHover.indexOf(header.index) < 0 ? false : true
                      }
                      name={header.index.toString()}
                      onChange={handleChangeMetaData}
                    />
                  }
                  label={header.name}
                />
              );
            })}
          </FormGroup>
        </FormControl>
      </Box>
    </React.Fragment>
  );
}
