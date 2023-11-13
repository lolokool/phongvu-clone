import "./App.css";
import PublicRoutes from "./router";
import { ShoppingContextProvider } from "./Context/demo";
import AuthProvider from "./Context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <ShoppingContextProvider>
        <PublicRoutes />
      </ShoppingContextProvider>
    </AuthProvider>
  );
}

export default App;
