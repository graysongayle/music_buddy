

import React from "react";
import { Drawer, ListItem, ListItemText, Divider, AppBar, Toolbar, withStyles, StyledComponentProps, Theme } from '@material-ui/core';

class LayoutClass extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar className={classes.appBar} position="fixed">
                    <Toolbar>
                        Practice Routine
                    </Toolbar>
                </AppBar>
                <Drawer className={classes.drawer}
                    anchor="left"
                    open
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
    toolbar: theme.mixins.toolbar
})

export const Layout = withStyles(styles)(LayoutClass);