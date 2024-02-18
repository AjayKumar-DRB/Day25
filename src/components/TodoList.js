import React from "react";
import TodoItem from "./TodoItem";

function TodoList( { todos, deleteTodo, updateStatus } ) {
    return(
      <div class="container px-4 px-lg-5 mt-5">
          <div class="row row-cols-1 row-cols-md-3 row-cols-xl-3 justify-content-center gap">
            {todos.map(todo => (
              <div key={todo.id} className="col-md-4 mb-4">
                  <TodoItem 
                  key={todo.id}
                  todo={todo}
                  deleteTodo={deleteTodo}
                  updateStatus={updateStatus} />
              </div>
            ))}
            </div>
        </div>
    )
}

export default TodoList