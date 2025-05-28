import { Component } from "react";
import { withParams } from "../hoc/common.hoc";

class Contact extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return <div>Contact</div>;
  }
}

export default withParams(Contact);
