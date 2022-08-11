import ITask from "../Interfaces/Task";
import TaskItem from "./TaskItem";

type Props = {
  taskList: ITask[];
  deleteTask(id: number): void;
  handleEdit(task: ITask): void;
};

export default function TaskList({ taskList, deleteTask, handleEdit }: Props) {
  return (
    <div>
      {taskList.length === 0 ? (
        <p>Não há tarefas cadastradas</p>
      ) : (
        <ul>
          {taskList.map((task) => (
            <TaskItem task={task} key={task.id} deleteTask={deleteTask} handleEdit={handleEdit}/>
          ))}
        </ul>
      )}
    </div>
  );
}
