import React, { Component } from 'react';

import ImageUploading from 'react-images-uploading';
import TM from '../functions/TeachableMachine';

function Main() {
    return (
        <div>
            <div>Teachable Machine Image Model</div>
            <button type="button" onclick="init()">Start</button>
            <div id="webcam-container"></div>
            <div id="label-container"></div>
        </div>
    );
}

export default Main