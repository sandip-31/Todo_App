import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoCard from './TodoCard';

interface Todo {
  id: number;
  title: string;
  subtasks: string[];
}

const Dashboard: React.FC = () => {
  const [showTodoForm, setShowTodoForm] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [nextTodoId, setNextTodoId] = useState(1);

  const handleAddTask = () => {
    setShowTodoForm(true);
  };
  
  const handleCloseForm = () => {
    setShowTodoForm(false);
  };

  const handleAddTodo = (title: string, subtasks: string[]) => {
    const newTodo: Todo = {
      id: nextTodoId,
      title,
      subtasks,
    };

    setTodos([...todos, newTodo]);
    setNextTodoId(nextTodoId + 1);
    setShowTodoForm(false);
  };

  const handleRemoveTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      {showTodoForm ? (
        <div className="fixed top-0 left-0 w-full h-full bg-white">
          <TodoForm onClose={handleCloseForm} onAddTodo={handleAddTodo} />
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
            {todos.map(todo => (
              <TodoCard key={todo.id} todo={todo} onRemoveTodo={handleRemoveTodo} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
