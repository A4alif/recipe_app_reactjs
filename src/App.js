import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Category from "./components/Category";
import Pages from "./pages/Pages";

function App() {
  return (
    <>
      <Router>
        <Category />
        <Pages />
      </Router>
    </>
  );
}

export default App;
