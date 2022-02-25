import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./styles/Theme";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
