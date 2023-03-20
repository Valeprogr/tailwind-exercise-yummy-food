import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <main>
                <div>
                    <a href='#'>Log in</a>
                    <a href='#'>Sign up</a>
                </div>
                <header>
                    <h2>Recipes</h2>
                    <h3>For cuties</h3>
                </header>

                <div>
                    <h4>Latest Recipes</h4>
                    <div>
                        {/**Qua verranno importate  le cards */}
                    </div>
                    <h4>Most Popular</h4>
                    <div>
                        {/**Qua verranno importate le cards */}
                    </div>

                    <div>
                        <div>Load more</div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;
