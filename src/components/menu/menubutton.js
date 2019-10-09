import React from 'react'
import { Collapse } from 'react-burgers';
import "./menu.css";


class MenuButton extends React.Component {
    render(){
        return (
            
            <Collapse color='#8fb8da' active={this.props.active} className='hamburger' onClick={this.props.handleClickMenu}>Menu</Collapse>
            
        )
    }
}

export default MenuButton