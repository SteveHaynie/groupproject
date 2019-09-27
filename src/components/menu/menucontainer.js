import React, { Component } from 'react'
import MenuButton from './menubutton'
import Menu from './menu'


class MenuContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible: false
        }

        this.toggleMenu = this.toggleMenu.bind(this)
        this.handleClickMenu = this.handleClickMenu.bind(this)

    }
    toggleMenu(){
        this.setState({visible: !this.state.visible})
    }

    handleClickMenu(event){
        this.toggleMenu()
        event.stopPropagation()
    }

    render(){
        return (
            <div className = "menucontainer">
                <MenuButton handleClickMenu={this.handleClickMenu} />
                <Menu handleClickMenu={this.handleClickMenu}
                menuVisibility={this.state.visible}/>
           </div>
        )
    }
}

export default MenuContainer