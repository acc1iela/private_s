import { createContext, useContext } from 'react';

const TodoContext = createContext();
const TodoDispatchContext = createContext();

const useTodos = useContext(TodoContext);
const useDispatchTodos = useContext(TodoDispatchContext);

export { useTodos };
