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
import { changeMapStyle } from "../../state/actions/mapstyles";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function MapStyle(props) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const mapStyle = useSelector((state) => state.mapstyle);

  const menulist = mapStyles.map((style) => (
    <option key={style.id} value={style.id}>
      {style.name}
    </option>
  ));

  const handleChangeMapStyle = (event) => {
    const index = event.target.value;
    const style = mapStyles[index - 1];

    dispatch(changeMapStyle(style));
  };

  return (
    <Box className={props.boxStyle}>
      <FormControl variant="filled" fullWidth>
        <InputLabel htmlFor="my-input">Map Style</InputLabel>
        <Select
          native
          variant="filled"
          onChange={(event) => handleChangeMapStyle(event)}
          value={mapStyle.id}
        >
          {menulist}
        </Select>
      </FormControl>
    </Box>
  );
}
