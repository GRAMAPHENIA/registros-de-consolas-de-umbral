// Ruta: /components/initial-screen/TaskItem.tsx
// Importaciones de iconos locales
interface IconProps extends React.HTMLAttributes<HTMLImageElement> {
  className?: string;
}

const BookOpen = ({ className = "", ...props }: IconProps) => (
  <img
    src="/icons/book-open.svg"
    alt="Libro abierto"
    className={`w-4 h-4 ${className}`}
    {...props}
  />
);

const Code = ({ className = "", ...props }: IconProps) => (
  <img
    src="/icons/code.svg"
    alt="Código"
    className={`w-4 h-4 ${className}`}
    {...props}
  />
);

const AlertTriangle = ({ className = "", ...props }: IconProps) => (
  <img
    src="/icons/triangle-alert.svg"
    alt="Alerta"
    className={`w-4 h-4 ${className}`}
    {...props}
  />
);

const ChevronDown = ({ className = "", ...props }: IconProps) => (
  <img
    src="/icons/chevron-down.svg"
    alt="Desplegar"
    className={`w-4 h-4 ${className}`}
    {...props}
  />
);

const ChevronUp = ({ className = "", ...props }: IconProps) => (
  <img
    src="/icons/chevron-up.svg"
    alt="Contraer"
    className={`w-4 h-4 ${className}`}
    {...props}
  />
);

const ArrowRight = ({ className = "", ...props }: IconProps) => (
  <img
    src="/icons/arrow-right.svg"
    alt="Flecha derecha"
    className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${className}`}
    {...props}
  />
);

interface TaskItemProps {
  task: any;
  index: number;
  isSelected: boolean;
  onToggle: () => void;
  onOpen: () => void;
}

// Componente visual para representar una tarea individual
export function TaskItem({
  task,
  isSelected,
  onToggle,
  onOpen,
}: TaskItemProps) {
  return (
    <div
      className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
        isSelected
          ? "border-primary bg-primary/10"
          : "border-border hover:border-primary/50"
      }`}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-mono font-medium">{task.titulo}</h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">
            Nivel {task.nivel}
          </span>
          {isSelected ? <ChevronUp /> : <ChevronDown />}
        </div>
      </div>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isSelected ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-3 pt-2 text-sm text-muted-foreground">
            {/* Objetivo de la tarea */}
            <div className="flex items-start">
              <BookOpen className="mr-2 mt-0.5" />
              <p>{task.objetivo}</p>
            </div>

            {/* Lenguaje involucrado */}
            <div className="flex items-center">
              <Code className="w-4 h-4 mr-2" />
              <p>{task.lenguaje}</p>
            </div>

            {/* Errores a corregir (si hay) */}
            {task.errores?.length > 0 && (
              <div className="flex items-center text-amber-500">
                <AlertTriangle className="mr-2" />
                <p>{task.errores.length} error(es) por corregir</p>
              </div>
            )}

            {/* Botón para abrir el editor de la tarea */}
            <div className="pt-3 mt-2 border-t border-border/50">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpen();
                }}
                className="group flex items-center px-4 py-2 text-sm font-medium bg-primary/10 text-yellow-400 border border-yellow-400/30 rounded-md hover:bg-yellow-400/20"
              >
                <Code className="mr-2" />
                <span>Abrir Editor</span>
                <ArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
