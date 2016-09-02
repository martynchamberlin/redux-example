import React, {Component} from 'react';

import actions from './actions';
import TextBoxWrap from './components/TextBoxWrap';
import DocumentMeta from 'react-document-meta';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

var ReactRedux = require('react-redux');

class App extends Component {

    constructor() {
        super();
        this.addComponent = this.addComponent.bind(this);
    }

    componentWillMount() {
        this.props.updateHeaderMeta({ title: 'Redux Example' });
    }

    addComponent() {
        this.props.addTextbox();
    }

    render() {
        return (
            <div className="container">
                <DocumentMeta {...this.props.headerMeta} />
                <h3>A redux example with <code>{this.props.textBoxes.items.length} TextBox</code> components</h3><br/>
                <div className="row">
                    <div className="col-sm-6">
                        <TextBoxWrap textBoxes={this.props.textBoxes.items}/>
                        <button className="btn btn-primary" onClick={this.addComponent}>Add Component</button>
                    </div>
                </div>
            </div>
        );
    }
}


var mapStateToProps = function (state) {
    // This is an example, though we don't use this prop here.
    return { textBoxes: state.textBoxes, headerMeta: state.headerMeta };
};

var mapDispatchToProps = function (dispatch) {
    return {
        addTextbox: function (name) {
            dispatch(actions.addTextbox(name));
        },
        updateHeaderMeta: function (newHeaderMeta) {
            dispatch(actions.updateHeaderMeta(newHeaderMeta));
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App);
