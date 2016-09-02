import React, {Component, PropTypes} from 'react';
import actions from '../actions';
import lodash from 'lodash';

var ReactRedux = require('react-redux');

class TextBox extends Component {

    componentWillMount() {
        this.updateIdentity = this.updateIdentity.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }

    updateIdentity(event) {
        var newIdentity = Object.assign({}, { name: this.props.name, value: event.target.value });
        this.props.editTextBox(newIdentity, this.indexOfCurrent());
    }

    removeBox() {
        this.props.removeTextBox(this.indexOfCurrent());
    }

    indexOfCurrent() {
        return lodash.findIndex(this.props.textBoxes.items, { name: this.props.name });
    }

    render() {
        const box = lodash.find(this.props.textBoxes.items, { name: this.props.name });
        const val = box.value;
        const name = box.name;
        return (
            <div className="row form-group">
                <div className="col-sm-9">
                    <input className="form-control" type="text" defaultValue={val} onChange={this.updateIdentity} placeholder={name}/>
                    <span className="help-block">{val}</span>
                </div>
                <div className="col-sm-1">
                    <button className="close" onClick={this.removeBox}><span>&times; </span></button>
                </div>
            </div>
        );

    }
}

var mapStateToProps = function (state) {
    return { textBoxes: state.textBoxes };
};

var mapDispatchToProps = function (dispatch) {
    return {
        editTextBox: function (textBoxObj, index) {
            dispatch(actions.editTextBox(textBoxObj, index));
        },
        removeTextBox: function (removeTextBoxName) {
            dispatch(actions.removeTextBox(removeTextBoxName));
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(TextBox);
