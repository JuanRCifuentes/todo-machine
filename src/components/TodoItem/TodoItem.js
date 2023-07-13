import './TodoItem.css'
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoItem(props) {

    return (
        <li className="TodoItem">
            
            <Checkbox checked={props.completed} onChange={props.onComplete}/>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <DeleteIcon 
                className="Icon Icon-delete" 
                onClick={props.onDelete}
            />
      </li>
    )
}

export { TodoItem }