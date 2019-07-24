import { BrowserRouter as Router } from 'react-router-dom';
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