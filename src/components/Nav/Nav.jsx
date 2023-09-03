import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="meals" style={{marginLeft: '20px'}}>Meals</Link>
        </nav>
    );
};

export default Nav;