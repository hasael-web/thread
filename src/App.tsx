import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root";

const theme = extendBaseTheme({
  styles: {
    global: {
      body: {
        bg: "#222",
        color: "#fff",
      },
    },
  },
});

const router = createBrowserRouter([{ path: "*", Component: Root }]);

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraBaseProvider>
  );
}

export default App;
