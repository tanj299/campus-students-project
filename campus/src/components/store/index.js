// ************************************** STORE **************************************

// combineReducers = takes all reducers, and place them in one big object
// where each key of that object is the name of the reducer, and each value 
// is the output of the reducer function 

// applyMiddleware = any middle ware from my redux store (thunk, logger, etc.) 
// literally applies, the middleware or incorporates into the app 

// createStore = literally creates the store - just one big JS object 

// createLogger = logs previous state, dispatch action, updated state 
// see dan abramov's tutorial 
// for developing purpose

// thunkMiddlware = allows us to create action creators; instead of 
// returning objects, they return functions 

// redux-thunk: redux store can only handle plain objects 
// if the content we dispatch to the store is a function, aka thunk, 
// thunk middleware will hijack that thunk, invoke it, and dispatch it to store

// composeWithDevTools = explores state, actions. It's on Google chrome
// for developing purpose 

// line 8, import * = import everything from ../reducers file

// store = createStore (reducerFunction, middlewareFunction)

// Necessities and accessories for constructing our Redux store;
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

// Individual reducers altogether under an alias;
import * as reducers from '../../reducers';

// Construct our Redux store;
const rootReducer = combineReducers(reducers);
const logger = createLogger({ collapsed: true });
const middleware = (applyMiddleware(thunkMiddleware, logger));
const store = createStore(rootReducer, middleware);

// Export our store by default, which will be provided to and injected within our entire application;
export default store;
