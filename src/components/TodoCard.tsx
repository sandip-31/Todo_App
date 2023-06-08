import React from 'react';

interface TodoCardProps {
  todo: {
    id: number;
    title: string;
    subtasks: string[];
  };
  onRemoveTodo: (id: number) => void;
}

const TodoCard: React.FC<TodoCardProps> = ({ todo, onRemoveTodo }) => {
  const { id, title, subtasks } = todo;

  return (
    <div className="bg-gray-200 rounded-lg p-4 shadow-md">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>

      <ul className="list-disc pl-6 mb-4">
        {subtasks.map((subtask, index) => (
          <li key={index}>{subtask}</li>
        ))}
      </ul>

      <button
        type="button"
        className="bg-red-500 hover:bg-red-600 text-white rounded p-2"
        onClick={() => onRemoveTodo(id)}
      >
        Remove
      </button>
    </div>
  );
};

export default TodoCard;
