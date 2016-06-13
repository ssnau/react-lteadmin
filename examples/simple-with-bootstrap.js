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
