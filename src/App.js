import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Router>
        <Search />
        <Category />
        <Pages />
      </Router>
    </>
  );
}

export default App;
