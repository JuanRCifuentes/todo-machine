import { useContext } from "react";
import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { TodoForm } from "../components/TodoForm/TodoForm";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { Modal } from "../components/Modal/Modal";
import "./App.css";

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
    } = useContext(TodoContext);
    return (
        <React.Fragment className="App">
            <TodoCounter />

            <TodoSearch />

            <TodoList>
                {error && <p>Desesperate, hubo un error...</p>}
                {loading && <p>Estamos cargando, no desesperes :D</p>}
                {!loading && !searchedTodos.length && (
                    <p>Crea tu primer TODO</p>
                )}

                {searchedTodos.map((todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </React.Fragment>
    );
}

export { AppUI };
