import React from "react";
import "./menu.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { updateUser } from "../../redux/actions.js";

class Menu extends React.Component  {


  async handleLogout() {
    await axios.get("/api/logout").then(response => {
      if (response.data === "successfully logged out") {
        this.props.updateUser({});
        this.props.history.push("/login");
      }
    });
  }
  componentDidUpdate(prevProps) {
    
    if(!prevProps.menuVisibility && this.props.menuVisibility) {
      window.addEventListener('click', this.handleEvent )
    }
    if(prevProps.menuVisibility && !this.props.menuVisibility) {
      window.removeEventListener('click', this.handleEvent)
    }

  }


 handleEvent = async(event) => {
if(event.target.className !== "show" && event.target.className !== "menubutton"){
  this.props.handleClickMenu(event)
}


   
  

}

  render() {
    
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div id="popout-menu" className={visibility}>
        <button
          className="menubutton"
          onClick={() => this.props.history.push("/unitcreation")}
        >
          Create New Unit
        </button>
        <button
          className="menubutton"
          onClick={() =>
            this.props.history.push(`/users/${this.props.user.id}`)
          }
        >
          Users
        </button>
        <button
          className="menubutton"
          onClick={() => this.props.history.push("/workorderview")}
        >
          Work Orders
        </button>

        <button className="menubutton" onClick={() => this.handleLogout()}>
          Sign out
        </button>
      </div>
    );
  }
}



const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(
  mapStateToProps,
  { updateUser }
)(withRouter(Menu));
