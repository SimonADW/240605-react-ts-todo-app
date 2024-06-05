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
							<span>Task</span>
							<span>Due date</span>
							<span>Description</span>
				</li>
				{todos.map((todo, index) => (
					<li key={index} className={styles.todoItem}>
						<span>{todo.title}</span>
						<span>{todo.dueDate}</span>
						<span>{todo.description}</span>
					</li>
				))}
			</ul>
		</>
	);
};

export default DisplayTodoSection;
