import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import styles from "./App.module.css";
import ITask from "./Interfaces/Task";
import Modal from "./components/Modal";

export default function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  function deleteTask(id: number): void {
    setTaskList(taskList.filter((task) => task.id !== id));
  }

  function hideOrShowModal(show: boolean): void {
    if (show) {
      document.querySelector("#modal")!.classList.remove("hidden");
      document.querySelector("#modal-container")!.classList.add("grow");
    } else {
      document.querySelector("#modal")!.classList.add("hidden");
      setTimeout(() => {
        document.querySelector("#modal-container")!.classList.remove("grow");
      }, 200);
      setTaskToUpdate(null);
    }
  }

  function editTask(task: ITask): void {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  }

  function updateTask(updatedTask: ITask): void {
    const updatedTaskList = taskList.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTaskList(updatedTaskList);
    hideOrShowModal(false);
  }

  return (
    <>
      <Modal
        hideModal={hideOrShowModal}
        children={
          <TaskForm
            btnText="Salvar edição"
            setTaskList={setTaskList}
            taskList={taskList}
            task={taskToUpdate}
            updateTask={updateTask}
          />
        }
      />
      <Header />
      <main className={styles.main}>
        <section className={styles.form_container}>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText="Adicionar Tarefa"
            setTaskList={setTaskList}
            taskList={taskList}
            task={taskToUpdate}
          />
        </section>
        <section className={styles.task_list}>
          <h2>Suas tarefas</h2>
          <TaskList
            taskList={taskList}
            deleteTask={deleteTask}
            handleEdit={editTask}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
