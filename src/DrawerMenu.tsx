

import React from "react";
import { Drawer, ListItem, ListItemText, Divider } from '@material-ui/core';

export class DrawerMenu extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            open: true
        }
    }

    render() {
        return (
            <Drawer anchor="left" open variant="persistent">
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
        )
    }
}