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

    let sideColor = {
      position: 'absolute',
      zIndex: -1,
      top: 0,
      bottom: 0,
      left: 0,
      width: 7,
      backgroundColor: this.props.color
    };
    
    return (
      <div className='card'>
        <div style={sideColor} />
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
