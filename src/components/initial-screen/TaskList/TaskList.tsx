import { Task } from "@/types/task";
import { TaskCard } from "@/components/initial-screen/TaskCard/TaskCard";

interface TaskListProps {
  tasks: Task[];
  expandedTaskIndex: number | null;
  onTaskToggle: (index: number) => void;
  onTaskSelect: (taskId: string) => void;
}

/**
 * Componente para mostrar la lista de tareas
 * Maneja la renderización de las tarjetas de tareas con animaciones
 */
export const TaskList = ({
  tasks,
  expandedTaskIndex,
  onTaskToggle,
  onTaskSelect,
}: TaskListProps) => (
  <div className="space-y-4">
    {tasks.map((task, index) => (
      <div
        key={task.id}
        className={`transition-all duration-500 ${
          expandedTaskIndex === index ? "mb-6" : "mb-4"
        } animate-fade-in-up`}
        style={{
          animationDelay: `${index * 200}ms`,
          opacity: 0,
        }}
      >
        <TaskCard
          task={task}
          isExpanded={expandedTaskIndex === index}
          onToggle={() => onTaskToggle(index)}
          onSelectTask={onTaskSelect}
        />
      </div>
    ))}
  </div>
);

export default TaskList;
