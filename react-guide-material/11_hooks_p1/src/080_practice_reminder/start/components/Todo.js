import List from './List';
import Form from './Form';
import { TodoProvider } from '../context/TodoContext';

const Todo = () => {
  return (
    <TodoProvider>
      <List todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      <Form createTodo={createTodo} />
    </TodoProvider>
  );
};
export default Todo;
