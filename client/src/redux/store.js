// import reducers
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import posts from './postsRedux';

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// combine reducers
const rootReducer = combineReducers({
    posts,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;