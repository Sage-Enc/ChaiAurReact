import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoItem({ todo }) {
  const [isTaskEditable, setIsTaskEditable] = useState(false)
  const [task, setTask] = useState(todo.task)
  const {updateTask, deleteTask, toggleCompleted} = useTodo()

  const editTask = () => {
    updateTask(todo.id, {...todo, task: task})
    setIsTaskEditable(false)
  }
  const toggleComplete = () => {
    toggleCompleted(todo.id)
  }

  return (
      <div
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
              todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.completed}
              onChange={toggleComplete}
          />
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                  isTaskEditable ? "border-black/10 px-2" : "border-transparent"
              } ${todo.completed ? "line-through" : ""}`}
              value={task}
              onChange={(e) => setTask(e.target.value)}
              readOnly={!isTaskEditable}
          />
          {/* Edit, Save Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (todo.completed) return;

                  if (isTaskEditable) {
                      editTask();
                  } else setIsTaskEditable((prev) => !prev);
              }}
              disabled={todo.completed}
          >
              {isTaskEditable ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteTask(todo.id)}
          >
              ❌
          </button>
      </div>
  );
}

export default TodoItem;