import React from 'react';
import { TodoIcon } from './TodoIcon'

function DeleteIconC({ onDelete }) {
    return (
        <TodoIcon
            type="delete"
            color="grey"
            onClick={onDelete}
        />
    )
}

export { DeleteIconC };