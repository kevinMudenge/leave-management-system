import {ColorModeContext, useMode} from "../src/theme";
import {CssBaseline, ThemeProvider} from "@mui/material"
import {Routes, Route} from "react-router-dom";
import Login from "./scenes/auth/Login";
import Topbar from "./scenes/global/Topbar";

function App(){
  const [theme, colorMode] = useMode();

  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className="app">
      <Topbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Login />}/>
        </Routes>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
