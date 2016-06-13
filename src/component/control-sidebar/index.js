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

class LTEControlSideBar extends Component {
  render() {
    return (
      <aside className="control-sidebar control-sidebar-dark">
       {this.props.children}
      </aside>
    )
  }
}

LTEControlSideBar.defaultProps = {
  theme: 'dark' // oneOf('light', 'dark')
}

class LTEControlSideBarTabGroup extends Component {
  render() {
    return (
      <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
        {this.props.children}
      </ul>
    )
  }
}

class LTEControlSideBarTab extends Component {
  render() {
    var {
      isActive,
      iconName='wrench'
    } = this.props;
    return (
      <li className={isActive ? ' active' : ''}>
        <a href="javascript:void(0)">
          <i className={"fa fa-" + iconName}></i>
        </a>
      </li>
    )
  }
}

class LTEControlSideBarTabContent extends Component {
  render() {
    return (
      <div className="tab-content">
        {this.props.children}
      </div>
    )
  }
}


LTEControlSideBar.TabGroup = LTEControlSideBarTabGroup;
LTEControlSideBar.Tab = LTEControlSideBarTab;
LTEControlSideBar.TabContent = LTEControlSideBarTabContent;

module.exports = LTEControlSideBar;
