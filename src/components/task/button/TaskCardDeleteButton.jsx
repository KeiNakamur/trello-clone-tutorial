import React from 'react';

export const TaskCardDeleteButton = ({
    taskCardsList,
    setTaskCardsList,
    taskCard
}) => {
    const handleDelete = (id) => {
        //タスクカードを削除する
        //クリックしたカードのidと一覧表示されているカードのidを比較している
        setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
    };
    return (
        <div>
            <button className='taskCardDeleteButton'
                onClick={() => handleDelete(taskCard.id)}
            >✖️</button>
        </div>
    )
}
