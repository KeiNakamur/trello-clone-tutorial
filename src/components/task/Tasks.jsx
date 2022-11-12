import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import Task from './Task'

export const Tasks = ({ taskList, setTaskList }) => {

    const handleDragEnd = (result) => {
        const remove = taskList.splice(result.source.index, 1);
        taskList.splice(result.destination.index, 0, remove[0]);
        MediaRecorder(taskList, result.source.index)
    }

    return (
        <div >
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId='droppable'>
                    {(provided) =>
                    //innerRefはこの場合、ドラッグ&ドロップする以外の部分の制御
                    (<div {...provided.droppableProps} ref={provided.innerRef}>
                        {taskList.map((task, index) => (
                            <div key={task.id}>
                                <Task
                                    index={index}
                                    task={task}
                                    taskList={taskList}
                                    setTaskList={setTaskList}
                                    key={task.id} />
                            </div>
                        ))}
                        {provided.placeholder}
                    </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}
