import { BrowserRouter } from 'react-router-dom';

import {CssBaseline, ThemeProvider} from "@mui/material"

import {ColorModeContext, useMode} from "../src/theme";
import Router from './routes';




function App(){
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </ColorModeContext.Provider>

  )
}

export default App
