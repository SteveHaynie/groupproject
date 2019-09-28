import React from 'react'


class TenantMenuButton extends React.Component {
    render(){
        return (
            <button className='menu-button' onClick={this.props.handleClickTenantMenu}>Menu</button>
        )
    }
}

export default TenantMenuButton