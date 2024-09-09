import "./App.css";
import Routers from "./Route/index";
import AuthProvider from "./contexts/AuthContext";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routers />
      </AuthProvider>
    </div>
  );
}

export default App;
