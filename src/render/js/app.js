import React from "react";
import ReactDOM from "react-dom";

class Columns extends React.Component {
  render() {
    return (
      //<React.Fragment>
      <>
        <td>Hello</td>
        <td>World</td>
      </>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <Columns />
          </tr>
        </tbody>
      </table>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
