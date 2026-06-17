/**
 * Módulo para verificar convergencia de métodos numéricos
 * @module utils/convergence
 */

/**
 * Verifica si un método ha convergido
 * @param {number} error - Error actual
 * @param {number} tolerancia - Tolerancia permitida
 * @returns {Object} Resultado con converged, error y tolerancia
 */
export function checkConvergence(error, tolerancia) {
    if (typeof error !== 'number' || isNaN(error)) {
        throw new Error('El error debe ser un número válido');
    }
    if (typeof tolerancia !== 'number' || isNaN(tolerancia) || tolerancia <= 0) {
        throw new Error('La tolerancia debe ser un número positivo');
    }
    return {
        converged: error <= tolerancia,
        error: error,
        tolerancia: tolerancia
    };
}

/**
 * Clase para manejar el historial de convergencia
 */
export class ConvergenceHistory {
    constructor() {
        this.historial = [];
    }

    /**
     * Agrega un error al historial
     * @param {number} error - Error a agregar
     */
    add(error) {
        if (typeof error !== 'number' || isNaN(error) || error < 0) {
            throw new Error('El error debe ser un número positivo');
        }
        this.historial.push(error);
    }

    /**
     * Obtiene todo el historial
     * @returns {number[]} Historial de errores
     */
    getAll() {
        return this.historial;
    }

    /**
     * Obtiene el último error
     * @returns {number} Último error
     */
    getLast() {
        return this.historial[this.historial.length - 1];
    }

    /**
     * Obtiene la cantidad de errores registrados
     * @returns {number} Longitud del historial
     */
    length() {
        return this.historial.length;
    }

    /**
     * Verifica si está convergiendo
     * @param {number} tolerancia - Tolerancia permitida
     * @returns {boolean} True si convergió
     */
    isConverging(tolerancia) {
        if (this.historial.length === 0) {
            return false;
        }
        return this.getLast() < tolerancia;
    }
}
