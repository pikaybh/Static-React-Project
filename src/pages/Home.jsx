import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

function Home() {
    return (
        <div>
            <Header />
            <Link to="/test">Test</Link>
        </div>
    );
}

export default Home