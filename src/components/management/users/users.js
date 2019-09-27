import React from "react";
import { Link } from 'react-router-dom'

class Users extends React.Component {
  render() {
    return (
        <div>
      <div className="managementHomePage">
        <div className='management-body'>
        <Link to='/useraddtenant'>Create New Tenant</Link>
        </div>
      </div>
      </div>
    );
  }
}

export default Users;
