import React from 'react'
import { type Task } from '../types/task.types'
import { Trash2 } from 'lucide-react';

type TodoItemProps = {
  task: Task,
  toggleCompleted: (id: number) => void,
  deleteTask: (id: number) => void,
}

const TodoItem: React.FC<TodoItemProps> = ({ task, toggleCompleted, deleteTask }) => {
  function handleChange() {
    toggleCompleted(task.id);
  }

  return (
    <div className='flex justify-between items-center p-2 m-2 rounded-lg'>

      <input className='size-8' type="checkbox" checked={task.completed} onChange={handleChange}/>
      <p className={`mx-10 w-100 flex-1 text-xl text-left wrap-anywhere ${task.completed ? 'text-gray-400 line-through' : 'text-white'}`} >{task.text}</p>
      <button
        className='hover:text-red-500 hover:border-3 border-red-500 text-white rounded-lg'
        onClick={() => deleteTask(task.id)}
        >
        <Trash2 className='size-5' />
      </button>
        </div>
  )
}

export default TodoItem