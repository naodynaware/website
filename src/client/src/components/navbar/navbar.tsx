import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/ui/navbar.scss';

export class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <div className='navbar-contents'>
                    <Link to="/">
                        <h1>dynaware</h1>
                    </Link>
                </div> 
            </nav>
        )
    }
}