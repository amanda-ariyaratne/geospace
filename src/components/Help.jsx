import React, { useState } from "react";

// material-ui
import {
  Box,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Grid,
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
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    marginRight: theme.spacing(1),
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
  return ["", "", ""];
}

export default function Help() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const datafile = useSelector((state) => state.datafile);
  const steps = getSteps();
  const [activeStep, setActiveStep] = React.useState(0);
  let headers = datafile === null ? null : datafile.headers;

  let numberHeadersSorted =
    datafile !== null ? headers.filter((header) => header.number) : [];

  const [numberHeaders, setNumberHeaders] = useState(
    numberHeadersSorted.map((header) => {
      return { ...header, selected: false };
    })
  );

  const handleNumberHeaderChange = (event) => {
    const name = event.target.name;
    const selected = event.target.checked;
    setNumberHeaders(
      numberHeaders.reduce((accumulator, header) => {
        if (header["name"] === name) {
          const newHeader = {
            ...header,
            selected: selected,
          };
          accumulator.push(newHeader);
        } else {
          accumulator.push(header);
        }
        return accumulator;
      }, [])
    );
  };

  let longitudeHeadersSorted =
    datafile !== null ? headers.filter((header) => header.longitude) : [];

  const [longitudeHeaders, setLongitudeHeaders] = useState(
    longitudeHeadersSorted.map((header) => {
      return { ...header, selected: false };
    })
  );

  const handleLongitudeHeaderChange = (event) => {
    const name = event.target.name;
    const selected = event.target.checked;
    setLongitudeHeaders(
      longitudeHeaders.reduce((accumulator, header) => {
        if (header["name"] === name) {
          const newHeader = {
            ...header,
            selected: selected,
          };
          accumulator.push(newHeader);
        } else {
          accumulator.push(header);
        }
        return accumulator;
      }, [])
    );
  };

  let latitudeHeadersSorted =
    datafile !== null ? headers.filter((header) => header.latitude) : [];

  const [latitudeHeaders, setLatitudeHeaders] = useState(
    latitudeHeadersSorted.map((header) => {
      return { ...header, selected: false };
    })
  );

  const handleLatitudeHeaderChange = (event) => {
    const name = event.target.name;
    const selected = event.target.checked;
    setLatitudeHeaders(
      latitudeHeaders.reduce((accumulator, header) => {
        if (header["name"] === name) {
          const newHeader = {
            ...header,
            selected: selected,
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
    const selectedNumberHeaders = numberHeaders.filter(
      (header) => header.selected
    );
    const selectedLongitudeHeaders = longitudeHeaders.filter(
      (header) => header.selected
    );
    const selectedLatitudeHeaders = latitudeHeaders.filter(
      (header) => header.selected
    );
    headers = headers.map((header) => {
      return {
        index: header.index,
        name: header.name,
        type: "string",
      };
    });

    for (let i = 0; i < headers.length; ++i) {
      for (let j = 0; j < selectedNumberHeaders.length; ++j) {
        if (headers[i].name === selectedNumberHeaders[j].name) {
          headers[i] = {
            ...headers[i],
            type: "number",
          };
          break;
        }
      }
      for (let j = 0; j < selectedLongitudeHeaders.length; ++j) {
        if (headers[i].name === selectedLongitudeHeaders[j].name) {
          headers[i] = {
            ...headers[i],
            type: "longitude",
          };
          break;
        }
      }
      for (let j = 0; j < selectedLatitudeHeaders.length; ++j) {
        if (headers[i].name === selectedLatitudeHeaders[j].name) {
          headers[i] = {
            ...headers[i],
            type: "latitude",
          };
          break;
        }
      }
    }
    datafile.headers = headers;
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
          numberHeaders={numberHeaders}
          handleNumberHeaderChange={handleNumberHeaderChange}
        />
      ) : null}
      {activeStep === 1 ? (
        <Step2
          longitudeHeaders={longitudeHeaders}
          handleLongitudeHeaderChange={handleLongitudeHeaderChange}
        />
      ) : null}
      {activeStep === 2 ? (
        <Step3
          latitudeHeaders={latitudeHeaders}
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
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          className={classes.button}
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
            {props.numberHeaders.map((header) => {
              return (
                <FormControlLabel
                  key={header.index}
                  control={
                    <Checkbox
                      checked={header.selected}
                      name={header.name}
                      onChange={props.handleNumberHeaderChange}
                    />
                  }
                  label={header.name}
                />
              );
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
            {props.longitudeHeaders.map((header) => {
              return (
                <FormControlLabel
                  key={header.index}
                  control={
                    <Checkbox
                      checked={header.selected}
                      name={header.name}
                      onChange={props.handleLongitudeHeaderChange}
                    />
                  }
                  label={header.name}
                />
              );
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
            {props.latitudeHeaders.map((header) => {
              return (
                <FormControlLabel
                  key={header.index}
                  control={
                    <Checkbox
                      checked={header.selected}
                      name={header.name}
                      onChange={props.handleLatitudeHeaderChange}
                    />
                  }
                  label={header.name}
                />
              );
            })}
          </FormGroup>
        </FormControl>{" "}
      </Box>
    </React.Fragment>
  );
}
