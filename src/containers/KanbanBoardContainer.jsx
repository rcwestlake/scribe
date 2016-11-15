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
      console.log(responseData);
    })
    .catch((error) => {
      console.log('Error in api call');
    });
  }

  render() {
    return (
      <KanbanBoard cards={this.state.cards} />
    );
  }
}

export default KanbanBoardContainer;
