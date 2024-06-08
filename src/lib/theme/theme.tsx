import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#3AA4F3"
        },
        secondary: {
            main: "#FF7E38"
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: "contained",
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    padding: "8px 24px",
                    color: "white",
                    fontWeight: 600
                }
            }
        },
        MuiContainer: {
            defaultProps: {
                maxWidth: "lg"
            }
        }
    },
    typography: {
        body1: {
            color: "rgba(0, 0, 0, 0.87)"
        }
    }
});

theme.shadows[1] = "0px 5px 22px lightgray";