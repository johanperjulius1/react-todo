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
    return (
        <div className={styles.todoItem}>
            <div className={styles.checkboxContainer}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={onComplete}
                    className={styles.checkbox}
                />
                {todo.completed && (
                    <div className={styles.checkmark} />
                )}
            </div>
            {todo.isEdit ? (
                <input
                    type="text"
                    placeholder="Enter todo..."
                    onChange={onChange}
                    value={todo.text}
                    className={styles.todoInput}
                />
            ) : (
                <p className={`${styles.todoText} ${todo.completed ? styles.completed : ''}`}>
                    {todo.text}
                </p>
            )}
            {todo.isEdit ? (
                <button
                    onClick={onEdit}
                    className={styles.button}
                >
                    Save
                </button>
            ) : (
                <button
                    onClick={onEdit}
                    className={`${styles.button} ${styles.underline}`}
                >
                    Edit
                </button>
            )}
            <button
                onClick={onDelete}
                className={styles.button}
            >
                Delete
            </button>
        </div>
    )
}