import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div>
                <nav>
                    <div>
                        <h1><a href='/'>Yummy Food</a></h1>
                    </div>
                    <ul>
                        <li><a href='#'><span>Home</span></a></li>
                        <li><a href='#'><span>About</span></a></li>
                        <li><a href='#'><span>Contanct</span></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
