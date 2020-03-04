import React from 'react';
import Cart from '../Cart';
import Shop from '../Shop';

function Home(){

    return (
        <div className="container">
            <Shop />
            <Cart />
        </div>
    );
}

export default Home;