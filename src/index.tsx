import React, { Component } from "react";
import ReactDOM from "react-dom";
import { AppBar, Toolbar, createMuiTheme, MuiThemeProvider, Paper, Drawer, ListItem, ListItemText, Divider } from "@material-ui/core"
import { Metronome } from "./Metronome";
import { Layout } from "./Layout";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#353535",
      main: "#0E0E0E",
      dark: "#0E0E0E",
      contrastText: "white",
    }
  },
});

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
          Slider
        <Metronome />
        </MuiThemeProvider>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("index"));
