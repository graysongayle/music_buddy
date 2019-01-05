import { createMuiTheme } from '@material-ui/core';
import { Palette } from './palette';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

const themeOptions: ThemeOptions | any = {
    palette: {
        primary: {
            light: Palette.Silk,
            main: Palette.PaleGold,
            dark: Palette.Silk,
            contrastText: Palette.White,
        },
        secondary: {
            main: Palette.White
        }
    },
    typography: {
        fontFamily: 'Thasadith',
        fontSize: 18,
        display1: {
            fontSize: 28,
            color: Palette.White
        }
    },
    overrides: {
        MuiListItemText: {
            primary: {
                color: Palette.Charcoal,
                fontSize: 22
            }
        },
        MuiSlider: {
            track: { backgroundColor: Palette.White },
            thumb: { backgroundColor: Palette.White }
        },
        MuiButton: {
            flat: {
                color: Palette.PaleGold
            },
            raised: {
                backgroundColor: Palette.LightPaleGold,
                color: Palette.White,
                light: Palette.PaleGold
            }
        }
    },
}

export const theme = createMuiTheme(themeOptions);