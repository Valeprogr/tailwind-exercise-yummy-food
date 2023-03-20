import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div>
                <nav>
                    <div>
                        <h1 className='font-bold uppercase p-4 border-b border-gray-100'>
                            <a  href='/'>Yummy Food</a></h1>
                    </div>
                    <ul>
                        <li className='text-gray-700 font-bold'><a href='#'><span>Home</span></a></li>
                        <li><a href='#'><span>About</span></a></li>
                        <li><a href='#'><span>Contanct</span></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
