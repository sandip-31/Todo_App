import React from "react";
import { Todo } from "../contexts/TodoContext";

interface TodoCardProps {
  todo: Todo;
  onRemoveTodo: (id: number) => void;
}

const TodoCard: React.FC<TodoCardProps> = ({ todo, onRemoveTodo }) => {
  const { id, title, subtasks } = todo;

  return (
    <div className="bg-gray-200 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <ul className="list-disc ml-4 mb-4">
        {subtasks.map((subtask: string, index: number) => (
          <li key={index}>{subtask}</li>
        ))}
      </ul>
      <div className="flex justify-end">
        <button
          type="button"
          className="bg-red-500 hover:bg-red-600 text-white rounded py-2 px-4"
          onClick={() => onRemoveTodo?.(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
