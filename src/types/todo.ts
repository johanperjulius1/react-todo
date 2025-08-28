export interface Todo {
    text: string;
    completed: boolean;
    isEdit?: boolean;
}

export type ListOfTodo = Todo[];

