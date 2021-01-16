import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  static propTypes = {
    isSaving: PropTypes.boolean,
    onClick: PropTypes.func.isRequired
  };

  static defaultProps = {
    isSaving: false
  };

  render() {
    const { isSaving, onClick } = this.props;
    const animateThisShit = isSaving;
    return (
      <button
        onClick={onClick}
        className={animateThisShit ? "save-animation" : ""}
      />
    );
  }
}

export default Button;