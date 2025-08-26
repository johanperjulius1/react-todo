interface TodoItemProps {
    isCompleted: boolean;
    onToggle: () => void;
    userInput: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onEdit: () => void;
    onDelete: () => void;
    isEdit: boolean;
}

export default function TodoItem({ isCompleted, onToggle, userInput, onChange, onEdit, onDelete, isEdit }: TodoItemProps) {
    return (
        <div>
            <input
                type="checkbox"
                checked={isCompleted}
                onChange={onToggle}
            />
            {isEdit ? (
                <input
                    type="text"
                    placeholder="Enter todo..."
                    onChange={onChange}
                    value={userInput}
                />
            ) : (
                <p>{userInput}</p>
            )}
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}