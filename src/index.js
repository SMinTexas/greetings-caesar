import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



function Caesar(props) {
    var plaintext = props.name;
    var shiftAmount = 3;
    var cipherText = "";
    for (var i = 0; i < plaintext.length; i++) {
        var plainCharacter = plaintext.charCodeAt(i);
        console.log('plainCharacter = ' + plainCharacter);
        if (plainCharacter >= 97 && plainCharacter <= 122) {
            cipherText += String.fromCharCode((plainCharacter - 97 + shiftAmount) % 26 + 97);
        } else if (plainCharacter >= 65 && plainCharacter <= 90) {
            cipherText += String.fromCharCode((plainCharacter - 65 + shiftAmount) % 26 + 65);
        } else {
            cipherText += String.fromCharCode(plainCharacter);
        }
    }
    return <h1 > { cipherText } < /h1>;
};

const element = < Caesar name = "Steven" / > ;
ReactDOM.render(element, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();