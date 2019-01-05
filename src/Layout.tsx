

import React from "react";
import { Drawer, ListItem, ListItemText, IconButton, Divider, AppBar, Toolbar, withStyles, StyledComponentProps, Theme, Typography, InputBase, Paper, Button } from '@material-ui/core';
import { Metronome } from './Metronome';
import Menu from '@material-ui/icons/Menu';
import { Palette } from './palette';
import Search from '@material-ui/icons/SearchRounded';
import CalendarToday from '@material-ui/icons/CalendarToday';
import { string } from 'prop-types';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class LayoutClass extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            dateSearch: ''
        }
    }

    toggleMenu() {
        this.setState({ open: !this.state.open });
    }

    searchDate(event: any) {
       console.log("scrolling to", this.state.dateSearch);
        if (event) {
            event.preventDefault();
        }
        const element = document.getElementById(this.state.dateSearch);
        if (element) {
          
            scroller.scrollTo(this.state.dateSearch, {
                duration: 1500,
                delay: 100,
                smooth: true,
                
                offset: -70, 
              });
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar className={classes.appBar} position="fixed">
                    <Toolbar style={{ padding: 0 }}>
                        <IconButton style={{ margin: "0px 10px" }} onClick={() => this.toggleMenu()} color="secondary"><Menu /></IconButton>
                        <Typography style={{ flexGrow: 1 }} variant="display1">Timeline</Typography>

                        <Button onClick={() => {
                            scroll.scrollToTop();
                        }} style={{ position: "sticky", marginRight: 20 }} variant="raised">Today</Button>

                        <Paper className="dateSearch" style={{height: 36, marginRight: 20, backgroundColor: Palette.LightPaleGold, display: 'flex', alignItems: 'center' }} elevation={2}>
                            <IconButton onClick={() => { this.searchDate(undefined) }} color="secondary"><Search /></IconButton>
                            <form onSubmit={(e) => this.searchDate(e)}>
                                <InputBase onChange={(e) => { this.setState({ dateSearch: e.target.value }) }} style={{ color: Palette.White }} className={classes.input} placeholder="Search By Date" />
                            </form>
                            <IconButton color="secondary"><CalendarToday /></IconButton>
                            
                        </Paper>
                    </Toolbar>
                </AppBar>
                <Drawer className={classes.drawer}
                    anchor="left"
                    open={this.state.open}
                    variant="persistent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}>
                    <div className={classes.toolbar} />
                    <ListItem button>
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
                </Drawer>
                <div style={{ marginTop: 70 }} />
            </div>

        )
    }
}

const drawerWidth = 240;
const styles = (theme: Theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    toolbar: theme.mixins.toolbar,
})

export const Layout = withStyles(styles)(LayoutClass);