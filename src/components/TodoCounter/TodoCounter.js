import { useContext } from 'react'
import { TodoContext } from '../../TodoContext/TodoContext'
import './TodoCounter.css'

function TodoCounter() {
    const { completedTodos, totalTodos } = useContext( TodoContext )
    return (
        <h2 className="TodoCounter">
            Has completado {completedTodos} de {totalTodos} TODO's
        </h2>
    )
}

export { TodoCounter }