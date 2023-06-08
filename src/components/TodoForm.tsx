import React, { useState } from "react";

interface TodoFormProps {
  onClose: () => void;
  onAddTodo: (title: string, subtasks: string[]) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onClose, onAddTodo }) => {
  const [title, setTitle] = useState("");
  const [subtasks, setSubtasks] = useState<string[]>([]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubtaskChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;

    setSubtasks((prevSubtasks) => {
      const updatedSubtasks = [...prevSubtasks];
      updatedSubtasks[index] = value;
      return updatedSubtasks;
    });
  };

  const handleAddSubtask = () => {
    setSubtasks((prevSubtasks) => [...prevSubtasks, ""]);
  };

  const handleRemoveSubtask = (index: number) => {
    setSubtasks((prevSubtasks) => prevSubtasks.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTodo?.(title, subtasks);
    onClose?.();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <form
        className="max-w-md p-6 bg-gray-100 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-semibold mb-4">Add Task</h2>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full border-gray-300 rounded-md shadow-sm"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subtasks" className="block text-sm font-medium">
            Subtasks
          </label>
          {subtasks.map((subtask, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                className="flex-1 border-gray-300 rounded-md shadow-sm mr-2"
                value={subtask}
                onChange={(e) => handleSubtaskChange(e, index)}
                required
              />
              <button
                type="button"
                className="bg-red-500 hover:bg-red-600 text-white rounded p-2"
                onClick={() => handleRemoveSubtask(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="bg-green-500 hover:bg-green-600 text-white rounded p-2 mt-2"
            onClick={handleAddSubtask}
          >
            Add Subtask
          </button>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-gray-500 hover:bg-gray-600 text-white rounded p-2 mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white rounded p-2"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
