import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// import reducers
import posts from './postsRedux';

// combine reducers
const rootReducer = combineReducers({
    posts,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;