
import React, { Component } from "react";
import Slider from "@material-ui/lab/Slider";
import { Typography } from "@material-ui/core";

interface MetronomeState {
    bpm: number;
};

export class Metronome extends React.Component<any, MetronomeState> {
    constructor(props) {
        super(props);
        this.state = {
            bpm: 50
        };
    }
    moveSlider = (event, value) => {
        this.setState({ bpm: value });
    };

    render() {
        return (
            <div>
                <div>
                    <Typography id="slider-image">Metronome {this.state.bpm}</Typography>
                    <Slider
                        style={{ padding: "22px 22px", color: "blue", width: 300 }}
                        aria-labelledby="slider-image"
                        min={40}
                        max={220}
                        step={1}
                        value={this.state.bpm}
                        onChange={this.moveSlider} />
                </div>
            </div>
        );
    }
}