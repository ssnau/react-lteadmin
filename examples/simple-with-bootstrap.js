import React, {Component} from "react";
import {render} from "react-dom";
import Button from "react-lteadmin/src/component/button";
import Header from "react-lteadmin/src/component/header";
import Aside from "react-lteadmin/src/Component/aside";
import ControlSideBar from "react-lteadmin/src/Component/control-sidebar"

class App extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <Header.Item rootNodeClassName="messages-menu" iconName="envelope-o" superscript="4">
            <Header.DropDown>
              <li className="header">You have 4 messages</li>
              <li>
                <Header.DropDownContainer>
                  <Header.DropDownMessage>Why not buy a new awesome theme?</Header.DropDownMessage>
                  <Header.DropDownMessage>Why not buy a new awesome theme?</Header.DropDownMessage>
                  <Header.DropDownMessage>Why not buy a new awesome theme?</Header.DropDownMessage>
                  <Header.DropDownMessage>Why not buy a new awesome theme?</Header.DropDownMessage>
                </Header.DropDownContainer>
              </li>
              <li className="footer"><a href="#">See All Messages</a></li>
            </Header.DropDown>
          </Header.Item>
          <Header.Item rootNodeClassName="notifications-menu" iconName="bell-o" superscript="10">
            <Header.DropDown>
              <li className="header">You have 10 notifications</li>
              <li>
                <Header.DropDownContainer>
                  <Header.DropDownItem iconName="users" iconColor="aqua">5 new members joined today</Header.DropDownItem>
                  <Header.DropDownItem iconName="warning" iconColor="yellow">Very long description here that may not fit into the page and may cause design problems </Header.DropDownItem>
                  <Header.DropDownItem iconName="users" iconColor="red">5 new members joined</Header.DropDownItem>
                  <Header.DropDownItem iconName="shopping-cart" iconColor="green">25 sales made</Header.DropDownItem>
                  <Header.DropDownItem iconName="user" iconColor="red">You changed your username</Header.DropDownItem>
                </Header.DropDownContainer>
              </li>
              <li className="footer"><a href="#">View all</a></li>
            </Header.DropDown>
          </Header.Item>
          <Header.Item rootNodeClassName="tasks-menu" iconName="flag-o" superscript="9" labelType="danger">
            <Header.DropDown>
              <li className="header">You have 9 tasks</li>
              <li>
                <Header.DropDownContainer>
                  <Header.DropDownProgressItem progress={0.2} barColor='aqua'>Design some buttons</Header.DropDownProgressItem>
                  <Header.DropDownProgressItem progress={0.4} barColor='green'>Create a nice theme</Header.DropDownProgressItem>
                  <Header.DropDownProgressItem progress={0.6} barColor='red'>Some task I need to do</Header.DropDownProgressItem>
                  <Header.DropDownProgressItem progress={0.8} barColor='yellow'>Make beautiful transitions</Header.DropDownProgressItem>
                </Header.DropDownContainer>
              </li>
              <li className="footer"><a href="#">View all</a></li>
            </Header.DropDown>
          </Header.Item>
          <Header.Item rootNodeClassName="user-menu" iconName="" superscript="" content={<div><img src="http://s1.meituan.net/bs/file/?f=delivr:lte-admin/v2.3.3/dist/img/user2-160x160.jpg@f559e05" className="user-image" />Alexander Pierce</div>} >
            <Header.DropDownProfile />
          </Header.Item>
          <Header.Item iconName="gears" superscript="">
            <Header.DropDown>
            </Header.DropDown>
          </Header.Item>
        </Header>
        <Aside>
          <Aside.UserPanel />
          <Aside.SearchBar />
          <Aside.MenuList>
            <Aside.MenuHeader>MAIN NAVIGATION</Aside.MenuHeader>
            <Aside.MenuTree isActive={true} text="Dashboard" iconName="dashboard">
              <Aside.MenuItem> Dashboard v1 </Aside.MenuItem>
              <Aside.MenuItem> Dashboard v2 </Aside.MenuItem>
            </Aside.MenuTree>

            <Aside.MenuTree isActive={true} text="Layout Options" iconName="files-o" rightIconElmemet={<Aside.MenuItem.Label>4</Aside.MenuItem.Label>}>
              <Aside.MenuItem> Top Navigation </Aside.MenuItem>
              <Aside.MenuItem> Boxed </Aside.MenuItem>
              <Aside.MenuItem> Fixed </Aside.MenuItem>
              <Aside.MenuItem> Collapsed Sidebar </Aside.MenuItem>
            </Aside.MenuTree>

            <Aside.MenuItem iconName="th"> 
              Widgets 
              <Aside.MenuItem.Label bgColor="green">new</Aside.MenuItem.Label>
            </Aside.MenuItem>

            <Aside.MenuTree isActive={true} text="Charts" iconName="pie-chart">
              <Aside.MenuItem> ChartJS        </Aside.MenuItem>
              <Aside.MenuItem> Morris         </Aside.MenuItem>
              <Aside.MenuItem> Flot           </Aside.MenuItem>
              <Aside.MenuItem> Inline charts  </Aside.MenuItem>
            </Aside.MenuTree>

            <Aside.MenuTree isActive={true} text="UI Elements" iconName="laptop">
              <Aside.MenuItem> General   </Aside.MenuItem>
              <Aside.MenuItem> Icons     </Aside.MenuItem>
              <Aside.MenuItem> Buttons   </Aside.MenuItem>
              <Aside.MenuItem> Sliders   </Aside.MenuItem>
              <Aside.MenuItem> Timelines </Aside.MenuItem>
              <Aside.MenuItem> Sliders   </Aside.MenuItem>
              <Aside.MenuItem> Modals    </Aside.MenuItem>
            </Aside.MenuTree>

            <Aside.MenuTree isActive={true} text="Forms" iconName="editor">
              <Aside.MenuItem> General Elements   </Aside.MenuItem>
              <Aside.MenuItem> Advanced Elements  </Aside.MenuItem>
              <Aside.MenuItem> Editors            </Aside.MenuItem>
            </Aside.MenuTree>

            <Aside.MenuTree isActive={true} text="Tables" iconName="table">
              <Aside.MenuItem> Simple Tables   </Aside.MenuItem>
              <Aside.MenuItem> Date Tables  </Aside.MenuItem>
            </Aside.MenuTree>

            <Aside.MenuTree isActive={true} text="Tables" iconName="table">
              <Aside.MenuItem> Simple Tables   </Aside.MenuItem>
              <Aside.MenuItem> Date Tables  </Aside.MenuItem>
            </Aside.MenuTree>

            <Aside.MenuItem isActive={true} iconName="calendar">
              Calendar
              <Aside.MenuItem.Label bgColor="red">3</Aside.MenuItem.Label>
            </Aside.MenuItem>

            <Aside.MenuItem isActive={true} iconName="envelope">
              Mailbox
              <Aside.MenuItem.Label bgColor="yellow">12</Aside.MenuItem.Label>
            </Aside.MenuItem>

            <Aside.MenuTree isActive={true} text="Examples" iconName="folder">
              <Aside.MenuItem> Invoice     </Aside.MenuItem>
              <Aside.MenuItem> Profile     </Aside.MenuItem>
              <Aside.MenuItem> Login       </Aside.MenuItem>
              <Aside.MenuItem> Register    </Aside.MenuItem>
              <Aside.MenuItem> Lockscreen  </Aside.MenuItem>
              <Aside.MenuItem> 404 Error   </Aside.MenuItem>
              <Aside.MenuItem> 500 Error   </Aside.MenuItem>
              <Aside.MenuItem> Blank Page  </Aside.MenuItem>
            </Aside.MenuTree>

            <Aside.MenuTree isActive={true} text="Multilevel" iconName="share">
              <Aside.MenuItem> Level One </Aside.MenuItem>
              <Aside.MenuTree isActive={true} text="Level One">
                <Aside.MenuItem> Level Two </Aside.MenuItem>
                <Aside.MenuTree isActive={true} text="Level Two">
                  <Aside.MenuItem> Level Three </Aside.MenuItem>
                  <Aside.MenuItem> Level Three </Aside.MenuItem>
                </Aside.MenuTree>
              </Aside.MenuTree>
            </Aside.MenuTree>

            <Aside.MenuItem iconName="book"> Documentation  </Aside.MenuItem>

            <Aside.MenuHeader>LABELS</Aside.MenuHeader>

            <Aside.MenuItem  iconColor="red"> Important    </Aside.MenuItem>
            <Aside.MenuItem  iconColor="yellow"> Warning      </Aside.MenuItem>
            <Aside.MenuItem  iconColor="blue"> Information  </Aside.MenuItem>

          </Aside.MenuList>
        </Aside>
        <ControlSideBar>
          <ControlSideBar.TabGroup>
            <ControlSideBar.Tab iconName="wrench" />
            <ControlSideBar.Tab iconName="home" />
            <ControlSideBar.Tab iconName="gears" />
          </ControlSideBar.TabGroup>
          <ControlSideBar.TabContent>
            {/* TODO: wait for form components */}
            <h4 className="control-sidebar-heading">Layout Options</h4>
          </ControlSideBar.TabContent>
        </ControlSideBar>
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
