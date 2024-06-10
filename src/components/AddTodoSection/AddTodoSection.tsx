import React, { useRef } from "react";
import AddTodoInput from "../AddTodoInput/AddTodoInput";
import styles from "./addTodoSection.module.css";

type Todo = {
	title: string;
	date: string;
	description: string;
	isCompleted: boolean;
	id: number;
}
type AddTodoProps = {	
	todos: Todo[],
	setTodos: (todos: Todo[]) => void
}

const AddTodoSection = ({ todos, setTodos }: AddTodoProps) => {
	const todoForm = useRef<HTMLFormElement>(null);

	const handleSubmitTodo = (event: React.SyntheticEvent)=> {
		event.preventDefault();
		if(todoForm.current) {
			const userFormData = new FormData(todoForm.current);
			const newTodo = Object.fromEntries(userFormData.entries()) as unknown as Todo;
			
			setTodos([...todos, newTodo])
		}
	}

	return (
		<>
			<form className={styles.addTodoSection} ref={todoForm} noValidate>
				<AddTodoInput id={"title"} type={"text"} />
				<AddTodoInput id={"dueDate"} type={"date"} />
				<AddTodoInput id={"description"} type={"textarea"} />
				<button onClick={(e)=>handleSubmitTodo(e)}>Add todo</button>
			</form>
		</>
	);
};

export default AddTodoSection;
