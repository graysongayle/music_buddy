import React from "react";
import { Moment } from 'moment';
import { Card, CardHeader, CardContent, Typography, CardActions, Button, Dialog, DialogTitle, DialogActions, IconButton } from '@material-ui/core';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import moment from "moment";
import WbSunny from '@material-ui/icons/WbSunny';

interface EventProps {
    eventDate: Moment;
    subtitle?: string;
    description?: string;
    rightJustified: boolean;
    future: boolean;
}

interface EventState {
    dialogOpen: boolean;
}

export class Event extends React.Component<EventProps, EventState> {
    constructor(props) {
        super(props);
        this.state = {
            dialogOpen: false
        }
    }

    renderEventDialog() {
        return (
            <Dialog
                fullWidth
                maxWidth={"md"}
                open={this.state.dialogOpen}
                onClose={() => { this.setState({ dialogOpen: false }) }}>
                <DialogTitle id="max-width-dialog-title">{this.props.eventDate.format("LL")}</DialogTitle>
                <DialogActions>
                    <Button onClick={() => { this.setState({ dialogOpen: false }) }} variant="flat">CLOSE</Button>
                </DialogActions>
            </Dialog>
        )
    }

    render() {
        const { eventDate, rightJustified, description } = this.props;
        const formattedDate = eventDate.format("MM.DD.YYYY");
        const isToday = eventDate.isSame(moment(), 'day');

        return (
            <Element name={formattedDate} className="eventContainer">
                <div key={formattedDate} id={formattedDate} className={rightJustified ? "container right" : "container left"}>
                    {this.renderEventDialog()}
                    <Card className="content">
                        <CardHeader
                            title={formattedDate}
                            subheader="Subtitle"
                            action={
                                isToday ? <IconButton color="primary"><WbSunny /></IconButton> : undefined
                            }
                        />
                        <CardContent>
                            <Typography component="p">
                                {description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => { this.setState({ dialogOpen: true }) }} variant="flat">DETAILS</Button>
                        </CardActions>
                    </Card>
                </div>


            </Element>
        )
    }
}