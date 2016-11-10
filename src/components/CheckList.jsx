import React, { Component } from 'react'

class CheckList extends Component {
  render() {
    const { tasks } = this.props;
    let allTasks = tasks.map((task) => {
      return <li className='checklist-task'>
        <input
          type='checkbox'
          defaultChecked={task.done}
        />
        {task.name}
        <a href='#' className='checklist-task-remove' />
      </li>
    });

    return (
      <div className='checklist'>
        <ul>{allTasks}</ul>
      </div>
    );
  }
}

export default CheckList;
