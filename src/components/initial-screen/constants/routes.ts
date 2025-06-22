/**
 * Rutas de la aplicación
 * Centraliza todas las rutas para facilitar su mantenimiento
 */
export const ROUTES = {
  HOME: "/",
  VARIABLE_SCOPE: "/alcance-de-variables",
  // Añadir más rutas según sea necesario
} as const;

/**
 * Obtiene la ruta para una tarea específica
 * @param taskId - ID de la tarea
 * @returns Ruta correspondiente a la tarea
 */
export const getTaskRoute = (taskId: string): string => {
  const routes: Record<string, string> = {
    "tarea-var-let": ROUTES.VARIABLE_SCOPE,
    // Mapear otros IDs de tareas a sus rutas
  };

  return routes[taskId] || ROUTES.HOME;
};
