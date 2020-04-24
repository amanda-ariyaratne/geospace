import React from "react";

// material-ui
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
  },
  metadataHeader: {
    margin: theme.spacing(1),
  },
}));

export default function MetadataSelector(props) {
  const classes = useStyles();

  const handleChange = (event) => {
    const index = Number(event.target.name);
    if (event.target.checked) {
      props.setShowOnHover([...props.showOnHover, index]);
    } else {
      const newShowOnHover = [...props.showOnHover];
      const removeIndex = newShowOnHover.indexOf(index);
      newShowOnHover.splice(removeIndex, 1);
      props.setShowOnHover(newShowOnHover);
    }
  };

  const checkboxes = props.headers.map((header, index) => {
    return (
      <FormControlLabel
        key={index}
        control={
          <Checkbox
            checked={props.showOnHover.indexOf(index) < 0 ? false : true}
            name={index.toString(10)}
            onChange={handleChange}
          />
        }
        label={header}
      />
    );
  });

  return (
    <Box display="flex" flexDirection="row" className={props.boxStyle}>
      <div className={props.labelStyle}>
        <Typography variant="subtitle1">Metadata</Typography>
      </div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>{checkboxes}</FormGroup>
      </FormControl>
    </Box>
  );
}
