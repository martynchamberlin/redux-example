import React, {Component, PropTypes} from 'react';
import actions from '../actions';
import TextBox from './TextBox';
import lodash from 'lodash';

var ReactRedux = require('react-redux');

export default class TextBoxWrap extends Component {

    render() {
        if (this.props.textBoxes.length) {
            const boxes = [];
            lodash.each(this.props.textBoxes, (box) =>
                boxes.push(<TextBox name={box.name} key={box.key} />
            ));
            return (<div>{boxes}</div>);
        } else {
            return null;
        }
    }
}