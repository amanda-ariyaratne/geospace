import React, { useState } from "react";

// material-ui
import {
  Box,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

// redux
import { useSelector } from "react-redux";
import { addDatafile } from "../state/actions/datafile";
import { useDispatch } from "react-redux";

// react-router
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(3),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  flexColumn: {
    "& > *": {
      padding: "16px 0px",
    },
  },
  paper: {
    padding: theme.spacing(5),
    margin: theme.spacing(5, 8),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100%",
  },
  link: {
    color: "inherit",
    textDecoration: "inherit",
  },
}));

export default function Help(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const datafile = useSelector((state) => state.datafile);
  let [headers, setHeaders] = useState(
    datafile !== null ? datafile.headers : []
  );

  const probableLongitudeColumnCount = headers.filter(
    (header) => header.longitude
  ).length;
  const probableLatitudeColumnCount = headers.filter(
    (header) => header.latitude
  ).length;

  const handleLongitudeHeaderChange = (event) => {
    const name = event.target.name;
    const selected = event.target.checked;
    setHeaders(
      headers.reduce((accumulator, header) => {
        if (header.name === name) {
          const newHeader = {
            ...header,
            selected: selected ? "longitude" : "number",
          };
          accumulator.push(newHeader);
        } else {
          accumulator.push(header);
        }
        return accumulator;
      }, [])
    );
  };

  const handleLatitudeHeaderChange = (event) => {
    const name = event.target.name;
    const selected = event.target.checked;
    setHeaders(
      headers.reduce((accumulator, header) => {
        if (header.name === name) {
          const newHeader = {
            ...header,
            selected: selected ? "latitude" : "number",
          };
          accumulator.push(newHeader);
        } else {
          accumulator.push(header);
        }
        return accumulator;
      }, [])
    );
  };

  const handleNext = () => {
    datafile.headers = headers;
    props.history.push("/vis-list");
    dispatch(addDatafile(datafile));
  };

  return datafile !== null ? (
    <Box
      flexGrow={1}
      order={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={5}
      className={classes.flexColumn}
    >
      {probableLongitudeColumnCount === 0 ||
      probableLatitudeColumnCount === 0 ? (
        <Redirect to="/vis-list" />
      ) : null}
      <Typography variant="h3">
        Can you tell us more about this dataset?
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h5">
              Which columns contain longitudes?
            </Typography>
            <Box>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  {headers.map((header) => {
                    if (header.longitude) {
                      return (
                        <FormControlLabel
                          key={header.index}
                          control={
                            <Checkbox
                              checked={
                                header.selected === "longitude" ? true : false
                              }
                              name={header.name}
                              onChange={handleLongitudeHeaderChange}
                            />
                          }
                          label={header.name}
                        />
                      );
                    }
                  })}
                </FormGroup>
              </FormControl>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h5">
              Which columns contain latitudes?
            </Typography>
            <Box>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  {headers.map((header) => {
                    if (header.latitude) {
                      return (
                        <FormControlLabel
                          key={header.index}
                          control={
                            <Checkbox
                              checked={
                                header.selected === "latitude" ? true : false
                              }
                              name={header.name}
                              onChange={handleLatitudeHeaderChange}
                            />
                          }
                          label={header.name}
                        />
                      );
                    }
                  })}
                </FormGroup>
              </FormControl>{" "}
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          className={classes.button}
          size="large"
        >
          Next
        </Button>
      </Box>
    </Box>
  ) : (
    <Redirect to="/" />
  );
}
