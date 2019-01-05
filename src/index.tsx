import React, { Component } from "react";
import ReactDOM from "react-dom";
import { AppBar, Toolbar, createMuiTheme, MuiThemeProvider, Paper, Drawer, ListItem, ListItemText, Divider } from "@material-ui/core"
import { Layout } from "./Layout";
import { theme } from "./theme"
import { Timeline } from './Timeline';


require("./App.css");
require("./timeline.css");

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Layout />
          <Timeline/>
        </MuiThemeProvider>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("index"));
