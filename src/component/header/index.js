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

function getToggleButton(onToggle) {
  if (!onToggle) return null;
  return (
    <a href="#" className="sidebar-toggle" role="button">
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </a>
  );
}

class LTEHeader extends Component {
  render() {
    var {title, onToggle, menuItems, children} = this.props;
    return (
      <header className="main-header">
        <a href="#" className="logo">
          <span className="logo-lg">AdminLTE</span>
        </a>
        <nav className="navbar navbar-static-top">
          {getToggleButton(onToggle)}
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              {children}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

class LTEHeaderItem extends Component {
  render() {
    var {
      iconName="fa-flag-o", 
      number='100', 
      labelType="success",
      text="",
      href='javascript:void(0)',
      onClick="",
      showDropDown=false,
      children
    } = this.props;

    if (children) {
      if (children.type !== LTEHeaderDropDown) throw new Error('the only children of LTEHeaderItem should be a LTEHeaderDropDown instance');
    }

    return (
      <li className={"dropdown" + (showDropDown ? ' open' : '')}>
        <a className="dropdown-toggle" href={href}  onClick={onClick} aria-expanded={(showDropDown ? 'true' : 'false')} data-toggle="dropdown">
          <i className={"fa " + iconName}></i>
          {/* if number > 0, then show the number */}
          {number ? <span className={"label label-" + labelType}>{number}</span> : null}
          {text}
        </a>
        {children} {/*should be a LTEHeaderDropDown instance*/}
      </li>
    )
  }
}

function DropDownLoadingMarkup() {
  return (
    <li>
      <div className="lte-spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
      </div>
    </li>
  );
}

class LTEHeaderDropDown extends Component {
  render() {
    var {isLoading, children} = this.props;
    if (isLoading) return <ul className="dropdown-menu"><DropDownLoadingMarkup /></ul>;
    return (
      <ul className="dropdown-menu">
        {children}
      </ul>
    );
  }
}

LTEHeader.LTEHeaderItem = LTEHeaderItem;
LTEHeader.LTEHeaderDropDown = LTEHeaderDropDown;

LTEHeader.defaultProps = {
  title: "Admin LTE"
};

module.exports = LTEHeader;
