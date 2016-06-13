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

function noop(){}

class LTEAside extends Component {
  render() {
    return (
      <div className="main-sidebar">
        <section className="sidebar">
           {this.props.children}
        </section>
      </div>
    );
  }
}

class LTEAsideUserPanel extends Component {
  render() {
    var {
      name,
      statusText,
      statusIcon,
      imgProps,
      linkProps,
    } = this.props;
    return (
      <div className="user-panel">
        <div className="pull-left image">
          <img {...imgProps} className="img-circle" alt="User Image" />
        </div>
        <div className="pull-left info">
          <p> {name} </p>
          <a {...linkProps}><i className={`fa fa-${statusIcon} text-success`}></i> {statusText}</a>
        </div>
      </div>
    );
  }
}

LTEAsideUserPanel.defaultProps = {
  imgProps: {
    src: 'http://s1.meituan.net/bs/file/?f=delivr:lte-admin/v2.3.3/dist/img/user2-160x160.jpg@f559e055bc'
  },
  linkProps: {
    href: "javascript:void(0)"
  },
  name: "Alexander Pierce",
  statusText: "online",
  statusIcon: "circle",
}

class LTEAsideSearchBar extends Component {
  render() {
    var {
      inputProps,
      formProps,
      onButtonClick
    } = this.props;
    return (
      <form {...formProps} className="sidebar-form">
        <div className="input-group">
          <input type="text" className="form-control" {...inputProps} />
          <span className="input-group-btn">
            <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
            </button>
          </span>
        </div>
      </form>
    )
  }
}

LTEAsideSearchBar.defaultProps = {
  inputProps: {
    name: 'q',
    placeholder: 'Search...',
  },
  formProps: {
    action: "#",
    method: "get",
  }
};

LTEAside.LTEAsideUserPanel = LTEAsideUserPanel;
LTEAside.LTEAsideSearchBar = LTEAsideSearchBar;


module.exports = LTEAside;
