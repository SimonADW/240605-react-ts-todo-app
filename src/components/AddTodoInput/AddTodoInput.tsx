import React from "react";
import styles from "./addTodoInput.module.css";

type InputPropsType = {
	id: string;
	type: string;
};

const AddTodoInput = ({ id, type }: InputPropsType) => {
	const capitalizedId = id.charAt(0).toUpperCase() + id.slice(1);

	return (
		<>
			<div className={styles.container}>
				<label htmlFor={id}>{capitalizedId}:</label>
				{type === "textarea" ? (
					<textarea
						name={id}
						id={id}
						className={id}
						rows={5}
					/>
				) : (
					<input
						type={type}
						name={id}
						id={id}
						className={id}
					/>
				)}
			</div>
		</>
	);
};

export default AddTodoInput;
