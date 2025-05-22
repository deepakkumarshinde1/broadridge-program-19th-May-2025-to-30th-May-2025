import { useParams } from "react-router-dom";

function ProjectDetails() {
  let params = useParams();
  console.log(params);
  return (
    <div>
      ProjectDetails of <span>{params.lang}</span>
    </div>
  );
}

export default ProjectDetails;
