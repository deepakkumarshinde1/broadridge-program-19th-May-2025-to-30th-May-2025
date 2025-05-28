import { Component, memo } from "react";
import { withParams } from "../hoc/common.hoc";

class About extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return <div>About </div>;
  }
}

export default withParams(About);
