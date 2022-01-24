import { createTheme } from "@material-ui/core";
import { blue, grey } from "@material-ui/core/colors";

export const themie = createTheme({
    palette: {
        primary: {
            main: blue[500],
        }
    },
   myButton: {
    color: "white",
    backgroundColor: "red",
    border:"1px solid black",
  }

});