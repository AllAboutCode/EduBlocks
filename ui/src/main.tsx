import * as React from 'preact';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/storage';
import {newApp} from './app';
import Page from './views/Page';

function main() {
    Blockly.HSV_VALUE = 0.9;

    const app = newApp();
    const pageDiv = getElementByIdSafe('page');

    if (!pageDiv.parentElement) {
        return;
    }

    const firebaseConfig = {
        apiKey: 'AIzaSyDsJfMGnGrAWKAGKm-sowLs1q_JfEGvF1Q',
        authDomain: 'edublocks-38d74.firebaseapp.com',
        databaseURL: 'https://edublocks-38d74.firebaseio.com',
        projectId: 'edublocks-38d74',
        storageBucket: 'edublocks-38d74.appspot.com',
        messagingSenderId: '1073955966212',
        appId: '1:1073955966212:web:b828491fbc775a2130d451',
        measurementId: 'G-ELDZXSL916',
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();


    React.render(<Page app={app}/>, pageDiv.parentElement, pageDiv);

    function getElementByIdSafe(id: string): HTMLElement {
        const element = document.getElementById(id);

        if (!element) {
            throw new Error(`Could not find element with "${id}"`);
        }

        return element;
    }
}


main();
