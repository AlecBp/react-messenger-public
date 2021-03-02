import React from "react";
import UserPanel from "./UserPanel";
import Channels from "./Channels";
import DirectMessages from "./DirectMessages";
import Starred from "./Starred";

import { Menu } from "semantic-ui-react";

class SidePanel extends React.Component {
  render() {
    const { currentUser, primaryColor } = this.props;
    return (
      <Menu
        className="scrollbars"
        size="large"
        inverted
        fixed="left"
        vertical
        style={{ background: primaryColor, fontSize: "1.2em" }}
      >
        <UserPanel primaryColor={primaryColor} currentUser={currentUser}></UserPanel>
        <Starred currentUser={currentUser} />
        <Channels currentUser={currentUser} />
        <DirectMessages currentUser={currentUser} />
      </Menu>
    );
  }
}

export default SidePanel;
