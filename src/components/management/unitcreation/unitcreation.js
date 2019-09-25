import React from 'react';
import { Link } from 'react-router-dom';
import "./unitcreation.css";


class UnitCreation extends React.Component{
    render(){
        return (
            <div className='ManagementHomePage'>
                {/* <div className='manage-header'>Unit Creation Page</div> */}
                <div className='navbar'>
                    <Link to='/unitcreation'>Create new unit</Link>
                    <Link to='/users'>View users</Link>
                    <Link to='/workorderview'>View work orders</Link>
                    <Link to ='/login'>Sign out</Link>
                    </div>
                <div className='UnitCreationPage'>
                    <div className='UnitAddress'>Unit Address: </div>
                    <div className='Amenities'>
                        <div className='Type'> Type: </div>
                        <div className='Bedrooms'> Bedrooms: </div>
                        <div className='Baths'>Baths:</div>
                        <div className='SqFoot'>Sq Footage:</div>
                        <div className='AnimalAllowance'> Animals Allowed: </div> 
                    </div>
                    <div className='UnitDescription'></div>
                    <div className='MonthlyRent'></div>
                    <div className='AdditionalCharges'></div>
                    
                </div>
            </div>
        )
    }
}

export default UnitCreation