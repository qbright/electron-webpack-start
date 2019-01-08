import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    function DateFormatter(props) {
      return <h1>It is {props.date.toLocaleTimeString()}</h1>;
    }

    return (
      <div>
        <h1>Hello , World</h1>
        <DateFormatter date={this.state.date} />
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById("app"));
