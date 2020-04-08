import React, { Component, useState } from "react";
import "./App.css";

import { Box } from "@material-ui/core";

import Header from "./components/Header";
import Main from "./components/Main";

export default function App(props) {
  return (
    <Box display="flex" flexDirection="column" className="app">
      <Box order={1}>
        <Header />
      </Box>
      <Main />
    </Box>
  );
}
