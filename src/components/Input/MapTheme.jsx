import React from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

// style-list
import { mapStyles } from "../../data/mapstyles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function MapTheme() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const menulist = mapStyles.map((style) => (
    <option key={style.name} value={style.url}>
      {style.name}
    </option>
  ));

  return (
    <FormControl variant="filled" className={classes.formControl}>
      <InputLabel htmlFor="my-input">Map Style</InputLabel>
      <Select native variant="filled">
        {menulist}
      </Select>
    </FormControl>
  );
}
