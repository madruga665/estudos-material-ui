import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import MyRoutes from "./routes";
import { Theme } from "./styles/Theme";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <MyRoutes />
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
