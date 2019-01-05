import React from 'react';
import moment, { Moment } from "moment";
import { Card, CardHeader, CardContent, Typography, CardActions, Button, withStyles } from '@material-ui/core';
import { Event } from './Event';
import * as Scroll from 'react-scroll';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import { default as EventIcon } from '@material-ui/icons/Event';
import { TimelineActions } from './TimelineActions';
import * as _ from "lodash";

interface TimelineProps {

}

interface TimelineState {
    events: Array<IEvent>;
}

export interface IEvent {
    title?: string;
    eventDate: Moment;
    description?: string;
    even: boolean;
}

export class Timeline extends React.Component<any, any> {

    constructor(props) {
        super(props);


        const events: Array<IEvent> = [];
        for (var i = 0; i <= 15; i++) {
            events.push({
                eventDate: moment().subtract(i, 'day'),
                description: "I did something today",
                even: i % 2 == 0
            });
        }

        this.state = {
            events: events
        }
    }

    addNewEvent(event: IEvent) {
        const events = this.state.events.concat({
            title: "New Event",
            description: "New Event Description",
            eventDate: moment().add(1, 'day')
        });
        const sortedEvents = _.orderBy(events, (event: IEvent) => {
            return moment(event.eventDate).format("YYYYMMDD");
        }, ['desc']);
        this.setState({ events: sortedEvents });
    }

    render() {
        var days: Array<number> = [];
        const { classes } = this.props;
        const actions = [
            {
                icon: <EventIcon />, name: 'New Event'
            }
        ]

        return (
            <div>
                <div className="timeline">
                    {
                        this.state.events.map((event: IEvent) => {

                            const future = event.eventDate.isAfter(moment());
                            return (
                                <div style={future ? { backgroundColor: "gray" } : undefined}>
                                    <Event future={future}
                                        key={event.eventDate.format("MM.DD.YYYY")}
                                        rightJustified={event.even}
                                        description={event.description}
                                        eventDate={event.eventDate} />
                                </div>
                            )
                        })
                    }
                </div>
                <TimelineActions addNewEvent={this.addNewEvent.bind(this)} />
            </div>
        )
    }
}

const styles: any = theme => ({
    root: {
        height: 380,
    },
    speedDial: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3,
    },
});
