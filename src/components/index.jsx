import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';

import reducer from "./reducer";
import App from './App'
import { createStore } from "redux";



let store = createStore(reducer)
//const createstorewithmiddleware = createStore(yourReducer, applyMiddleware(promise))


const rootElement = document.getElementById("root");
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);