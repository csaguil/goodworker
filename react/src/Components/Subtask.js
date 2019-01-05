import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import '../styles/styles.css';

class Subtask extends Component {
    render() {
        let status;
        if (this.props.subtask.completed) {
            status = <Icon name="check circle outline" color="green" />
        } else {
            status = <Icon name="circle outline" />
        }
        return (
            <div className="Subtask">
                {this.props.subtask.name}
                {status}
            </div>
        );
    }
}

export default Subtask;
