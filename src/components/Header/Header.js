import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render(){
        return (
            <div className='header-main-back'>
                <div className='header-max-width'>
                    <div className='header-title-logo'>
                        <img src={'https://vignette.wikia.nocookie.net/ifunny-app/images/c/c9/Logo.png/revision/latest?cb=20160107135758'} alt='logo'/>
                        <div>iFunny</div>
                    </div>
                    <div className='header-search-bar'>
                        {/* <div><img src={'https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png'} alt='search icon'/></div> */}
                        <div><input placeholder='search'/></div>
                    </div>
                    <div className='header-links'>
                        <div>about</div>
                        <div>store</div>
                        <div>app</div>
                        <div>memoteka</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;