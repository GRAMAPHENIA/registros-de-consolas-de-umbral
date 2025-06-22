import { useState } from "react";
import { TaskCardHeader } from "./TaskCardHeader";
import { TaskCardContent } from "./TaskCardContent";
import { Task } from "@/types/task";

interface TaskCardProps {
  task: Task;
  isExpanded: boolean;
  onToggle: () => void;
  onSelectTask: (taskId: string) => void;
}

/**
 * Componente de tarjeta de tarea
 * Maneja el estado de expansión y renderiza el contenido de la tarea
 */
export const TaskCard = ({
  task,
  isExpanded,
  onToggle,
  onSelectTask,
}: TaskCardProps) => {
  return (
    <div
      className={`p-4 border border-dashed rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
        isExpanded
          ? "border-zinc-500/20 bg-zinc-900/5"
          : "border-zinc-500/20 border-dashed hover:border-zinc-500/50"
      }`}
      onClick={onToggle}
    >
      <TaskCardHeader task={task} isExpanded={isExpanded} onToggle={onToggle} />

      {/* Contenido colapsable */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isExpanded ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <TaskCardContent task={task} onSelectTask={onSelectTask} />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
