import React, { Component } from 'react';
import './App.css';
import MilestoneTracker from './Components/MilestoneTracker';

class App extends Component {
  componentWillMount() {
      this.setState({
          milestones: [
              {
                  name: "Milestone 1",
                  completed: true,
                  subtasks: [
                      {
                          name: "subtask 1",
                          completed: true
                      },
                      {
                          name: "subtask 2",
                          completed: true
                      }
                  ]
              },
              {
                  name: "Milestone 2",
                  completed: false,
                  subtasks: [
                      {
                          name: "subtask 1",
                          completed: false
                      }
                  ]
              }
          ]
      });
  }

  render() {
      return (
          <div className="App">
              <MilestoneTracker milestones={this.state.milestones} />
          </div>
      )
  }
}

export default App;
