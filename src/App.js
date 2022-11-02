import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar curso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
]
  
function App(props) {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />
      <TodoList >
        {todos.map( todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;