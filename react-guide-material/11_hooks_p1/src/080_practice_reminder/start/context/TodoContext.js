import { createContext, useContext } from 'react';
import Todo from '../components/Todo';

const TodoContext = createContext();
const TodoDispatchContext = createContext();
const todosList = [
  {
    id: 1,
    content: '店予約する',
    editing: false,
  },
  {
    id: 2,
    content: '卵買う',
    editing: false,
  },
  {
    id: 3,
    content: '郵便出す',
    editing: false,
  },
];

const todoReducer = (todos, action) => {
  switch (action.type) {
    case 'todo/add':
      return [...todos, action.todo];
    case 'todo/delete':
      return todos.filter((todo) => {
        return todo.id !== action.todo.id;
      });
    case 'todo/update':
      return todos.map((_todo) => {
        return _todo.id === todo.id ? { ..._todo, ...todo } : { ..._todo };
      });
    default:
      return todos;
  }
};

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, todosList);
  return (
    <TodoContext.Provider value={todos}>
      <TodoContext.Provider value={dispatch}>{children}</TodoContext.Provider>
    </TodoContext.Provider>
  );
};

const useTodos = useContext(TodoContext);
const useDispatchTodos = useContext(TodoDispatchContext);

export { useTodos, useDispatchTodos, TodoProvider };
