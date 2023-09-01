import { BrowserRouter } from 'react-router-dom';

import {CssBaseline, ThemeProvider} from "@mui/material"

import {ColorModeContext, useMode} from "../src/theme";
import Router from './routes';




function App(){
  const [theme, colorMode] = useMode();

  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>

  )
}

export default App
