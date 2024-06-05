import React from "react";
import styles from "./displayTodoSection.module.css";

type DisplayTodoPropType = {
	todos: {
		title: string;
		dueDate: string;
		description: string;
	}[];
};

const DisplayTodoSection = ({ todos }: DisplayTodoPropType) => {
	const headingClassName = `${styles.todoItem} ${styles.heading}`;
	return (
		<>
			<ul className={styles.todosList}>
				<li className={headingClassName}>
							<span className={styles.itemNum}></span>
							<span className={styles.itemNum}>Nr</span>
							<span>Task</span>
							<span>Due date</span>
							<span>Description</span>
							<span className={styles.itemNum}></span>
				</li>
				{todos.map((todo, index) => (
					<li key={index} className={styles.todoItem}>
						<input type="checkbox" className={styles.itemNum}/>
						<span className={styles.itemNum}>{index+1}</span>
						<span>{todo.title}</span>
						<span>{todo.dueDate}</span>
						<span>{todo.description}</span>
						<span className={styles.itemNum}><button>🗑️</button></span>
					</li>
				))}
			</ul>
		</>
	);
};

export default DisplayTodoSection;
