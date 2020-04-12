import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// redux
import { setPitch } from "../../actions/viewstate";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Coordinates() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleChangePitch = (event) => {
    const pitch = event.target.value;
    dispatch(setPitch(pitch));
  };

  const pitchInput = useRef(null);

  return (
    <div className={classes.root}>
      <TextField
        id="outlined-basic"
        label="Pitch"
        variant="standard"
        onChange={(e) => handleChangePitch(e)}
        autoComplete="off"
        helperText="0 to 60"
        inputRef={pitchInput}
      />
    </div>
  );
}
