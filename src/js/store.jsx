import initialState from './initialState';
var Redux = require('redux');
var headerMetaReducer = require('./reducers/headerMeta');
var textBoxReducer = require('./reducers/textBox');

var rootReducer = Redux.combineReducers({
    headerMeta: headerMetaReducer,
    textBoxes: textBoxReducer
});

module.exports = (Redux.createStore)(rootReducer, initialState());
