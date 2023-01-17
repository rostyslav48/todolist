import styles from "../style.module.css";

const Todo=({todoItem, todoList, setTodoList})=>{
    const deleteTodo = () =>{
        setTodoList(todoList.filter(item => item.id !== todoItem.id));
    };
    return(<div>
                <div className={styles.todo__item}>
                    <h3 className={styles.todo__name}>{todoItem.name}</h3>
                    <button onClick={deleteTodo} className={styles.delete__button}>Done</button>
                </div>
            </div>);
};

export default Todo;