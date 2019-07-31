import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import { Provider } from 'react-redux';
import store from './redux/store';
import './styles/global.scss';
import 'animate.css/animate.min.css';

const Root = () => (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);

ReactDOM.render(<Root/> , document.getElementById("root"));
