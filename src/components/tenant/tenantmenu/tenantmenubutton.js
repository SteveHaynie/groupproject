import React from 'react';
import { Collapse } from 'react-burgers';


class TenantMenuButton extends React.Component {
    render(){
        return (
            <Collapse color='#8fb8da' active={this.props.active}  onClick={this.props.handleClickTenantMenu}>Menu</Collapse>
        )
    }
}

export default TenantMenuButton