import { useState } from "react";

export default function ToDoList() {
  const [newTask, setNewTask] = useState("");
  const [allTasks, setAllTasks] = useState([
    {
      taskId: 101,
      taskName: "Call friends",
      isTaskCompleted: false,
    },
    {
      taskId: 102,
      taskName: "Laundry",
      isTaskCompleted: false,
    },
  ]);

  function handleToggleTask(taskId) {
    //creating a copy of the state variable allTasks
    let copyAllTasks = [...allTasks];
    //now traversing through the copy and toggling the isTaskCompleted property
    copyAllTasks.forEach((eachTask) => {
      if (eachTask.taskId === taskId)
        eachTask.isTaskCompleted = !eachTask.isTaskCompleted;
    });
    //now set the updated copyAllTasks as the new state for allTasks state variable
    setAllTasks(copyAllTasks);
  }

  function handleDeleteTask(taskId) {
    let filteredTasks = allTasks.filter(
      (eachTask) => eachTask.taskId !== taskId
    );
    setAllTasks(filteredTasks);
  }

  function handleAddTask() {
    setAllTasks([
      ...allTasks,
      {
        taskId: allTasks[allTasks.length - 1]?.taskId + 1 || 101, // Defaults to 101 if allTasks is empty
        taskName: newTask,
        isTaskCompleted: false,
      },
    ]);
    setNewTask(""); // Reset input field
  }

  let mappedAllTask = allTasks.map((eachTask) => (
    <li
      key={eachTask.taskId}
      className="list-group-item"
      onClick={() => handleToggleTask(eachTask.taskId)}
    >
      {eachTask.isTaskCompleted ? "Done" : ""} {eachTask.taskName}
      <button
        className="btn btn-warning"
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering toggle when deleting
          handleDeleteTask(eachTask.taskId);
        }}
      >
        Delete
      </button>
    </li>
  ));

  return (
    <>
      <div className="container m-5">
        <h3>TODO APP</h3>
        <div className="form-control-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter new Task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="btn btn-success" onClick={handleAddTask}>
            ADD
          </button>
        </div>
        <ul className="list-group">{mappedAllTask}</ul>
      </div>
    </>
  );
}
