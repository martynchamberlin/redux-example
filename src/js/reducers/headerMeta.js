var constants = require("../constants"),
    initialState = require("../initialState");

module.exports = function(state,action){
    var newstate = Object.assign({},state); // sloppily copying the old state here, so we never mutate it
    switch(action.type){
        case constants.HEADER_META:
            if (action.newHeaderMeta.description) {
                newstate.description = action.newHeaderMeta.description;
            }
            if (action.newHeaderMeta.title) {
                newstate.title = action.newHeaderMeta.title;
            }
            return newstate;
        default: return state || initialState().headerMeta;
    }
};
