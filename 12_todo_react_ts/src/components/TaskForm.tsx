import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import ITask from "../Interfaces/Task";
import styles from "./TaskForm.module.css";

type Props = {
  btnText: string;
  taskList: ITask[];
  task?: ITask | null;
  updateTask?(taskToUpdate: ITask): void;
  setTaskList: Function;
};

export default function TaskForm({
  btnText,
  setTaskList,
  taskList,
  task,
  updateTask,
}: Props) {
  const [id, setId] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (updateTask) {
      updateTask({ id, name, difficulty });
    } else {
      const id = taskList.length + 1;
      const newTask: ITask = { difficulty, name, id };
      setTaskList([...taskList, newTask]);
    }
    console.log("kekew");
    setName("");
    setDifficulty(0);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.name === "task") {
      setName(e.target.value);
    } else {
      setDifficulty(Number(e.target.value));
    }
  }

  useEffect(() => {
    if (task) {
      setId(task.id);
      setName(task.name);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="task" className={styles.label}>
            Tarefa:
          </label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Digite a tarefa..."
            className={styles.input}
            onChange={handleChange}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="difficulty" className={styles.label}>
            Dificuldade:
          </label>
          <input
            type="number"
            name="difficulty"
            id="difficulty"
            placeholder="Dificuldade da tarefa..."
            className={styles.input}
            onChange={handleChange}
            value={difficulty}
          />
        </div>
        <button className={styles.button}>{btnText}</button>
      </form>
    </>
  );
}
