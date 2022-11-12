import React, { useState } from 'react';

const TaskCardTitle = () => {

    const [isClicked, setIsClicked] = useState(false);
    const [inputCardTitle, setInputCardTitle] = useState("New Task");

    const onChangeToInput = () => {
        setIsClicked(true);
    }

    const onTitleChanged = (e) => {
        setInputCardTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsClicked(false);
    }

    const handleBlur = () => {
        setIsClicked(false);
    }

    return (
        <div onClick={onChangeToInput}>
            {isClicked ? (
                <form onSubmit={handleSubmit}>
                    {/* onBlurはinput以外をクリックした際に呼ばれる */}
                    <input
                        type="text"
                        onChange={onTitleChanged}
                        onBlur={handleBlur}
                        autoFocus
                        maxLength={15} />
                </form>)
                : (
                    <h3>{inputCardTitle}</h3>
                )}
        </div>
    )
}

export default TaskCardTitle;
