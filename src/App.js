import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import { ThemeProvider } from "react-bootstrap";
import Header from "./navigation/Header";

function App() {
  return (
    <div>
      <div>
        <Login />
      </div>
    </div>
  );
}

export default App;
