import React, { Component, PropTypes } from 'react';

class CheckList extends Component {
  render() {
    const { tasks } = this.props;
    let allTasks = tasks.map((task) => {
      return <li key={task.id} className='checklist-task'>
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
        <input
          type='text'
          className='checklist--add-task'
          placeholder='Type, hit Enter to add task'
        />
      </div>
    );
  }
}

CheckList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
}

export default CheckList;
