import styles from './TodoItem.module.css'
import type { Todo } from '../types/todo'

interface TodoItemProps {
    todo: Todo
    onComplete: () => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onEdit: () => void;
    onDelete: () => void;
}

export default function TodoItem({ todo, onComplete, onChange, onEdit, onDelete }: TodoItemProps) {
    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            onEdit()
        }
    }

    return (
        <div className={styles.todoItem}>
            <div className={styles.checkboxContainer}>
                <label htmlFor={`todo-${todo.id}`} className={styles.srOnly}>
                    Mark "{todo.text}" as {todo.completed ? 'incomplete' : 'complete'}
                </label>
                <input
                    id={`todo-${todo.id}`}
                    name={`todo-${todo.id}`}
                    type="checkbox"
                    checked={todo.completed}
                    onChange={onComplete}
                    className={styles.checkbox}
                    aria-label={`Mark "${todo.text}" as ${todo.completed ? 'incomplete' : 'complete'}`}
                />
                {todo.completed && (
                    <div className={styles.checkmark} />
                )}
            </div>
            {todo.isEdit ? (
                <div className={styles.editContainer}>
                    <label htmlFor={`edit-${todo.id}`} className={styles.srOnly}>
                        Edit todo text
                    </label>
                    <input
                        id={`edit-${todo.id}`}
                        name={`edit-${todo.id}`}
                        type="text"
                        placeholder="Enter todo..."
                        onChange={onChange}
                        onKeyDown={handleKeyDown}
                        value={todo.text}
                        className={styles.todoInput}
                        aria-describedby={`save-${todo.id}`}
                    />
                </div>
            ) : (
                <p className={`${styles.todoText} ${todo.completed ? styles.completed : ''}`}>
                    {todo.text}
                </p>
            )}
            {todo.isEdit ? (
                <button
                    id={`save-${todo.id}`}
                    onClick={onEdit}
                    className={styles.button}
                    aria-label={`Save changes to "${todo.text}"`}
                >
                    Save
                </button>
            ) : (
                <button
                    onClick={onEdit}
                    className={`${styles.button} ${styles.underline}`}
                    aria-label={`Edit "${todo.text}"`}
                >
                    Edit
                </button>
            )}
            <button
                onClick={onDelete}
                className={styles.button}
                aria-label={`Delete "${todo.text}"`}
            >
                Delete
            </button>
        </div>
    )
}