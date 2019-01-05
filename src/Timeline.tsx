import React from 'react';
import moment from "moment";
import { Card, CardHeader, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import {Event} from './Event';
import * as Scroll from 'react-scroll';

export class Timeline extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        var days: Array<number> = [];
        for (var i = 0; i <= 365; i++) {
            days.push(i);
        }
        return (

            <div className="timeline">
                {
                    days.map((day) => {
                        const even = day % 2 == 0;
                        const date = moment().subtract(day, 'day');
                        return (
                         <Event key={date.format("MM.DD.YYYY")} rightJustified={even} eventDate={date} />
                        )
                    })
                }
            </div>      
        )
    }
}