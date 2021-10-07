import React, { Component } from "react";
import Menu from "../../components/Navigation/Menu";
import classes from "./Layout.module.css";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import { connect } from "react-redux";

class Layout extends Component {
  state = {
    menu: false,
  };

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };

  menucloseHandler = () => {
    this.setState({ menu: false });
  };

  render() {
    return (
      <div className={classes.Layout}>
        <Drawer
          isOpen={this.state.menu}
          isAuthenticated={this.props.isAuthenticated}
          onClose={this.menucloseHandler}
        />
        <Menu onToggle={this.toggleMenuHandler} isOpen={this.state.menu} />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.token,
  };
};

export default connect(mapStateToProps)(Layout);
