import "./App.css";
import PublicRoutes from "./router";

import { ShoppingContextProvider } from "./Context/demo";

function App() {
  return (
    <ShoppingContextProvider>
      <PublicRoutes />
    </ShoppingContextProvider>
  );
}

export default App;
