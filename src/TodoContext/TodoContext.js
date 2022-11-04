import { useState, createContext } from 'react'
import { useLocalStorage } from './useLocalStorage'

 const TodoContext = createContext()

 function TodoProvider(props){

    const { 
      item: todos, 
      saveItem: saveTodos,
      loading,
      error 
    } = useLocalStorage('TODOS_V1', [])
    const [ searchValue, setSearchValue ] = useState('')
    const [ openModal, setOpenModal ] = useState(false)
    
    let searchedTodos = []
    
    if(!searchValue >= 1){
      searchedTodos = todos
    } else {
      searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLocaleLowerCase()
        const searchText = searchValue.toLocaleLowerCase()
        return todoText.includes(searchText)
      })
    }
  
    const completedTodos = searchedTodos.filter(todo => todo.completed).length
    const totalTodos = searchedTodos.length
  
    const completeTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text)
      const newTodos = [...todos]
      newTodos[todoIndex].completed = true
      saveTodos(newTodos)
    }

    const addTodo = ( todo ) => {
      const newTodos = [...todos]
      newTodos.push(todo)
      saveTodos(newTodos)
    }
  
    const deleteTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text)
      const newTodos = [...todos]
      newTodos.splice(todoIndex, 1)
      saveTodos(newTodos)
    }

    return(
        <TodoContext.Provider 
            value={{
                loading,
                error,
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodo,
                deleteTodo,
                openModal,
                setOpenModal,
                addTodo
            }}
        >
            {props.children}
        </TodoContext.Provider>
    )
 }

 export { TodoContext, TodoProvider }