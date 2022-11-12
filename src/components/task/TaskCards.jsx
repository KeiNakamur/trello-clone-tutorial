import React, { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import AddTaskCardButton from './button/AddTaskCardButton'
import TaskCard from './TaskCard'

export const TaskCards = () => {
    //+ボタンが押された際にタスクカードを増やしていくための状態変数
    const [taskCardsList, setTaskCardsList] = useState([{
        id: "0",
        draggableId: "item0"
    }]);

    const handleDragEnd = (result) => {
        const remove = taskCardsList.splice(result.source.index, 1);
        taskCardsList.splice(result.destination.index, 0, remove[0]);
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable" direction='horizontal'>
                {(provided) => (
                    <div
                        className='taskCardsArea'
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {taskCardsList.map((taskCard, index) => (
                            <TaskCard
                                key={taskCard.id}
                                taskCardsList={taskCardsList}
                                setTaskCardsList={setTaskCardsList}
                                // idを渡す必要があるので(初期値として存在しているデータ)
                                taskCard={taskCard}
                                index={index}
                            />

                        ))}
                        {provided.placeholder}
                        <AddTaskCardButton
                            taskCardsList={taskCardsList}
                            setTaskCardsList={setTaskCardsList}
                        />
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}
