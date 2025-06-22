"use client";

import { useState } from "react";
import { tasks } from "@/data/tasks";
import { useTaskNavigation } from "./hooks/useTaskNavigation";
import TaskList from "./TaskList/TaskList";
import { InitialScreenProps } from "./types/task";

/**
 * Componente principal para la pantalla inicial
 * Muestra la lista de tareas disponibles para seleccionar
 */
export function InitialScreen({ onTaskSelect = () => {} }: InitialScreenProps) {
  const [expandedTaskIndex, setExpandedTaskIndex] = useState<number | null>(null);
  const { navigateToTask } = useTaskNavigation();

  /**
   * Maneja la selección de una tarea
   * @param taskId - ID de la tarea seleccionada
   */
  const handleTaskSelect = (taskId: string) => {
    // Navegar a la ruta específica de la tarea
    navigateToTask(taskId);
    
    // Llamar al manejador de selección de tarea
    onTaskSelect(taskId);
  };

  /**
   * Alterna la expansión de una tarea
   * @param index - Índice de la tarea a expandir/colapsar
   */
  const handleTaskToggle = (index: number) => {
    setExpandedTaskIndex(expandedTaskIndex === index ? null : index);
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

      <TaskList
        tasks={tasks}
        expandedTaskIndex={expandedTaskIndex}
        onTaskToggle={handleTaskToggle}
        onTaskSelect={handleTaskSelect}
      />
    </div>
  );
}

export default InitialScreen;
