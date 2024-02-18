import React from 'react';
import './TodoFilter.css'

function TodoFilter({ filterStatus, setFilterStatus }) {
  return (
    <div className='container d-flex mt-4 py-4 justify-content-between align-items-center filter-div'>
        <p className='mb-0 fw-bold fs-4'>My Todos</p>
        <div>
        <span className='fw-bold fs-4'>Status Filter:  </span>
          <select className={`dropdown p-2 ${filterStatus === 'completed' ? 'completed-color' : 'not-completed-color'}`} value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="notCompleted">Not Completed</option>
          </select>
        </div>
    </div>
  );
}

export default TodoFilter;