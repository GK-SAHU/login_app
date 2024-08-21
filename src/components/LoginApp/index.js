import { Component } from "react";
import "./index.css";

class LoginApp extends Component {
  state = {
    value: false,
  };

  LoginButton = () => {
    this.setState((prevState) => ({ value: !prevState.value }));
  };

  render() {
    const { value } = this.state;
    const displayText = value ? "LoginOut" : "Login";
    const text = value ? "Welcome User" : "Please Login";

    return (
      <div className="container">
        <h1 className="heading">{text}</h1>
        <button type="button" className="button" onClick={this.LoginButton}>
          {displayText}
        </button>
      </div>
    );
  }
}
export default LoginApp;
