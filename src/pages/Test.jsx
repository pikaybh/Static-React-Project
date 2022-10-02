import React, { Component } from 'react';

import Header from '../components/Header';
import Main from '../components/Main';

function Home() {
    const json = require("../data.json");
    const URL = json.foo;

    return (
        <div>
            <Header />
            <Main />
        </div>
    );
}

export default Home