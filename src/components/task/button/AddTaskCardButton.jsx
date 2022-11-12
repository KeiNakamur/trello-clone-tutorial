import React from 'react'
import { v4 as uuid } from "uuid";

const AddTaskCardButton = ({ taskCardsList, setTaskCardsList }) => {
    const addTaskCard = () => {
        const taskCardId = uuid();
        // Add Task Cards
        setTaskCardsList([...taskCardsList, {
            id: taskCardId,
            draggableId: `item${taskCardId}`,
        }])
    }
    return (
        <div className='addTaskCardArea'>
            <button className='addTaskCardButton' onClick={addTaskCard}>+</button>
        </div>
    )
};

export default AddTaskCardButton