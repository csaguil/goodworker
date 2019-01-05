import React, { Component } from 'react';
import Milestone from '../Components/Milestone';
import { Icon } from 'semantic-ui-react';
import '../styles/styles.css';

class MilestoneTracker extends Component {

    render() {
        let milestones;
        if (this.props.milestones) {
            milestones = this.props.milestones.map(milestone => {
                return (
                    <Milestone key={milestone.name} milestone={milestone} />
                );
            });
        }

        return (
            <div className="Milestone-Tracker">
                Milestone tracker
                {milestones}
            </div>
        );
    }
}

export default MilestoneTracker;
