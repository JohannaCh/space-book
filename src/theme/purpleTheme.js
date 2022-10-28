import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette: {
        primary:{
            main:'#0d2137'
        },
        secondary:{
            main:'#e0eaf5'
        },
        tertiary:{
            main:'#ff8e2b'
        },
        error:{
            main: red.A400
        }
    }
});