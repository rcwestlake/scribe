import React, { Component, PropTypes } from 'react'
import CheckList from './CheckList';
import marked from 'marked';

class Card extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      showDetails: false,
    };
  }

  toggleDetails() {
    this.setState({
      showDetails: !this.state.showDetails
    });
  }

  render() {
    const { showDetails } = this.state;
    let cardDetails;
    if(this.state.showDetails) {
      cardDetails = (
        <div className='card-details'>
          <span dangerouslySetInnerHTML={{__html:marked(this.props.description)}} />
          <CheckList
            cardId={this.props.id}
            tasks={this.props.tasks}
          />
        </div>
      )
    }
    return (
      <div className='card'>
        <div
          className={ showDetails ? 'card-title card-title--is-open' : 'card-title' }
          onClick={() => this.toggleDetails()}
        >
          {this.props.title}
        </div>
        {cardDetails}
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Card;
