

import React from "react";
import { Drawer, ListItem, ListItemText, IconButton, Divider, AppBar, Toolbar, withStyles, StyledComponentProps, Theme, Typography } from '@material-ui/core';
import { Metronome } from './Metronome';
import Menu from '@material-ui/icons/Menu';

class LayoutClass extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        }
    }

    toggleMenu() {
        this.setState({ open: !this.state.open });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar className={classes.appBar} position="fixed">
                    <Toolbar style={{padding: 0}}>
                        <div className={classes.toolbarWrapper}>
                            <IconButton style={{margin: "0px 10px"}} onClick={() => this.toggleMenu()} color="secondary"><Menu /></IconButton>
                            <Typography variant="display1">Practice Routine</Typography>
                            <Metronome />
                        </div>
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
    toolbarWrapper: {
        display: 'flex',
        alignItems: 'center'
    }
})

export const Layout = withStyles(styles)(LayoutClass);