import React, { createContext, useState, ReactNode } from "react";

export interface Todo {
  id: number;
  title: string;
  subtasks: string[];
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (title: string, subtasks: string[]) => void;
  removeTodo: (id: number) => void;
}

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
});

export const TodoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string, subtasks: string[]) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      title,
      subtasks,
    };

    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
