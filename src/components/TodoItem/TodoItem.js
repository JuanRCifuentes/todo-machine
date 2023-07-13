import './TodoItem.css'
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { CompleteIcon } from '../../CompleteIcon'
import { DeleteIconC } from '../../DeleteIcon'

function TodoItem(props) {

    return (
        <li className="TodoItem">
            <CompleteIcon onComplete={props.onComplete}/>
            {/* <Checkbox 
                checked={props.completed} 
                onChange={props.onComplete}
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<RadioButtonCheckedIcon />}
            /> */}
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <DeleteIconC onDelete={props.onDelete}/>
            {/* <DeleteIcon 
                className="Icon Icon-delete" 
                onClick={props.onDelete}
            /> */}
      </li>
    )
}

export { TodoItem }