import React, { useState } from "react";

// material-ui
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Typography,
  TextField,
  LinearProgress,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import FileCopyIcon from "@material-ui/icons/FileCopy";

// axios
import axios from "axios";

// redux
import { useSelector } from "react-redux";

const useModelStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px 40px",
  },
  box: {
    padding: "10px 40px",
    "& > *": {
      padding: "8px 0px",
    },
  },
  dialogClose: {
    color: theme.palette.primary.dark,
  },
  dialogSave: {
    color: theme.palette.primary.light,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function ShareDialog(props) {
  const classes = useModelStyles();
  const { onClose, open } = props;
  const [link, setLink] = useState(null);
  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const currentVis = useSelector((state) => state.currentVis);
  const mapStyle = useSelector((state) => state.mapstyle);
  const vis = useSelector((state) => state[currentVis]);
  const datafile = useSelector((state) => state.datafile);

  const handleClose = () => {
    setLoading(false);
    setLink(null);
    onClose();
  };

  const handleGenerateLink = () => {
    let dataset = {
      type: currentVis,
    };

    switch (currentVis) {
      case "scatterplot":
        dataset = {
          ...dataset,
          headers: vis.dataTable.headers,
          data: vis.dataTable.dataset,
          headerNames: vis.dataTable.headerNames,
          radiusScale: vis.radiusScale,
          pickable: vis.pickable,
          opacity: vis.opacity,
          radiusMinPixels: vis.radiusMinPixels,
          getRadius: vis.getRadius,
          getColor: vis.getColor,
          showOnHover: vis.showOnHover,
          mapStyle: mapStyle,
          viewstate: props.viewState,
        };

        break;

      case "heat":
        dataset = {
          ...dataset,
          headers: vis.dataTable.headers,
          data: vis.dataTable.dataset,
          radiusPixels: vis.radiusPixels,
          intensity: vis.intensity,
          threshold: vis.threshold,
          opacity: vis.opacity,
          showOnHover: vis.showOnHover,
          mapStyle: mapStyle,
          viewstate: props.viewState,
        };
        break;

      case "route":
        dataset = {
          ...dataset,
          headers: vis.dataTable.headers,
          data: vis.dataTable.dataset,
          pickable: vis.pickable,
          widthScale: vis.widthScale,
          rounded: vis.rounded,
          opacity: vis.opacity,
          showOnHover: vis.showOnHover,
          mapStyle: mapStyle,
          viewstate: props.viewState,
        };
        break;

      case "bar":
        dataset = {
          ...dataset,
          headers: datafile.headers,
          data: datafile.data,
          xHeaderIndex: vis.dataTable.xHeaderIndex,
          yHeaderIndices: vis.dataTable.yHeaderIndices,
          title: vis.title,
          subtitle: vis.subtitle,
          isStacked: vis.isStacked,
          vAxis: vis.vAxis,
          hAxis: vis.hAxis,
        };
        break;

      case "line":
        dataset = {
          ...dataset,
          headers: datafile.headers,
          data: datafile.data,
          xHeaderIndex: vis.dataTable.xHeaderIndex,
          yHeaderIndices: vis.dataTable.yHeaderIndices,
          title: vis.title,
          curveType: vis.curveType,
          vAxis: vis.vAxis,
          hAxis: vis.hAxis,
          xAxisType: vis.xAxisType,
        };
        break;

      case "sankey":
        dataset = {
          ...dataset,
          headers: datafile.headers,
          data: datafile.data,
          from: vis.dataTable.from,
          to: vis.dataTable.to,
          weight: vis.dataTable.weight,
        };
        break;

      default:
        break;
    }
    setLoading(true);
    axios
      .post(`https://18.209.179.112:8080/api/dataset/add`, dataset)
      .then((res) => {
        setLink(`localhost:3000/vis/${res.data[0]["_id"]}`);
        setLoading(false);
      });
  };

  return (
    <React.Fragment>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth="sm"
        disableBackdropClick
        classes={{
          paper: classes.paper,
        }}
      >
        {loading ? <LinearProgress /> : null}

        <DialogTitle id="simple-dialog-title">Share Visualization</DialogTitle>
        {link === null ? (
          <Box className={classes.box}>
            <Typography>
              You can generate a link and share it among others to let them view
              this visualization.
            </Typography>
            <Typography>
              Please note that your data will be saved in GeoSpace servers.
            </Typography>
            <Typography>
              If you wish to proceed, click on{" "}
              <span style={{ color: theme.palette.primary.light }}>
                GENERATE LINK
              </span>{" "}
              button.
            </Typography>
            <Typography>
              Otherwise, click{" "}
              <span style={{ color: theme.palette.primary.dark }}>CLOSE</span>{" "}
              button to escape this dialog box.
            </Typography>
          </Box>
        ) : (
          <Box className={classes.box}>
            <Typography>Your link is</Typography>
            <Box display="flex" flexDirection="row">
              <TextField variant="outlined" value={link} fullWidth />
              <IconButton
                aria-label="delete"
                className={classes.margin}
                onClick={() => {
                  navigator.clipboard.writeText(link);
                }}
              >
                <FileCopyIcon />
              </IconButton>
            </Box>
          </Box>
        )}

        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            className={classes.dialogClose}
          >
            Close
          </Button>
          {link === null ? (
            <Button
              autoFocus
              className={classes.dialogSave}
              onClick={handleGenerateLink}
            >
              Generate Link
            </Button>
          ) : null}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
