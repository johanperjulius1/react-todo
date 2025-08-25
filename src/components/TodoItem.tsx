interface TodoItemProps {
    isCompleted: boolean;
    onToggle: () => void;
    userInput: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onEdit: () => void;
    onDelete: () => void;
}

export default function TodoItem({ isCompleted, onToggle, userInput, onChange, onEdit, onDelete }: TodoItemProps) {
    return (
        <div>
            <input
                type="checkbox"
                checked={isCompleted}
                onChange={onToggle}
            />
            <input
                type="text"
                placeholder="Enter todo..."
                onChange={onChange}
                value={userInput}
            />
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}