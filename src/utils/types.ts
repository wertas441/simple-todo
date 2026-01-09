export interface TasksDataStructure {
    id: number;
    label: string;
    description: string;
    isComplete: boolean;
    completeDate: string | null;
}

export interface InputErrorState {
    nameError: string | null;
    descriptionError: string | null;
}