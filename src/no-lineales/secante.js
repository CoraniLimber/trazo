// METODO DE LA SECANTE

function secante({ f, x0, x1, tolerancia = 1e-6, maxIter = 100 }) {
 
  if (typeof f !== "function") {
    throw new TypeError(
      `Trazo.secante: 'f' debe ser una función. Se recibió: ${typeof f}`
    );
  }
 
  if (typeof x0 !== "number" || isNaN(x0)) {
    throw new TypeError(
      `Trazo.secante: 'x0' debe ser un número válido. Se recibió: ${x0}`
    );
  }
 
  if (typeof x1 !== "number" || isNaN(x1)) {
    throw new TypeError(
      `Trazo.secante: 'x1' debe ser un número válido. Se recibió: ${x1}`
    );
  }
 
  if (x0 === x1) {
    throw new Error(
      `Trazo.secante: 'x0' y 'x1' no pueden ser iguales (${x0}). ` +
      `El método necesita dos puntos distintos como punto de partida.`
    );
  }
 
  if (typeof tolerancia !== "number" || tolerancia <= 0) {
    throw new TypeError(
      "Trazo.secante: 'tolerancia' debe ser un número positivo."
    );
  }
 
  if (typeof maxIter !== "number" || maxIter < 1 || !Number.isInteger(maxIter)) {
    throw new TypeError(
      "Trazo.secante: 'maxIter' debe ser un entero mayor a 0."
    );
  }
 
  let puntoAnterior  = x0;
  let puntoActual    = x1;
  const iteraciones  = [];
  let convergio      = false;
 
  for (let iter = 0; iter < maxIter; iter++) {
    const fAnterior = f(puntoAnterior);
    const fActual   = f(puntoActual);
 
    const denominador = fActual - fAnterior;
 
    if (denominador === 0) {
      throw new Error(
        `Trazo.secante: el denominador f(x1) - f(x0) es cero en la iteración ${iter + 1}. ` +
        `f(x0) = f(${puntoAnterior}) = ${fAnterior}, f(x1) = f(${puntoActual}) = ${fActual}. ` +
        `La secante es horizontal. Considera elegir puntos iniciales diferentes.`
      );
    }
 
    const x2 = puntoActual - fActual * (puntoActual - puntoAnterior) / denominador;
    iteraciones.push(x2);
 
    if (Math.abs(f(x2)) < tolerancia) {
      convergio = true;
      puntoActual = x2;
      break;
    }
 
    puntoAnterior = puntoActual;
    puntoActual   = x2;
  }
 
  return {
    resultado: puntoActual,
    iteraciones,
    convergio,
  };
}
 
export { secante };