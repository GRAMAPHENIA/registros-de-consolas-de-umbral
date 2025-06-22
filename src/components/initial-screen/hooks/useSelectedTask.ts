// Ruta: /components/initial-screen/useSelectedTask.ts
import { useState } from "react";

// Hook personalizado para manejar la tarea seleccionada
export function useSelectedTask() {
  const [selectedTaskIndex, setSelectedTaskIndex] = useState<number | null>(
    null
  );

  // Alterna la tarea seleccionada: si ya está seleccionada, la deselecciona
  const toggleSelectedTask = (index: number) => {
    setSelectedTaskIndex((prev) => (prev === index ? null : index));
  };

  return { selectedTaskIndex, toggleSelectedTask };
}
