import React from "react";
import ReactDOM from "react-dom";

const Suspense = React.Suspense;
const Other = React.lazy(
  () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(import("./other"));
      }, 2000);
    })
);

class ComponentA extends React.Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Other />
        </Suspense>
      </div>
    );
  }
}

ReactDOM.render(<ComponentA />, document.getElementById("app"));
