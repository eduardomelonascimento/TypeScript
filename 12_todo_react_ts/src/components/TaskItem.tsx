import ITask from "../Interfaces/Task";
import styles from "./TaskItem.module.css";

type Props = {
  task: ITask;
  deleteTask(id: number): void;
  handleEdit(task: ITask): void;
};

export default function TaskItem({ task, deleteTask, handleEdit }: Props) {
  return (
    <li className={styles.taskContainer}>
      <div>
        <h4>{task.name}</h4>
        <p>Dificuldade: {task.difficulty}</p>
      </div>
      <div>
        <i className="bi bi-pencil" onClick={()=>handleEdit(task)}></i>
        <i className="bi bi-trash" onClick={() => deleteTask(task.id)}></i>
      </div>
    </li>
  );
}
