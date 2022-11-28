import { useContext } from "react";
import { TodoContext } from "../../TodoContext/TodoContext";
import "./CreateTodoButton.css";
import PlusSign from './plus-icon.svg';

function CreateTodoButton() {
    const { setOpenModal } = useContext(TodoContext);
    const onClickButton = () => {
        setOpenModal(prevState => !prevState);
    };

    return (
        <button className="CreateTodoButton" onClick={onClickButton}>
            {/* <div className="CreateTODOButton-circle">h</div> */}
            <img className="hijo" src={PlusSign} alt="Add Todo" />
        </button>
    );
}

export { CreateTodoButton };