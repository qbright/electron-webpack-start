import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };

  }
  componentDidMount() {}

  componentWillUnmount() {}
  handlerClick = () => {
    console.log("handlerClick", this);
  };

  render() {
    function DateFormatter(props) {
      return <h1>It is {props.date.toLocaleTimeString()}</h1>;
    }

    return (
      <div>
        <h1>Hello , World Qbright</h1>
        <DateFormatter date={this.state.date} />
        <div onClick={this.handlerClick}>click!!</div>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById("app"));
