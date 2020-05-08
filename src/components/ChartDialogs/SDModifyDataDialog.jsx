import React, { useState, useEffect } from "react";

// material-ui
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  Input,
  Chip,
  MenuItem,
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
  }, [open]);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();

  const [from, setFrom] = useState(sankeyDiagram.from);
  const [to, setTo] = useState(sankeyDiagram.to);
  const [error, setError] = useState("");

  const handleClose = () => {
    restoreDefaults();
    onClose();
  };

  const handleSelectFrom = (event) => {
    setFrom(event.target.value);
  };

  const handleSelectTo = (event) => {
    setTo(event.target.value);
  };

  const handleSave = () => {
    const sankeyDiagramData = new SankeyDiagramData(
      sankeyDiagram.headers,
      from,
      to
    );
    try {
      sankeyDiagramData.setDataset(sankeyDiagram.rawData);
      dispatch(
        addFilteredData({
          filtered: sankeyDiagramData.data,
          from: from,
          to: to,
        })
      );
    } catch (err) {
      setError("Y axis can only contain numerical data");
    }
    handleClose();
  };

  const restoreDefaults = () => {
    setFrom(sankeyDiagram.from);
    setTo(sankeyDiagram.to);
    setError("");
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
              <Box>
                <div className={classes.label}>
                  <Typography variant="subtitle1">
                    Select From Column
                  </Typography>
                </div>
                <FormControl variant="standard" className={classes.formControl}>
                  <InputLabel>From</InputLabel>
                  <Select
                    native
                    variant="standard"
                    value={from}
                    onChange={handleSelectFrom}
                  >
                    <option aria-label="None" value="" />
                    {sankeyDiagram.headers.map((header, index) => {
                      return (
                        <option key={index} value={index}>
                          {header}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <div className={classes.label}>
                  <Typography variant="subtitle1">Select To Column</Typography>
                </div>
                <FormControl variant="standard" className={classes.formControl}>
                  <InputLabel>To</InputLabel>
                  <Select
                    native
                    variant="standard"
                    value={to}
                    onChange={handleSelectTo}
                  >
                    <option aria-label="None" value="" />
                    {sankeyDiagram.headers.map((header, index) => {
                      return (
                        <option key={index} value={index}>
                          {header}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>
            </React.Fragment>
          )}
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
