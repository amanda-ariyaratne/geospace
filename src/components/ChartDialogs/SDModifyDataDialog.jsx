import React, { useState, useEffect } from "react";

// material-ui
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Box,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// classes
import SankeyDiagramData from "../../classes/chart/SankeyDiagramData";

// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addFilteredData } from "../../state/actions/sankeydiagram";

// components
import SDFromPicker from "./SDFromPicker";
import SDToPicker from "./SDToPicker";
import SDWeightPicker from "./SDWeightPicker";

const useModelStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px 40px",
  },
  box: {
    padding: "10px 40px",
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
  input: {
    display: "none",
  },
  btnUpload: {
    marginRight: theme.spacing(1),
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(header, yAxis, theme) {
  return {
    fontWeight:
      yAxis.indexOf(header) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function ModifyDataDialog(props) {
  const classes = useModelStyles();
  const { onClose, open } = props;
  let sankeyDiagram = useSelector((state) => state.sankeyDiagram);
  useEffect(() => {
    setFrom(sankeyDiagram.from);
    setTo(sankeyDiagram.to);
    if (sankeyDiagram.specifyWeight === 1) {
      setWeight(sankeyDiagram.weight);
    }
  }, [open]);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();

  const [from, setFrom] = useState(sankeyDiagram.from);
  const [to, setTo] = useState(sankeyDiagram.to);
  const [specifyWeight, setSpecifyWeight] = useState(
    sankeyDiagram.specifyWeight
  );
  const [weight, setWeight] = useState(sankeyDiagram.weight);
  const [error, setError] = useState("");

  const handleClose = () => {
    restoreDefaults();
    onClose();
  };

  const handleSelectFrom = (value) => {
    setFrom(value);
  };

  const handleSelectTo = (value) => {
    setTo(value);
  };

  const handleSave = () => {
    if (from === "") {
      setError("From column is required");
      return;
    }
    if (to === "") {
      setError("To column is required");
      return;
    }
    if (specifyWeight === 1 && weight === "") {
      setError("Weight is required");
      return;
    }
    setError("");
    const sankeyDiagramData = new SankeyDiagramData(
      sankeyDiagram.headers,
      from,
      to,
      weight
    );
    try {
      sankeyDiagramData.setDataset(sankeyDiagram.rawData);
      dispatch(
        addFilteredData({
          filtered: sankeyDiagramData.data,
          from,
          to,
          specifyWeight,
          weight,
        })
      );
    } catch (err) {
      setError("Weight can only contain numerical data");
    }
    handleClose();
  };

  const restoreDefaults = () => {
    setFrom(sankeyDiagram.from);
    setTo(sankeyDiagram.to);
    setError("");
  };

  const handleSpecifyWeightChange = (radioValue) => {
    const value = radioValue === "yes" ? 1 : 0;
    setSpecifyWeight(value);
    if (value === 0) {
      setWeight("");
    }
  };

  const handleSelectWeight = (value) => {
    setWeight(value);
  };

  return (
    <React.Fragment>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth="md"
        disableBackdropClick
        classes={{
          paper: classes.paper,
        }}
      >
        <DialogTitle id="simple-dialog-title">Chart Details</DialogTitle>

        <Box className={classes.box}>
          {sankeyDiagram.rawData.length === 0 ? (
            <Typography>
              No data to create a chart. You can add a dataset by clicking the
              DATASET button on the left side panel.
            </Typography>
          ) : (
            <React.Fragment>
              <SDFromPicker
                label={classes.label}
                formControl={classes.formControl}
                headers={sankeyDiagram.headers}
                from={from}
                handleSelectFrom={handleSelectFrom}
              />
              <SDToPicker
                label={classes.label}
                formControl={classes.formControl}
                headers={sankeyDiagram.headers}
                to={to}
                handleSelectTo={handleSelectTo}
              />
              <SDWeightPicker
                specifyWeight={specifyWeight}
                handleSpecifyWeightChange={handleSpecifyWeightChange}
                formControl={classes.formControl}
                weight={weight}
                handleSelectWeight={handleSelectWeight}
                headers={sankeyDiagram.headers}
              />
            </React.Fragment>
          )}
          {error !== "" ? (
            <Box pt={5}>
              <Typography color="error">{error}</Typography>
            </Box>
          ) : null}
        </Box>

        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            className={classes.dialogClose}
          >
            Close
          </Button>
          {sankeyDiagram.rawData.length === 0 ? null : (
            <Button
              autoFocus
              className={classes.dialogSave}
              onClick={handleSave}
            >
              Save
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
