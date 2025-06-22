import { Task as TaskType } from "@/types/task";

/**
 * Propiedades del componente TaskCard
 */
export interface TaskCardProps {
  task: TaskType;
  isExpanded: boolean;
  onToggle: () => void;
  onSelectTask: (taskId: string) => void;
}

/**
 * Propiedades del componente TaskList
 */
export interface TaskListProps {
  tasks: TaskType[];
  onTaskSelect: (taskId: string) => void;
}

/**
 * Propiedades del componente InitialScreen
 */
export interface InitialScreenProps {
  onTaskSelect?: (taskId: string) => void;
}
