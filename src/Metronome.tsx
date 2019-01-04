
import React, { Component } from "react";
import Slider from "@material-ui/lab/Slider";
import { Typography, IconButton } from "@material-ui/core";
import { Palette } from './palette';
import DeleteIcon from '@material-ui/icons/Delete';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import PlayCircleFilledWhite from '@material-ui/icons/PlayCircleFilledWhite';
import PauseCircleFilled from '@material-ui/icons/PauseCircleFilled';


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
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                    <Typography id="slider-image" style={{ color: Palette.White, marginLeft: 22 }}>Metronome {this.state.bpm}</Typography>
                    <Slider
                        style={{ padding: "10px 22px", color: "blue", width: 300 }}
                        aria-labelledby="slider-image"
                        min={40}
                        max={220}
                        step={1}
                        value={this.state.bpm}
                        onChange={this.moveSlider} />
                </div>
                <div>
                    <IconButton color="secondary"> <PlayCircleFilledWhite/></IconButton>
                    <IconButton color="secondary"> <PauseCircleFilled/></IconButton>
                    {/* <ToggleButtonGroup value={'left'} exclusive >
                        <ToggleButton style={{backgroundColor: Palette.Silk}} value="left">
                            <FormatAlignLeftIcon />
                        </ToggleButton>
                        <ToggleButton value="center">
                            <FormatAlignCenterIcon />
                        </ToggleButton>
                        <ToggleButton value="right">
                            <FormatAlignRightIcon />
                        </ToggleButton>
                        <ToggleButton value="justify" disabled>
                            <FormatAlignJustifyIcon />
                        </ToggleButton>
                    </ToggleButtonGroup> */}
                </div>

            </div>
        );
    }
}