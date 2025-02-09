import "./App.css";
import { createContext, Dispatch } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

type ContextType = {
  theme: string;
  setTheme: Dispatch<React.SetStateAction<string>>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ContextType | null>(null);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
