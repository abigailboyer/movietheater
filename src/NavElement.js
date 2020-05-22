import React from 'react';
import {NavLink} from 'react-router-dom';

class NavElement extends React.Component {

    constructor(props) {
        super(props)
        this.navClick = this.navClick.bind(this)

        this.imgUrl = this.props.imgUrl
        this.imgAlt = this.props.imgAlt
        this.imgName = this.props.imgName
        this.activeUrl = this.props.activeUrl
        this.state = {
            imgUrl: this.imgUrl,
            activeUrl: this.activeUrl,
            imgAlt: this.imgAlt,
            imgName: this.imgName,
            itemSelected: false
        }
    }

    navClick() {
        this.setState(prevState => {
          return {
            itemSelected: !prevState.itemSelected
          }
        })
        console.log(this.state)
      }

    render() {
       let imgSrc = this.state.imgUrl;
        return (
            <li className='nav-list-item'>
                <NavLink 
                    to={this.props.linkDest}
                    isActive={(match, location) => {
                        if(match) {
                            imgSrc = this.state.activeUrl
                            console.log(imgSrc);
                        }
                    }}
                >
                    <button onClick={() => this.navClick()} className='nav-list-button'>
                        <img src={imgSrc} alt={this.state.imgAlt} className='nav-list-image' />
                    </button>
                </NavLink>
            </li>
        )
    }
}

export default NavElement