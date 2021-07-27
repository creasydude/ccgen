import React, { Fragment } from 'react';
import './Navbar.css'

const navbar = props => {
    return (
        <Fragment>
            <div>
                <ul className="nav">
                    <li><a href="s">Visual Fake Credit Card Generator</a></li>
                </ul>
            </div>
        </Fragment>
    );
}

export default navbar;