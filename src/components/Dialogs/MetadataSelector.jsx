import React from "react";

// material-ui
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Typography,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  metadataHeader: {
    margin: theme.spacing(1),
  },
}));

export default function MetadataSelector(props) {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="row" className={props.boxStyle}>
      <div className={props.labelStyle}>
        <Typography variant="subtitle1">Metadata</Typography>
      </div>
      <Box display="flex" flexDirection="column">
        <Box display="flex" flexDirection="row">
          <TextField
            variant="outlined"
            size="small"
            className={classes.metadataHeader}
          />
          <FormControl className={classes.formControl}>
            <Select
              value={""}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box display="flex" flexDirection="row">
          <TextField
            variant="outlined"
            size="small"
            className={classes.metadataHeader}
          />
          <FormControl className={classes.formControl}>
            <Select
              value={""}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}
