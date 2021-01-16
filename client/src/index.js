import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from "./Button";

import "./styles.css";

class App extends React.Component {
  state = { isSaving: false };
  handleOnClick = () => {
    this.setState({ isSaving: !this.state.isSaving });
  };

  render() {
    const { isSaving } = this.state;
    return (
      <div className="App">
        <Button isSaving={isSaving} onClick={this.handleOnClick} />
      </div>
    );
  }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();