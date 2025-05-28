import { useParams } from "react-router-dom";

export function withParams(Component) {
  return (props) => {
    let params = useParams();
    return <Component {...props} params={params} />;
  };
}
