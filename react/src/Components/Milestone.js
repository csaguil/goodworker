import React, { Component } from 'react';
import Subtask from '../Components/Subtask';
import { Button,  Icon } from 'semantic-ui-react';

import '../styles/styles.css';

class Milestone extends Component {
    componentWillMount() {
        this.setState(
            {subtasksHidden: true}
        );
    }

    render() {
        let subtasks;
        if (this.props.milestone.subtasks) {
            subtasks = this.props.milestone.subtasks.map(subtask => {
                return (
                    <Subtask key={subtask.name} subtask={subtask} />
                );
            });
        }

        let status;
        if (this.props.milestone.completed) {
            status = <Icon name="check circle outline" color="green" />
        } else {
            status = <Icon name="circle outline" />
        }

        let angleIcon;
        if (this.state.subtasksHidden) {
            angleIcon = <Icon name="angle right" />;
        } else {
            angleIcon = <Icon name="angle down" />
        }

        const {subtasksHidden} = this.state;
        return (
            <div className="Milestone">
                <Button icon onClick={() => this.setState({ subtasksHidden: !subtasksHidden })}>
                    {angleIcon}
                </Button>
                {this.props.milestone.name }
                {status}
                {this.state.subtasksHidden ? null : subtasks}
            </div>
        );
    }
}

export default Milestone;
