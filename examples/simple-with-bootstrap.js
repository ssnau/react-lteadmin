import React, {Component} from "react";
import {render} from "react-dom";
import Button from "react-lteadmin2/src/component/button";
import Header from "react-lteadmin2/src/component/header";
import Aside from "react-lteadmin2/src/Component/aside";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <Header.LTEHeaderItem>
            <Header.LTEHeaderDropDown isLoading={true}>
              <li>hello </li>
              <li>jack </li>
              <li>hello </li>
            </Header.LTEHeaderDropDown>
          </Header.LTEHeaderItem>
        </Header>
        <Aside>
          <Aside.LTEAsideUserPanel />
          <Aside.LTEAsideSearchBar />
        </Aside>
      </div>
    );
  }
}

document.body.className = "skin-blue sidebar-mini";
var appNode = document.getElementById('app');
appNode.className = 'wrapper';
appNode.style = 'overflow: visible'; // i dont know why i have to do this
render(<App />, appNode);

var rootNode = document.body.querySelector('div');
var componentNode = document.getElementById('__component-content');

rootNode.parentNode.replaceChild(componentNode, rootNode);
