import React from 'react';
import moment from "moment";
import { Card, CardHeader, CardContent, Typography, CardActions, Button, withStyles, Dialog, DialogTitle, DialogActions } from '@material-ui/core';
import { Event } from './Event';
import * as Scroll from 'react-scroll';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import { default as EventIcon } from '@material-ui/icons/Event';


interface TimelineActionsProps {
    classes: any;
    addNewEvent: () => void;
}

interface TimelineActionsState {
    open: boolean;
    newEventDialogOpen: boolean;
}

class TimelineActionsClass extends React.Component<TimelineActionsProps, TimelineActionsState> {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            newEventDialogOpen: false
        }
    }

    addNewEvent() {
        this.props.addNewEvent();
        this.setState({ newEventDialogOpen: false });
    }

    renderNewEventDialog() {
        return (
            <Dialog
                fullWidth
                maxWidth={"sm"}
                open={this.state.newEventDialogOpen}
                onClose={() => { this.setState({ newEventDialogOpen: false }) }}>
                <DialogTitle id="max-width-dialog-title">{"New Event"}</DialogTitle>
                <DialogActions>
                    <Button onClick={() => { this.setState({ newEventDialogOpen: false }) }} variant="flat">CLOSE</Button>
                    <Button onClick={() => {
                       this.addNewEvent()
                    }} variant="flat">SAVE</Button>
                </DialogActions>
            </Dialog>
        )
    }

    render() {
        const { classes } = this.props;
        const { open } = this.state;
        const actions = [
            {
                icon: <EventIcon />, name: 'New Event'
            }
        ]

        return (
            <div>
                {this.renderNewEventDialog()}
                <SpeedDial
                    ariaLabel="SpeedDial openIcon example"
                    className={classes.speedDial}
                    hidden={false}
                    icon={<SpeedDialIcon />}
                    onBlur={() => { this.setState({ open: false }) }}
                    onClick={() => { this.setState({ open: true }) }}
                    onClose={() => { this.setState({ open: false }) }}
                    onFocus={() => { this.setState({ open: true }) }}
                    onMouseEnter={() => { this.setState({ open: true }) }}
                    onMouseLeave={() => { this.setState({ open: false }) }}
                    open={open}
                >
                    {actions.map(action => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={() => { this.setState({ newEventDialogOpen: true }) }}
                        />
                    ))}
                </SpeedDial>
            </div>
        )
    }
}

const styles: any = theme => ({
    root: {
        height: 380,
    },
    speedDial: {
        position: 'fixed',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3,
    },
});

export const TimelineActions = withStyles(styles)(TimelineActionsClass)