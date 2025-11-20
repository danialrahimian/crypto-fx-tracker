import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import { router } from "./routes/routes";
import { useRoutes } from "react-router";
import store from "./Redux/store";
import { Provider } from "react-redux";
import { Toaster } from "./components/ui/sonner";
import {
  Cursor,
  CursorProvider,
} from "./components/animate-ui/components/animate/cursor";

function App() {
  const routes = useRoutes(router);
  return (
    <div className="container mx-auto relative pt-18 px-4">
      <Provider store={store}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Navbar />
          {routes}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
