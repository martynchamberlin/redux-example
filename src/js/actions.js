/*
 This module contains action creators. They are functions which will return an object describing the actions.
 These actions are imported by Redux-aware components who need them
 */

var constants = require("./constants");

module.exports = {
    updateHeaderMeta: function (newHeaderMeta) {
        return { type: constants.HEADER_META, newHeaderMeta: newHeaderMeta };
    },
    addTextbox: function (name) {
        return { type: constants.TEXT_BOX_ADD, name: name };
    },
    editTextBox: function (textBoxObj, textBoxIndex) {
        return { type: constants.TEXT_BOX_EDIT, textBoxObj: textBoxObj, textBoxIndex: textBoxIndex };
    },
    removeTextBox: function (textBoxIndex) {
        return { type: constants.TEXT_BOX_REMOVE, textBoxIndex: textBoxIndex };
    },
};
