import React from "react";
import ReactDOM from "react-dom";

import { ThemeContext, themes } from "./theme-context";
import ThemeButton from "./themed-button";

function Toolbar(props) {
  return <ThemeButton onClick={props.changeTheme}>Change Theme</ThemeButton>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    };
    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };
  }

  render() {
    return 
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
