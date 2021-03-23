import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return(
        <div className="header-wraper">
            <div className="main-info">
                <h1>Milton Aguirre Developer</h1>
                <Typed
                    className="typed-text"
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                    strings={["Web Design", "Web development", "Mobile development"]}
                />
                <a href="#" className="btn-main-offer">contact me</a>
            </div>
        </div>
    )
}
export default Header;