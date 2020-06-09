import React from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Box, FormControl, Select, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

// components
import ViewVisualizationListButton from "../Shared/ViewVisualizationListButton";
import ShareButton from "../Shared/ShareButton";

// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addSankey } from "../../state/actions/sankey";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(header, to, theme) {
  return {
    fontWeight:
      to.indexOf(header) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const useStyles = makeStyles((theme) => ({
  boxStyle: {
    margin: theme.spacing(4, 1),
  },
  opacityBox: {
    marginTop: 15,
  },
  slider: {
    width: "100%",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
}));

export default function SankeyChartControlPanel(props) {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  const sankeyChart = useSelector((state) => state.sankey);
  const from = useSelector((state) => state.sankey.dataTable.from);
  const to = useSelector((state) => state.sankey.dataTable.to);
  const weight = useSelector((state) => state.sankey.dataTable.weight);

  const datafile = useSelector((state) => state.datafile);
  const headers = datafile !== null ? datafile.headers : [];

  const handleFromChange = (event) => {
    sankeyChart.dataTable.from = event.target.value;
    sankeyChart.dataTable.setDataset(datafile.data);
    dispatch(addSankey(sankeyChart));
  };

  const handleToChange = (event) => {
    sankeyChart.dataTable.to = event.target.value;
    sankeyChart.dataTable.setDataset(datafile.data);
    dispatch(addSankey(sankeyChart));
  };

  const handleWeightChange = (event) => {
    sankeyChart.dataTable.weight = event.target.value;
    sankeyChart.dataTable.setDataset(datafile.data);
    dispatch(addSankey(sankeyChart));
  };

  return (
    <Box style={{ width: 225 }}>
      <ViewVisualizationListButton />
      <ShareButton viewState={[]} />
      <Box display="flex" flexDirection="column" className={classes.boxStyle}>
        <Typography variant="subtitle1" color="secondary">
          From
        </Typography>
        <FormControl variant="standard" color="secondary">
          <Select native value={from} onChange={handleFromChange}>
            <option aria-label="None" value="" />

            {headers.map((header) => {
              if (header.selected === "string") {
                return (
                  <option key={header.index} value={header.index}>
                    {header.name}
                  </option>
                );
              }
            })}
          </Select>
        </FormControl>
      </Box>
      <Box display="flex" flexDirection="column" className={classes.boxStyle}>
        <Typography variant="subtitle1" color="secondary">
          To
        </Typography>
        <FormControl variant="standard" color="secondary">
          <Select native value={to} onChange={handleToChange}>
            <option aria-label="None" value="" />

            {headers.map((header) => {
              if (header.selected === "string") {
                return (
                  <option key={header.index} value={header.index}>
                    {header.name}
                  </option>
                );
              }
            })}
          </Select>
        </FormControl>
      </Box>
      <Box display="flex" flexDirection="column" className={classes.boxStyle}>
        <Typography variant="subtitle1" color="secondary">
          Weight
        </Typography>
        <FormControl variant="standard" color="secondary">
          <Select native value={weight} onChange={handleWeightChange}>
            <option aria-label="None" value="">
              No weight
            </option>

            {headers.map((header) => {
              if (header.selected === "number") {
                return (
                  <option key={header.index} value={header.index}>
                    {header.name}
                  </option>
                );
              }
            })}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
