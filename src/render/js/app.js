import React from "react";
import ReactDOM from "react-dom";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [1, 2, 3, 4, 5, 6, 7] };
  }
  componentDidMount() {}

  componentWillUnmount() {}
  handlerClick = index => {
    console.log("index", index);
  };

  render() {
    let ListEl = props => {
      let i = 0;
      return props.list.map(item => {
        return (
          <li
            key={item.toString()}
            onClick={() => {
              this.handlerClick(i++);
            }}
          >
            It is {item}
          </li>
        );
      });
    };

    return (
      <ul>
        <ListEl list={this.state.list} />
      </ul>
    );
  }
}

ReactDOM.render(<List />, document.getElementById("app"));
