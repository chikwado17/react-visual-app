import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Koala from './Koala';
import * as serviceWorker from './serviceWorker';






const colorsObject = {
    white: '#ffffff',
    lightGray:'#a6becf',
    darkGray: '#819caf',
    brown: '#be845f',
    navy:'#27354a'

}



ReactDOM.render(<Koala colors={colorsObject} />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
