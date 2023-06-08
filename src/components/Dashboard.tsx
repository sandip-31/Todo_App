import React, { useContext, useState } from "react";
import TodoCard from "./TodoCard";
import TodoForm from "./TodoForm";
import { TodoContext } from "../contexts/TodoContext";

const Dashboard: React.FC = () => {
  const [showTodoForm, setShowTodoForm] = useState(false);
  const { todos, addTodo, removeTodo } = useContext(TodoContext);

  const handleAddTask = () => {
    setShowTodoForm(true);
  };

  const handleCloseForm = () => {
    setShowTodoForm(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      {showTodoForm ? (
        <div className="fixed top-0 left-0 w-full h-full bg-white">
          <TodoForm onClose={handleCloseForm} onAddTodo={addTodo} />
        </div>
      ) : (
        <div className="max-w-4xl p-6">
          <h1 className="text-2xl mb-4">Dashboard</h1>

          <button
            type="button"
            className="bg-green-500 hover:bg-green-600 text-white rounded p-2 mb-4"
            onClick={handleAddTask}
          >
            Add Task
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {todos.map((todo) => (
              <TodoCard key={todo.id} todo={todo} onRemoveTodo={removeTodo} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
