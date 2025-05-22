import { Link, NavLink } from "react-router-dom";

function Header() {
  let languages = [
    {
      name: "Java project",
      path: "java",
    },
    {
      name: ".Net project",
      path: "dot-net",
    },
    {
      name: "C# project",
      path: "c-sharp",
    },
    {
      name: "Node project",
      path: "node-js",
    },
    {
      name: "Express project",
      path: "node-express",
    },
  ];
  return (
    <>
      <p>Brand</p>
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/wether-details">Details</NavLink>
        </li>
        <li>
          <NavLink to="/weather-history">Weather History</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
          <ul>
            {languages.map((language, index) => {
              return (
                <li key={index}>
                  <NavLink to={"/projects/" + language.path}>
                    {language.name}
                  </NavLink>
                </li>
              );
            })}

            <li>
              <NavLink to="/projects/.net">.Net</NavLink>
            </li>
            <li>
              <NavLink to="/projects/node">Node JS</NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default Header;
