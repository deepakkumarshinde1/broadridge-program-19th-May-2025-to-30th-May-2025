import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Counter from "./components/Counter";

export default function App() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about/1">About</NavLink>
        </li>
        <li>
          <NavLink to="/counter">Counter</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:id" element={<About name="deepak" />} />
        <Route path="/contact/:tag" element={<Contact />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </>
  );
}
