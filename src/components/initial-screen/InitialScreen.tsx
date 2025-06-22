"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const iconPath = "/icons";
import { tasks } from "@/data/tasks";

interface InitialScreenProps {
  onTaskSelect?: (taskId: string) => void;
}

export function InitialScreen({ onTaskSelect = () => {} }: InitialScreenProps) {
  const router = useRouter();
  const [tareaSeleccionada, setTareaSeleccionada] = useState<number | null>(
    null
  );

  console.log("Inicializando componente InitialScreen");

  // Función para renderizar una tarea
  const renderTarea = (tarea: any, index: number) => {
    console.log("Renderizando tarea:", tarea.id);
    const esSeleccionada = tareaSeleccionada === index;

    return (
      <div
        key={tarea.id}
        className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
          esSeleccionada
            ? "border-primary bg-primary/10"
            : "border-border hover:border-primary/50"
        }`}
        onClick={() => setTareaSeleccionada(esSeleccionada ? null : index)}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-mono font-medium">{tarea.titulo}</h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">
              Nivel {tarea.nivel}
            </span>
            <Image
              src={`${iconPath}/chevron-${esSeleccionada ? "up" : "down"}.svg`}
              alt={esSeleccionada ? "Contraer" : "Expandir"}
              width={16}
              height={16}
              className="text-muted-foreground transition-transform duration-300"
            />
          </div>
        </div>

        <div
          className={`grid transition-all duration-500 ease-in-out ${
            esSeleccionada ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="space-y-3 pt-2">
              <div className="flex items-start text-sm text-muted-foreground">
                <Image
                  src={`${iconPath}/book-open.svg`}
                  alt="Objetivo"
                  width={16}
                  height={16}
                  className="mr-2 mt-0.5 flex-shrink-0"
                />
                <p>{tarea.objetivo}</p>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Image
                  src={`${iconPath}/code.svg`}
                  alt="Lenguaje"
                  width={16}
                  height={16}
                  className="mr-2 flex-shrink-0"
                />
                <p>{tarea.lenguaje}</p>
              </div>
              {tarea.errores?.length > 0 && (
                <div className="flex items-center text-sm text-amber-500">
                  <Image
                    src={`${iconPath}/triangle-alert.svg`}
                    alt="Errores"
                    width={16}
                    height={16}
                    className="mr-2 flex-shrink-0"
                  />
                  <p>{tarea.errores.length} error(es) por corregir</p>
                </div>
              )}
              <div className="pt-3 mt-2 border-t border-border/50">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Navegando a la tarea:", tarea.id);
                    // Navegar a la ruta específica de la tarea usando el router de Next.js
                    if (tarea.id === "tarea-var-let") {
                      router.push("/alcance-de-variables");
                    } else {
                      // Para otras tareas, usar el manejador original
                      onTaskSelect(tarea.id);
                    }
                  }}
                  className="group flex items-center px-4 py-2 text-sm font-medium bg-primary/10 text-yellow-400 border border-yellow-400/30 rounded-md hover:bg-yellow-400/20 transition-all duration-200"
                >
                  <Image
                    src={`${iconPath}/code.svg`}
                    alt="Código"
                    width={16}
                    height={16}
                    className="mr-2 text-yellow-400"
                  />
                  <span className="text-yellow-400">Abrir Editor</span>
                  <Image
                    src={`${iconPath}/arrow-right.svg`}
                    alt=""
                    width={16}
                    height={16}
                    className="ml-2 text-yellow-400 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2 animate-fade-in">
          Consola de Desarrollo
        </h1>
        <p
          className="text-muted-foreground animate-fade-in"
          style={{ animationDelay: "100ms" }}
        >
          Selecciona una tarea para comenzar
        </p>
      </div>

      <div className="space-y-4">
        {tasks.map((task, index) => (
          <div
            key={task.id}
            className={`transition-all duration-300 ${
              tareaSeleccionada === index ? "mb-6" : "mb-4"
            } animate-fade-in-up`}
            style={{
              animationDelay: `${index * 100}ms`,
              opacity: 0,
            }}
          >
            {renderTarea(task, index)}
          </div>
        ))}
      </div>
    </div>
  );
}
