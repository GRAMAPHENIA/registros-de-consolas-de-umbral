import { useRouter } from "next/navigation";
import { ROUTES, getTaskRoute } from "../constants/routes";

/**
 * Hook personalizado para manejar la navegación entre tareas
 * @returns Funciones para navegar entre tareas
 */
export const useTaskNavigation = () => {
  const router = useRouter();

  /**
   * Navega a la página de una tarea específica
   * @param taskId - ID de la tarea a la que navegar
   */
  const navigateToTask = (taskId: string): void => {
    const route = getTaskRoute(taskId);
    router.push(route);
  };

  return {
    navigateToTask,
  };
};
