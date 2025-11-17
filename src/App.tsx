import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import { router } from "./routes/routes";
import { useRoutes } from "react-router";
function App() {
  const routes = useRoutes(router);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      {routes}
    </ThemeProvider>
  );
}

export default App;
