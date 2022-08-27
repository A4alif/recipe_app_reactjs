import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <>
      <Router>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}> Recipe App</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </Router>
    </>
  );
}
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
  margin-left: 10px;
  cursor: pointer;
`;
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;
export default App;
