import React, { Component } from "react";
import ReactDOM from "react-dom";
import { AppBar, Toolbar, createMuiTheme, MuiThemeProvider, Paper, Drawer, ListItem, ListItemText, Divider } from "@material-ui/core"
import { Metronome } from "./Metronome";

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

        <AppBar className="AppBar" position="static">
          <Toolbar>
            Practice Routine

          </Toolbar>

        </AppBar>
        Slider
        <Metronome/>

        {/* <Drawer  anchor="left" open variant="persistent">
     
          <ListItem style={{marginTop: 64}} button>
            <ListItemText primary="First" />
            <Divider />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Second" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Third" />
          </ListItem>
          <Divider />
        </Drawer> */}
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
