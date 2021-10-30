import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

let theme = createTheme({
    palette: {
      primary: {
        main: '#4745c8',
        light: '#7f71fc',
        dark: '#001d96'
      },
      secondary: {
        main: '#81c784',
        light: '#b2fab4',
        dark: '#519657'
      },
      text: {
          secondary: '#ffffff'
      },
      grey: grey
    },
})

theme = createTheme(theme, {
    components: {
        MuiAppBar: {
          styleOverrides: {
            colorPrimary: {
              backgroundColor: theme.palette.primary.main
            }
          }
        }
      }
}) 

export { theme };