import React, { useState } from "react";

// material-ui
import {
  Box,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// redux
import { useSelector } from "react-redux";
import { addDatafile } from "../state/actions/datafile";
import { useDispatch } from "react-redux";

// react-router
import { Redirect } from "react-router-dom";

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
}));

function getSteps() {
  return ["Number", "Longitude", "Latitude"];
}

export default function Help(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const datafile = useSelector((state) => state.datafile);
  const steps = getSteps();
  const [activeStep, setActiveStep] = React.useState(0);
  let [headers, setHeaders] = useState(
    datafile !== null ? datafile.headers : []
  );

  const handleNumberHeaderChange = (event) => {
    const name = event.target.name;
    const selected = event.target.checked;
    setHeaders(
      headers.reduce((accumulator, header) => {
        if (header.name === name) {
          const newHeader = {
            ...header,
            selected: selected ? "number" : "string",
          };
          accumulator.push(newHeader);
        } else {
          accumulator.push(header);
        }
        return accumulator;
      }, [])
    );
  };

  const handleLongitudeHeaderChange = (event) => {
    const name = event.target.name;
    const selected = event.target.checked;
    setHeaders(
      headers.reduce((accumulator, header) => {
        if (header.name === name) {
          const newHeader = {
            ...header,
            selected: selected ? "longitude" : "string",
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
            selected: selected ? "latitude" : "string",
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
    if (activeStep + 1 === steps.length) {
      handleFinish();
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFinish = () => {
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
      <Typography variant="h3">
        Can you tell us more about this dataset?
      </Typography>
      <Stepper
        activeStep={activeStep}
        style={{ width: 600, backgroundColor: "transparent" }}
      >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === 0 ? (
        <Step1
          headers={headers}
          handleNumberHeaderChange={handleNumberHeaderChange}
        />
      ) : null}
      {activeStep === 1 ? (
        <Step2
          headers={headers}
          handleLongitudeHeaderChange={handleLongitudeHeaderChange}
        />
      ) : null}
      {activeStep === 2 ? (
        <Step3
          headers={headers}
          handleLatitudeHeaderChange={handleLatitudeHeaderChange}
        />
      ) : null}
      <Box>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          className={classes.button}
          color="primary"
          variant="outlined"
          size="large"
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          className={classes.button}
          size="large"
        >
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </Box>
    </Box>
  ) : (
    <Redirect to="/" />
  );
}

function Step1(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h5">
        Which columns contain numerical data?
      </Typography>
      <Box>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>
            {props.headers.map((header) => {
              if (header.number) {
                return (
                  <FormControlLabel
                    key={header.index}
                    control={
                      <Checkbox
                        checked={header.selected === "number" ? true : false}
                        name={header.name}
                        onChange={props.handleNumberHeaderChange}
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
    </React.Fragment>
  );
}

function Step2(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h5">Which columns contain longitudes?</Typography>
      <Box>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>
            {props.headers.map((header) => {
              if (header.longitude) {
                return (
                  <FormControlLabel
                    key={header.index}
                    control={
                      <Checkbox
                        checked={header.selected === "longitude" ? true : false}
                        name={header.name}
                        onChange={props.handleLongitudeHeaderChange}
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
    </React.Fragment>
  );
}

function Step3(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h5">Which columns contain latitudes?</Typography>
      <Box>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>
            {props.headers.map((header) => {
              if (header.latitude) {
                return (
                  <FormControlLabel
                    key={header.index}
                    control={
                      <Checkbox
                        checked={header.selected === "latitude" ? true : false}
                        name={header.name}
                        onChange={props.handleLatitudeHeaderChange}
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
    </React.Fragment>
  );
}
