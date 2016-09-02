var constants = require("../constants"),
    initialState = require("../initialState");

module.exports = function (state, action) {
    var newstate = Object.assign({}, state); // sloppily copying the old state here, so we never mutate it
    switch (action.type) {
        case constants.TEXT_BOX_ADD:
            let name = action.name || `TextBox${newstate.incrementId}`;
            newstate.items.push(Object.assign({}, {key: newstate.incrementId, name: name}));
            newstate.incrementId++;
            return newstate;
        case constants.TEXT_BOX_EDIT:
            // preserve the previous key value
            newstate.items.splice(action.textBoxIndex, 1, Object.assign({}, newstate.items[action.textBoxIndex], action.textBoxObj));
            return newstate;
        case constants.TEXT_BOX_REMOVE:
            newstate.items.splice(action.textBoxIndex, 1);
            return newstate;
        default: return state || initialState().textBoxes;
    }
};
