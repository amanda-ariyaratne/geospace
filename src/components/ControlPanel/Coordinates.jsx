import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// redux
import { setLatitude, setLongitude } from "../../actions/viewstate";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Coordinates() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleChangeLatitude = (event) => {
    const latitude = event.target.value;
    dispatch(setLatitude(latitude));
  };

  return (
    <div className={classes.root}>
      <TextField
        id="outlined-basic"
        label="Latitude"
        variant="outlined"
        onChange={(e) => handleChangeLatitude(e)}
        autoComplete="off"
      />
      <TextField id="outlined-basic" label="Longitude" variant="outlined" />
    </div>
  );
}
