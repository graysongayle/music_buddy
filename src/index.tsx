import React, { Component } from "react";
import ReactDOM from "react-dom";
import { AppBar, Toolbar, createMuiTheme, MuiThemeProvider, Paper, Drawer, ListItem, ListItemText, Divider } from "@material-ui/core"
import { Metronome } from "./Metronome";
import { Layout } from "./Layout";
import { Palette } from './palette';
/* tslint:disable */
const theme = createMuiTheme({
  palette: {
    primary: {
      light: Palette.Silk,
      main: Palette.PaleGold,
      dark: Palette.Charcoal,
      contrastText: Palette.White,
    },
    secondary: {
      main: Palette.White
    }
  },
  typography: {
    fontFamily: 'Thasadith',
    fontSize: 14,
    display1: {
      fontSize: 22,
      color: Palette.White
    }
  },
  overrides: {
    MuiListItemText: {
      primary: {
        color: Palette.Charcoal,
        fontSize: 18
      }
    },
    MuiSlider: {
      track: { backgroundColor: Palette.White },
      thumb: { backgroundColor: Palette.White }
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

        </MuiThemeProvider>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("index"));
