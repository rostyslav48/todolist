import Todo from "./Todo";


const TodoList=({todoList, setTodoList})=>{
    return(<div>
        {todoList.map((todoItem)=>(
            <Todo key={todoItem.id} setTodoList={setTodoList} todoList={todoList} todoItem={todoItem}></Todo>
        ))}
    </div>)
};

export default TodoList;