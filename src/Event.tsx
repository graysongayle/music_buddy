import React from "react";
import { Moment } from 'moment';
import { Card, CardHeader, CardContent, Typography, CardActions, Button, Dialog, DialogTitle, DialogActions } from '@material-ui/core';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

interface EventProps {
    eventDate: Moment;
    subtitle?: string;
    rightJustified: boolean;
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
        const { eventDate, rightJustified } = this.props;
        const formattedDate = eventDate.format("MM.DD.YYYY");
        return (
            <Element name={formattedDate} className="element">
                <div key={formattedDate} id={formattedDate} className={rightJustified ? "container right" : "container left"}>
                    {this.renderEventDialog()}
                    <Card className="content">
                        <CardHeader
                            title={formattedDate}
                            subheader="Subtitle"
                        />
                        <CardContent>
                            <Typography component="p">
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
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