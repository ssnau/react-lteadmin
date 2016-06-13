import React, {Component, PropTypes} from "react";
import pureRender from 'react-pure-render-decorator';
const {
  array,
  bool,
  func,
  number,
  object,
  string,
  any,
  arrayOf,
  element,
  instanceOf,
  node,
  objectOf,
  oneOf,
  oneOfType,
  shape
} = PropTypes;

class LTEButton extends React.Component {
  render() {
    var {text, isDisabled, isLoading, children, className = 'btn-default'} = this.props;
    if (isDisabled) className += ' disabled';
    return <button className={"btn " + className} disabled={isDisabled}> {children || text} </button>
  }
}

LTEButton.propTypes = {
  text: string,
  isDisabled: bool,
  isLoading: bool,
  className: string,
  children: element
};

module.exports = pureRender(LTEButton);
