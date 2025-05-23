import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [text, setText] = useState<string>('');
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn TypeScript", completed: false },
    { id: 3, text: "Build a Todo App", completed: false },
  ]);

  function deleteTask(id: number): void {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleCompleted(id: number) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }

  function addTask(text: string) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setText('');
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1>Todo List</h1>
      <div className="flex justify-between items-center p-2 m-2 rounded-lg gap-4">
        <input
          className=' p-2 rounded-lg border-2 border-gray-500'
          value={text}
          onChange={e => setText(e.target.value)}
        />

        <button onClick={() => addTask(text)}>Add</button>
      </div>
      <section>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </section>
    </div>
  );
};

export default TodoList;
