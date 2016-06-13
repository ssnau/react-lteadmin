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
const void0 = "javascript:void(0)";

class LTEAside extends Component {
  render() {
    var {
      rootNodeClassName = '',
    } = this.props;

    return (
      <div className={"main-sidebar " + rootNodeClassName}>
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
      rootNodeClassName = '',
    } = this.props;
    return (
      <div className={"user-panel " + rootNodeClassName}>
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
      rootNodeClassName = '',
      inputProps,
      formProps,
      onButtonClick
    } = this.props;
    return (
      <form {...formProps} className={"sidebar-form " + rootNodeClassName}>
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

class LTEAsideMenuList extends Component {
  render() {
    var {
      rootNodeClassName = '',
      children
    } = this.props;
    return (
      <ul className={"sidebar-menu " + rootNodeClassName}>
        {children}
      </ul>
    )
  }
}

class LTEAsideMenuHeader extends Component {
  render() {
    var { 
      rootNodeClassName = '',
      children
    } = this.props;
    return <li className={"header " + rootNodeClassName}>{children || 'HEADER'}</li>;
  }
}

class LTEAsideMenuTree extends Component {
  render() {
    var {
      isActive,
      iconName,
      iconColor,
      rightIconElmemet,
      rootNodeClassName,
      text,
      children
    } = this.props;
    var activeCxName = isActive ? ' active ' : ' '; 
    return (
      <li className={"treeview " + activeCxName + ' ' + rootNodeClassName}>
        <a href={void0}>
          <i className={"fa fa-" + iconName + " text-" + iconColor}></i>
          <span>{text}</span>
          {rightIconElmemet || <i className="fa fa-angle-left pull-right"></i>}
        </a>
        <ul className="treeview-menu">
          {children}
        </ul>
      </li>
    )
  }
}

LTEAsideMenuTree.defaultProps = {
  iconName: 'circle-o',
  iconColor: 'not-exists',
  text: 'menu',
  rootNodeClassName: '',
  rightIconElmemet: null
};

class LTEAsideMenuItem extends Component {
  render() {
    var {
      text,
      linkProps,
      isActive,
      iconName,
      iconColor,
      rootNodeClassName,
      children
    } = this.props;
    var activeCxName = isActive ? ' active ' : ' '; 

    return (
      <li className={activeCxName + " " + rootNodeClassName}>
        <a {...linkProps}>
          <i className={"fa fa-" + iconName + " text-" + iconColor}></i>
          {children}
        </a>
      </li>
    )
  }
}

LTEAsideMenuItem.defaultProps = {
  text: "item",
  linkProps: {
    href: "#"
  },
  iconName: 'circle-o',
  iconColor: 'not-exists',
  rootNodeClassName: ''
};

class LTEAsideMenuItemLabel extends Component {
  render() {
    var {
      children,
      bgColor
    } = this.props
    return (
      <small className={`label bg-${bgColor} pull-right`}>{children}</small>
    )
  }
}

LTEAsideMenuItemLabel.defaultProps = {
  bgColor: 'blue',
};

LTEAside.UserPanel = LTEAsideUserPanel;
LTEAside.SearchBar = LTEAsideSearchBar;
LTEAside.MenuList = LTEAsideMenuList;
LTEAside.MenuHeader = LTEAsideMenuHeader;
LTEAside.MenuTree = LTEAsideMenuTree;
LTEAside.MenuItem = LTEAsideMenuItem;
LTEAside.MenuItem.Label = LTEAsideMenuItemLabel;

module.exports = LTEAside;
