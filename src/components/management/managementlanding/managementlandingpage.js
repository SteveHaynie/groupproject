import React from 'react';
import './managementlandingpage.css'
// import { Link } from 'react-router-dom'
import MenuContainer from '../../menu/menucontainer';

class ManagementLandingPage extends React.Component{

// Will work on hidden/sliding navbar onClick
    render(){
        console.log(
        "this is management page"
        )
        return (
            <div className='managementHomePage'>
                <div className='body'>Management Landing Page</div>
              <MenuContainer />
             </div>
        )
    }
}

export default ManagementLandingPage;