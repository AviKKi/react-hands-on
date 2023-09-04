import styles from './todo.module.css'

function TodoItem() {
    const classNames = [styles.todoTile].join(' ')
  return <div className={classNames}><div className={styles.checkCircle}></div><span>Learn React</span></div>;
}
// reference https://dribbble.com/shots/3464129-Daily-UI-042-ToDo-List
export default function Todo() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>To Do List</h1>
      <h4 className={styles.subHeading}>Collect and Complete</h4>
      <div>
        <input className={styles.input}/>
        <button className={styles.addNewButton}>Add Task</button>
      </div>
        <div className={styles.todoList}>
            <TodoItem />
            <TodoItem />
        </div>
    </div>
  );
}
