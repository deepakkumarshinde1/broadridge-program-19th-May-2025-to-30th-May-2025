import Default from "../components/projects/Default";
import ProjectDetails from "../components/projects/ProjectDetails";

export const projectRoutes = [
  {
    path: "",
    element: <Default />,
  },
  {
    path: ":lang",
    element: <ProjectDetails />,
  },
];
