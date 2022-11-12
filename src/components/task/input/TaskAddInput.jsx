import React from 'react'
import { v4 as uuid } from "uuid";

export const TaskAddInput = ({ inputText, setInputText, setTaskList, taskList }) => {

    const handleSubmit = (e) => {
        const taskAddId = uuid();
        e.preventDefault();
        if (inputText === "") {
            return
        }
        //cardを追加する
        setTaskList([
            ...taskList,
            {
                id: taskAddId,
                text: inputText,
                draggableId: `task-${taskAddId}`
            }
        ]);
        setInputText("");
    };

    const handleChange = (e) => {
        setInputText(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Add Task'
                    className='taskAddInput'
                    value={inputText}
                    onChange={handleChange} />
            </form>
        </div>
    )
}
