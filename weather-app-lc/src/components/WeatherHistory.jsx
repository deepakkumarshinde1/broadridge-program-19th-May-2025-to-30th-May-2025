import { Component, PureComponent } from "react";
import { Link } from "react-router-dom";

class WeatherHistory extends PureComponent {
  constructor(props) {
    // console.log("init");
    super(props);
    // this.state = {
    //   count: props.history.length,
    // };
    // this.state = {
    //   ...props,
    // };
  }

  // static getDerivedStateFromProps(newProps, preState) {
  //   return {
  //     ...newProps
  //   }
  // }

  componentDidMount() {
    console.log("mounting");
  }

  componentDidUpdate() {
    console.log("updating");
  }

  // shouldComponentUpdate(newProps,newState) {
  //   if (this.props.history === newProps.history) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  componentWillUnmount() {
    console.log("unmount");
  }

  // static abc(){

  // }
  removeACity = (index) => {
    let newHistory = JSON.parse(JSON.stringify(this.props.history));
    newHistory.splice(index, 1);
    this.props.setHistory(newHistory);
  };
  render() {
    let { history, setWeatherDetails } = this.props;
    return (
      <>
        <h1>Search History {history.length}</h1>
        <table>
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Name City</th>
              <th>Temp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {history.map((city, index) => {
              return (
                <tr key={city.id}>
                  <td>{index + 1}</td>
                  <td>{city.name}</td>
                  <td>
                    {city.main.temp} <sup>o</sup>C
                  </td>
                  <td>
                    <Link
                      to="/wether-details"
                      onClick={() => setWeatherDetails({ ...city })}
                    >
                      View
                    </Link>
                    <button onClick={() => this.removeACity(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default WeatherHistory;
