import React, { useState } from 'react';

interface TodoFormProps {
  onClose: () => void;
  onAddTodo: (title: string, subtasks: string[]) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onClose, onAddTodo }) => {
  const [title, setTitle] = useState('');
  const [subtasks, setSubtasks] = useState<string[]>(['']);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubtaskChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedSubtasks = [...subtasks];
    updatedSubtasks[index] = event.target.value;
    setSubtasks(updatedSubtasks);
  };

  const addSubtask = () => {
    setSubtasks([...subtasks, '']);
  };

  const removeSubtask = (index: number) => {
    const updatedSubtasks = [...subtasks];
    updatedSubtasks.splice(index, 1);
    setSubtasks(updatedSubtasks);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddTodo(title, subtasks.filter(subtask => subtask !== ''));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="max-w-lg bg-white p-6 rounded shadow-md w-full">
        <h1 className="text-2xl mb-4">Todo Component</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-2">
              Title:
            </label>
            <input
              type="text"
              id="title"
              className="w-full border border-gray-300 p-2 rounded"
              value={title}
              onChange={handleTitleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Subtasks:</label>
            {subtasks.map((subtask, index) => (
              <div key={index} className="flex mb-2">
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded"
                  value={subtask}
                  onChange={event => handleSubtaskChange(index, event)}
                />
                {index > 0 && (
                  <button
                    type="button"
                    className="ml-2 bg-red-500 hover:bg-red-600 text-white rounded p-2"
                    onClick={() => removeSubtask(index)}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded p-2"
              onClick={addSubtask}
            >
              Add Subtask
            </button>
          </div>

          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white rounded p-2">
            Add Task
          </button>
          <button
            type="button"
            className="bg-gray-500 hover:bg-gray-600 text-white rounded p-2 ml-2"
            onClick={onClose}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
