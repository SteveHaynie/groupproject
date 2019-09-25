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
                    <div className='UnitAddress'>Unit Address:
                        <input />
                     </div>
                    <div className='Amenities'>Unit Description:
                        <div className='Type'> Type:
                            <select>
                                <option>Basement</option>
                                <option>Attic</option>
                                <option>Duplex</option>
                                <option>Multiplex</option>
                                <option>Complex</option>
                                <option>Shed</option>
                                <option>Nuclear Fall Out Shelter</option>

                            </select>
                         </div>
                        <div className='Bedrooms'> Bedrooms: 
                             <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className='Baths'>Baths:
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                        <div className='SqFoot'>Sq Footage:
                            <input />                        
                        </div>
                        <div className='AnimalAllowance'> Animals Allowed:
                            <select>
                                <option>Please Select an Option</option>                                
                                <option>True</option>
                                <option>False</option>
                            </select>
                         </div> 
                    </div>
                    <div className='UnitDescription'>
                    <input
                        placeholder="Description"
                    />
                    </div>
                    <div className='MonthlyRent'></div>
                    <div className='AdditionalCharges'></div>
                    
                </div>
            </div>
        )
    }
}

export default UnitCreation