import styles from './TodoItem.module.css'

interface TodoItemProps {
    isCompleted: boolean;
    onComplete: () => void;
    userInput: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onEdit: () => void;
    onDelete: () => void;
    isEdit: boolean;
}

export default function TodoItem({ isCompleted, onComplete, userInput, onChange, onEdit, onDelete, isEdit }: TodoItemProps) {
    return (
        <div className={styles.todoItem}>
            <div className={styles.checkboxContainer}>
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={onComplete}
                    className={styles.checkbox}
                />
                {isCompleted && (
                    <div className={styles.checkmark} />
                )}
            </div>
            {isEdit ? (
                <input
                    type="text"
                    placeholder="Enter todo..."
                    onChange={onChange}
                    value={userInput}
                    className={styles.todoInput}
                />
            ) : (
                <p className={`${styles.todoText} ${isCompleted ? styles.completed : ''}`}>
                    {userInput}
                </p>
            )}
            {isEdit ? (
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