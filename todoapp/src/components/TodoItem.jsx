import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  const itemDone = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <h3>
          <span className={itemDone} onClick={() => handleClick(item.name)}>
            {item.name}
          </span>{" "}
          <span>
            <button
              onClick={() => handleDelete(item)}
              className={styles.deleteButton}
            >
              X
            </button>
          </span>
        </h3>

        <hr className={styles.line} />
      </div>
    </div>
  );
}
