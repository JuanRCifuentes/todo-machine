import { TodoProvider } from "../TodoContext/TodoContext";
import { AppUI } from "./AppUI";
  
function App(props) {
  
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;