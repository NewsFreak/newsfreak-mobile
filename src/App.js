import React, { Component } from "react"
import { HashRouter } from "react-router-dom"
import HeaderContainer from "containers/HeaderContainer"
import SidebarContainer from "containers/SidebarContainer"
import Routes from "navigation/Routes"
import MenuEntries from "navigation/MenuEntries"
class App extends Component {
  state = {
    sidebarOpen: false,
  }
  toggleSidebar = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen,
    })
  }
  render() {
    return (
      <HashRouter>
        <React.Fragment>
          <HeaderContainer onClick={this.toggleSidebar} />
          <SidebarContainer
            open={this.state.sidebarOpen}
            onClick={this.toggleSidebar}
          >
            <MenuEntries onSelect={this.toggleSidebar} />
          </SidebarContainer>
          <div style={{ height: "90vh", overflow: "scroll" }}>
            <Routes />
          </div>
        </React.Fragment>
      </HashRouter>
    )
  }
}

export default App
