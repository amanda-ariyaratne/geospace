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
<<<<<<< HEAD
import InfoIcon from "@material-ui/icons/Info";
=======
>>>>>>> d0b8b5a60233aab4c69da06912ceaf32d14ce176

// react color
import { CompactPicker } from "react-color";

// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  changeScatterplotMapColor,
  changeScatterplotMapOpacity,
  changeScatterplotMapRadius,
  addMetadataToShowOnHover,
  removeMetadataFromShowOnHover,
  addScatterplot,
} from "../../state/actions/scatterplot";

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

export default function ScatterplotMapControlPanel(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const scatterplotMap = useSelector((state) => state.scatterplot);
  const opacity = useSelector((state) => state.scatterplot.opacity);
  const radius = useSelector((state) => state.scatterplot.radiusMinPixels);
  let showOnHover = useSelector((state) => state.scatterplot.showOnHover);
  const datafile = useSelector((state) => state.datafile);
  const headers = datafile !== null ? datafile.headers : [];

  const handleChangeColor = (color) => {
    scatterplotMap.getColor = [color.rgb["r"], color.rgb["g"], color.rgb["b"]];
    dispatch(
      changeScatterplotMapColor([
        color.rgb["r"],
        color.rgb["g"],
        color.rgb["b"],
      ])
    );
  };

  const handleChangeOpacity = (event, value) => {
    dispatch(changeScatterplotMapOpacity(value));
  };

  const handleChangeRadius = (event, value) => {
    dispatch(changeScatterplotMapRadius(value));
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

  const handleChangeLongitude = (event) => {
    scatterplotMap.dataTable.longitudeHeaderIndex = event.target.value;
    scatterplotMap.dataTable.setDataset(scatterplotMap.dataTable.dataset);
    dispatch(addScatterplot(scatterplotMap));
  };

  const handleChangeLatitude = (event) => {
    scatterplotMap.dataTable.latitudeHeaderIndex = event.target.value;
    scatterplotMap.dataTable.setDataset(scatterplotMap.dataTable.dataset);
    dispatch(addScatterplot(scatterplotMap));
  };

  return (
    <Box style={{ width: 270 }}>
      <ViewVisualizationListButton />
<<<<<<< HEAD
      <ShareButton viewState={props.viewState} />
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
      <Box display="flex" flexDirection="column" className={classes.boxStyle}>
        <Typography variant="subtitle1">Color</Typography>

        <CompactPicker
          color={{
            r: scatterplotMap.getColor[0],
            g: scatterplotMap.getColor[1],
            b: scatterplotMap.getColor[2],
          }}
          onChangeComplete={handleChangeColor}
        />
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
<<<<<<< HEAD
        <Box display="flex" flexDirection="row">
          <Typography variant="subtitle1">Radius</Typography>
          <div style={{ position: "relative", left: "10px", top: "3px" }}>
            <InfoIcon fontSize="small" />
          </div>
        </Box>

=======
        <Typography variant="subtitle1">Radius</Typography>
>>>>>>> d0b8b5a60233aab4c69da06912ceaf32d14ce176
        <div className={classes.slider}>
          <Slider
            aria-labelledby="continuous-slider"
            min={0}
            max={50}
            step={1}
            valueLabelDisplay="auto"
            value={radius}
            onChange={handleChangeRadius}
          />
        </div>
      </Box>
      <Box display="flex" flexDirection="column" className={classes.boxStyle}>
        <Typography variant="subtitle1">Metadata</Typography>

        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>
            {scatterplotMap.dataTable.headers.map((header) => {
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
    </Box>
  );
}
