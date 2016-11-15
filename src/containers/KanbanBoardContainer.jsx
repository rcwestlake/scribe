import React, { Component, PropTypes } from 'react';
import KanbanBoard from '../components/KanbanBoard';

class KanbanBoardContainer extends Component {
  constructor() {
    super(...arguments);

    this.state = ({
      cards: [],
    });
  }

  render() {
    return (
      <KanbanBoard cards={this.state.cards} />
    );
  }
}

KanbanBoardContainer.propTypes = {

}

export default KanbanBoardContainer;
