import React from 'react';
import { useState } from 'react'; 
import './TodoItem.css'

function TodoItem({ todo, deleteTodo, updateStatus }) {
    const [selectedStatus, setSelectedStatus] = useState(todo.status);
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(todo.name);
    const [editedDescription, setEditedDescription] = useState(todo.description);


    const handleChange = (e) => {
        const newStatus = e.target.value;
        setSelectedStatus(newStatus);
        updateStatus(todo.id, newStatus); // Call updateStatus from props with todo id and new status
    };

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
    todo.name = editedName
    todo.description = editedDescription
    setIsEditing(!isEditing);
    };

    const handleCancel = () => {
        setEditedName(todo.name);
        setEditedDescription(todo.description);
        setIsEditing(false);
    };

    const handleDelete = () => {
        deleteTodo(todo.id);
    };

    return (
        <div className="todo-card">
        {isEditing ? (
            <div className="card h-100">
                <div className="card-body p-4 container">
                    <div className="text-start row justify-content-center">
                        <p className="col-md-12 col-lg-12">Name: <input
                            className='form-control'
                            type="text"
                            value={editedName}
                            onChange={(e) => setEditedName(e.target.value)}
                        /></p>
                        <p className="col-md-12 col-lg-12">Description: <input
                            className='form-control'
                            type="text"
                            value={editedDescription}
                            onChange={(e) => setEditedDescription(e.target.value)}
                        /></p>
                        <div className='d-flex justify-content-around py-2'>
                            <button className='btn btn-success mx-2 px-2' onClick={handleSave}>Save</button>
                            <button className='btn btn-success px-2' onClick={handleCancel}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className="card h-100">
                <div className="card-body p-4">
                    <div className="text-start">
                        <p className="">Name: {todo.name}</p>
                        <p className="">Description: {todo.description}</p>
                        <p>
                            <span>Status:  </span>                    
                            <select className={`dropdown p-2 ${selectedStatus === 'completed' ? 'completed-color' : 'not-completed-color'}`} value={selectedStatus} onChange={handleChange}>
                                <option value="completed">Completed</option>
                                <option value="notCompleted">Not Completed</option>
                            </select>
                        </p> 
                        <div className='d-flex justify-content-end align-items-center'>
                            <button className='btn btn-success btn-edit mx-2 px-2' onClick={handleEdit}>Edit</button> 
                            <button className='btn btn-danger btn-delete px-2' onClick={handleDelete}>Delete</button>              
                        </div>
                    </div>
                </div>
            </div>
        )}
        </div>
    );
    }

export default TodoItem;