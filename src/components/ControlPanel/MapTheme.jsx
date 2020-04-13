import React from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Box } from "@material-ui/core";

// style-list
import { mapStyles } from "../../data/mapstyles";

// redux
import { changeMapboxStyle } from "../../state-management/actions/mapstyles";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function MapTheme(props) {
  const classes = useStyles();

  const menulist = mapStyles.map((style) => (
    <option key={style.id} value={style.id}>
      {style.name}
    </option>
  ));

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const index = event.target.value;
    const style = mapStyles[index - 1];

    dispatch(changeMapboxStyle(style));
  };

  return (
    <Box className={props.boxStyle}>
      <FormControl variant="filled" className={classes.formControl} fullWidth>
        <InputLabel htmlFor="my-input">Map Style</InputLabel>
        <Select
          native
          variant="filled"
          onChange={(event) => handleChange(event)}
        >
          {menulist}
        </Select>
      </FormControl>
    </Box>
  );
}
