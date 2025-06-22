import Image from "next/image";
import { Task } from "@/types/task";

interface TaskCardContentProps {
  task: Task;
  onSelectTask: (taskId: string) => void;
}

/**
 * Componente para el contenido de la tarjeta de tarea
 * Muestra el objetivo, lenguaje y errores de la tarea
 */
export const TaskCardContent = ({
  task,
  onSelectTask,
}: TaskCardContentProps) => (
  <div className="space-y-3 pt-2">
    {/* Objetivo de la tarea */}
    <div className="flex items-start text-sm text-muted-foreground">
      <Image
        src="/icons/book-open.svg"
        alt="Objetivo"
        width={16}
        height={16}
        className="mr-2 mt-0.5 flex-shrink-0 invert"
      />
      <p>{task.objetivo}</p>
    </div>

    {/* Lenguaje de programación */}
    <div className="flex items-center text-sm text-muted-foreground">
      <Image
        src="/icons/code.svg"
        alt="Lenguaje"
        width={16}
        height={16}
        className="mr-2 flex-shrink-0 invert"
      />
      <p>{task.lenguaje}</p>
    </div>

    {/* Indicador de errores */}
    {task.errores?.length > 0 && (
      <div className="flex items-center text-sm text-zinc-400">
        <Image
          src={"/icons/triangle-alert.svg"}
          alt="Errores"
          width={16}
          height={16}
          className="mr-2 flex-shrink-0 invert"
        />
        <p>{task.errores.length} error(es) por corregir</p>
      </div>
    )}

    {/* Pie de tarjeta con acción */}
    <div className="pt-3 border-dashed border-t border-zinc-400/30">
      <button
        onClick={(e) => {
          e.stopPropagation();
          onSelectTask(task.id);
        }}
        className="group flex items-center px-4 py-2 text-sm font-medium bg-primary/10 text-zinc-400 border border-zinc-400/30 rounded-md hover:bg-zinc-400/5 transition-all duration-200"
      >
        <Image
          src={"/icons/code.svg"}
          alt="Código"
          width={16}
          height={16}
          className="mr-2 text-zinc-400  invert"
        />
        <span className="text-zinc-400">Abrir Editor</span>
        <Image
          src={"/icons/arrow-right.svg"}
          alt=""
          width={16}
          height={16}
          className="ml-2 text-zinc-400 transition-transform duration-200 group-hover:translate-x-1 invert"
        />
      </button>
    </div>
  </div>
);
