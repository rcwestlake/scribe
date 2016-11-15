import React from 'react';
import ReactDOM from 'react-dom';
import KanbanBoardContainer from './containers/KanbanBoardContainer.jsx'
import cardsList from './App'
import './index.css';

ReactDOM.render(
  <KanbanBoardContainer />,
  document.getElementById('root')
);
