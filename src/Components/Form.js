import styles from "../style.module.css";
import shortid from 'shortid';

const Form = ({todo, setTodo, todoList, setTodoList}) =>{
    const handleChange=(event)=>{
        setTodo(event.target.value);
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        setTodoList([...todoList, {name: todo, id: shortid.generate()}]);
        setTodo('');
    };

    return(<div className={styles.todo__form}>
        <form onSubmit={handleSubmit}>
            <input value={todo} onChange={handleChange} className={styles.todo__input} placeholder="Add Todo item"></input>
            <button type="submit" className={styles.todo__button}>Add</button>
        </form>
    </div>);
    
};

export default Form;