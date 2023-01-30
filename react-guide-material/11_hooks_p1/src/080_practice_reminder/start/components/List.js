import item from './Item';

const List = ({ todos, deleteTodo }) => {
  const complete = (id) => {
    deleteTodo(id);
  };
  return (
    <div>
      {todos.map((todo) => (
        <Item todo={todo} comlete={complete} key={todo.id} />
      ))}
    </div>
  );
};

export default List;
