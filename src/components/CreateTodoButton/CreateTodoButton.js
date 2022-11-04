import { useContext } from "react";
import { TodoContext } from "../../TodoContext/TodoContext";
import "./CreateTodoButton.css";

function CreateTodoButton() {
    const { openModal, setOpenModal } = useContext(TodoContext);
    const onClickButton = () => {
        setOpenModal(prevState => !prevState);
    };

    return (
        <button className="CreateTodoButton" onClick={onClickButton}>
            +
        </button>
    );
}

export { CreateTodoButton };
