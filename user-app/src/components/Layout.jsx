import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <main className="container-fluid">
      <Header />
      <Outlet />
    </main>
  );
}

export default Layout;
