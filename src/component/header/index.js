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
      iconName="flag-o", 
      superscript='100', 
      labelType="success",
      content="",
      href='javascript:void(0)',
      onClick=noop,
      showDropDown=false,
      rootNodeClassName="",
      children
    } = this.props;

    if (children) {
      if (children.type !== LTEHeaderDropDown && children.type !== LTEHeaderDropDownProfile) throw new Error('the only children of LTEHeaderItem should be a LTEHeaderDropDown instance');
    }

    return (
      <li className={"dropdown" + (showDropDown ? ' open' : '') + ' ' + rootNodeClassName}>
        <a className="dropdown-toggle" href={href}  onClick={onClick} aria-expanded={(showDropDown ? 'true' : 'false')} data-toggle="dropdown">
          {iconName ? <i className={"fa fa-" + iconName}></i> : null}
          {/* if number > 0, then show the number */}
          {superscript ? <span className={"label label-" + labelType}>{superscript}</span> : null}
          {content}
        </a>
        {children} {/*should be a LTEHeaderDropDown instance*/}
      </li>
    )
  }
}

class DropDownLoadingMarkup extends Component {
  render() {
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

class LTEHeaderDropDownContainer extends Component {
  componentDidMount() {
    var {scrollProps} = this.props;
    if (typeof $ === 'function' && $.css && $.ajax) {
      $(this.rootNode).slimScroll(Object.assign(scrollProps, {
        height: scrollProps.height || 200,
      }));
    } else {
      console.log('LTEHeaderDropDownContainer need JQuery SlimScroll plugin');
    }
  }
  render() {
    var {
      children,
    } = this.props;
    return (
        <ul className="menu" ref={node => this.rootNode = node}>
          {children}
        </ul>
    ); 
  }
}


LTEHeaderDropDownContainer.defaultProps = {
  scrollProps: {
    height: 200,
    size: 5
  }
}

class LTEHeaderDropDownMessage extends Component {
  render() {
   var {
     rootNodeClassName = '',
     avatar = '//s0.meituan.net/bs/file/?f=delivr:lte-admin/v2.3.3/dist/img/user2-160x160.jpg@f559e05',
     name   = 'Admin',
     time   = '5 mins',
     children
   } = this.props;
    
    return (
      <li className={rootNodeClassName}>
        <a href="#">
          <div className="pull-left">
            <img src="//s0.meituan.net/bs/file/?f=delivr:lte-admin/v2.3.3/dist/img/user2-160x160.jpg@f559e05" className="img-circle dropdown-img" alt="User Image" />
          </div>
          <h4>
            {name}
            <small><i className="fa fa-clock-o"></i> {time}</small>
          </h4>
          <p>{children}</p>
        </a>
      </li>
    )
  }
}

class LTEHeaderDropDownItem extends Component {
  render() {
    var {
      children,
      rootNodeClassName,
      href,
      iconName,
      iconColor,
    } = this.props;
    return (
      <li className={rootNodeClassName}>
        <a href={href}>
          { iconName ? <i className={`fa fa-${iconName} text-${iconColor}`}></i> : null}
          {children}
        </a>
      </li>
    );
  }
}
LTEHeaderDropDownItem.defaultProps = {
  href: 'javascript:void(0)',
  rootNodeClassName: '',
  iconName: '',
  iconColor: 'blue'
}

class LTEHeaderDropDownProgressItem extends Component {
  render() {
    var {
      children,
      rootNodeClassName,
      href,
      progress,
      barColor,
    } = this.props;

    var progressText = Math.round(parseFloat(progress) * 100) + '%';

    return (
      <li className={rootNodeClassName}>
        <a href={href}>
          <h3>
            {children}
            <small className="pull-right">{progressText}</small>
          </h3>
          <div className="progress xs">
            <div className={"progress-bar progress-bar-" + barColor} style={{width: progressText}}>
              <span className="sr-only">{progressText} Complete</span>
            </div>
          </div>
        </a>
      </li>
    )
  }
}

LTEHeaderDropDownProgressItem.defaultProps = {
  progress: 0.5,
  barColor: 'aqua'
}

// TODO: revise
class LTEHeaderDropDownProfile extends Component {
  render() {
    var {
      isLoading, 
      avatarURL,
      name,
      subtitle,
      children
    } = this.props;
    if (isLoading) return <ul className="dropdown-menu"><DropDownLoadingMarkup /></ul>;
    return (
      <ul className="dropdown-menu">
        <li className="user-header">
          <img src={avatarURL} className="img-circle" alt="User Image" />
          <p>
            {name}
            <small>{subtitle}</small>
          </p>
        </li>
        <li className="user-body">
          <div className="row">
            <div className="col-xs-4 text-center">
              <a href="#">Followers</a>
            </div>
            <div className="col-xs-4 text-center">
              <a href="#">Sales</a>
            </div>
            <div className="col-xs-4 text-center">
              <a href="#">Friends</a>
            </div>
          </div>
        </li>
        <li className="user-footer">
          <div className="pull-left">
            <a href="#" className="btn btn-default btn-flat">Profile</a>
          </div>
          <div className="pull-right">
            <a href="#" className="btn btn-default btn-flat">Sign out</a>
          </div>
        </li>
      </ul>
    );
  }
}

LTEHeaderDropDownProfile.defaultProps = {
  avatarURL: 'http://s1.meituan.net/bs/file/?f=delivr:lte-admin/v2.3.3/dist/img/user2-160x160.jpg@f559e05',
  name: 'Alexander Pierce - Web Developer',
  subtitle: 'Member since Nov. 2012'
}

LTEHeader.Item = LTEHeaderItem;
LTEHeader.DropDown = LTEHeaderDropDown;
LTEHeader.DropDownContainer = LTEHeaderDropDownContainer;
LTEHeader.DropDownMessage = LTEHeaderDropDownMessage;
LTEHeader.DropDownItem = LTEHeaderDropDownItem;
LTEHeader.DropDownProgressItem = LTEHeaderDropDownProgressItem;
LTEHeader.DropDownProfile = LTEHeaderDropDownProfile;

LTEHeader.defaultProps = {
  title: "Admin LTE"
};

module.exports = LTEHeader;
