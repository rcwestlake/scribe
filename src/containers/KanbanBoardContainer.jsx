import React, { Component } from 'react';
import KanbanBoard from '../components/KanbanBoard';
import 'whatwg-fetch';

const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
  'Content-Type': 'application/json',
  Authorization: 'rw-auth',
};

class KanbanBoardContainer extends Component {
  constructor() {
    super(...arguments);

    this.state = ({
      cards: [],
    });
  }

  componentDidMount() {
    fetch(API_URL+'/cards', {headers: API_HEADERS})
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        cards: responseData,
      });
    })
    .catch((error) => {
      console.log('Error in api call');
    });
  }

  addTask(cardId, taskName) {
    console.log('add');
  }

  removeTask(cardId, taskId, taskIndex) {
    console.log('remove');
  }

  toggleTask(cardId, taskId, taskIndex) {
    console.log('toggle');
  }

  render() {
    return (
      <KanbanBoard
        cards={this.state.cards}
        taskCallbacks={{
          add: this.addTask.bind(this),
          remove: this.removeTask.bind(this),
          toggle: this.toggleTask.bind(this),
        }}
      />
    );
  }
}

export default KanbanBoardContainer;
