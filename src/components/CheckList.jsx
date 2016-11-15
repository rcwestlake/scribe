import React, { Component, PropTypes } from 'react';

class CheckList extends Component {
  render() {
    const { tasks } = this.props;
    let allTasks = tasks.map((task, index) => {
      return <li key={task.id} className='checklist-task'>
        <input
          type='checkbox'
          defaultChecked={task.done}
          onChange={this.props.taskCallbacks.toggle(null, task.id, index)}
        />
        {task.name}
        <a
          href='#'
          className='checklist-task--remove'
          onClick={this.props.taskCallbacks.remove(null, task.id, index)}
        />
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
  taskCallbacks: PropTypes.object,
}

export default CheckList;
