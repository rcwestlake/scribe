import React from 'react';
import ReactDOM from 'react-dom';
import KanbanBoard from './components/KanbanBoard.jsx'
import cardsList from './App'
import './index.css';

ReactDOM.render(
  <KanbanBoard cards={cardsList} />,
  document.getElementById('root')
);
