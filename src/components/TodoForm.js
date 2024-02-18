import React, { useState } from 'react';
import './TodoForm.css'

export function TodoForm({addTodo}) {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(taskName === '') return;
        addTodo(taskName, taskDescription);
        setTaskName('');
        setTaskDescription('');
    }

    return (
        <form onSubmit={handleSubmit}>            
            <div class="container form-div">
                <div class="row justify-content-center form-div">
                    <div class="col-md-6 col-lg-5">
                    <input
                        type='text'
                        value={taskName}
                        placeholder='Task name...'
                        onChange={(e) => setTaskName(e.target.value)} />
                    </div>
                    <div class= "col-md-6 col-lg-5">
                    <input
                        type='text'
                        value={taskDescription}
                        placeholder='Task description...'
                        onChange={(e) => setTaskDescription(e.target.value)} />
                    </div>
                    <div class="col-auto">
                    <button type='submit' className='btn btn-success'>
                        Add Todo
                    </button>
                    </div>
                </div>
            </div>
        </form>

    )
}

// export default TodoForm;