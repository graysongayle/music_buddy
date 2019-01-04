import React, { Component } from "react";
import ReactDOM from "react-dom";
import { AppBar, Toolbar, createMuiTheme, MuiThemeProvider, Paper, Drawer, ListItem, ListItemText, Divider } from "@material-ui/core"
import { Metronome } from "./Metronome";
import { DrawerMenu } from "./DrawerMenu";

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
      met: 50
    }
  }

  render() {
    return <MuiThemeProvider theme={theme}>
      <div className="App">

        <AppBar style={{ marginRight: 64 }} className="AppBar" position="static">
          <Toolbar>
            Practice Routine

          </Toolbar>

        </AppBar>
        Slider
        <Metronome />
        <DrawerMenu />
        {/* <iframe src="../assets/Vacchiano-Trumpet-Routines.pdf" type="application/pdf" height="900px" width="500px" /> */}
      </div>
    </MuiThemeProvider>
  }
}

const drawerWidth = 240;
const styles = {
  drawer: {
    width: drawerWidth
  }
}


ReactDOM.render(<App />, document.getElementById("index"));
