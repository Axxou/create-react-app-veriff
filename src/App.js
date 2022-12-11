import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null };
  }

  handleClick = (api) => (e) => {
    e.preventDefault();

    this.setState({ loading: true });
    fetch("/.netlify/functions/" + api)
      .then((response) => response.json())
      .then((json) => this.setState({ loading: false, msg: json.msg }));
  };

  render() {
    const { loading, msg } = this.state;

    return (
      <p>
        <button onClick={this.handleClick("hello")}>
          {loading ? "Loading..." : "Call Lambda"}
        </button>
        <button onClick={this.handleClick("async-dadjoke")}>
          {loading ? "Loading..." : "Call Async Lambda"}
        </button>
        <br />
        <span>{msg}</span>
      </p>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <LambdaDemo />
        </header>
      </div>
    );
  }
}

export default App;

const veriff = Veriff({
  host: "https://stationapi.veriff.com",
  apiKey: "c11452b5-be99-4b52-8941-347ee3e8bc20",
  parentId: "veriff-root",
  onSession: function (err, response) {
    window.veriffSDK.createVeriffFrame({ url: response.verification.url });
  },
});
veriff.setParams({
  vendorData: " ",
});
veriff.mount({
  formLabel: {
    givenName: "Prénom",
    lastName: "Nom",
  },
  submitBtnText: "Test pour Åsa",
  loadingText: "Chargement",
});
