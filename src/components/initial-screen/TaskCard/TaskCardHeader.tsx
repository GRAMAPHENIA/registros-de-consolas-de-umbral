import Image from "next/image";
import { Task } from "@/types/task";

interface TaskCardHeaderProps {
  task: Task;
  isExpanded: boolean;
  onToggle: () => void;
}

/**
 * Componente para la cabecera de la tarjeta de tarea
 * Muestra el título, nivel y botón de expandir/colapsar
 */
export const TaskCardHeader = ({
  task,
  isExpanded,
  onToggle,
}: TaskCardHeaderProps) => (
  <div className="flex items-center justify-between">
    <h3 className="text-lg font-mono font-medium">{task.titulo}</h3>
    <div className="flex items-center space-x-2">
      <span className="text-sm text-muted-foreground">Nivel {task.nivel}</span>
      <Image
        src={`/icons/chevron-${isExpanded ? "up" : "down"}.svg`}
        alt={isExpanded ? "Contraer" : "Expandir"}
        width={16}
        height={16}
        className="text-muted-foreground transition-transform duration-300"
      />
    </div>
  </div>
);
