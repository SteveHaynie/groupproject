import React from 'react'


class MenuButton extends React.Component {
    render(){
        return (
            <button className='menu-button' onClick={this.props.handleClickMenu}>Menu</button>
        )
    }
}

export default MenuButton