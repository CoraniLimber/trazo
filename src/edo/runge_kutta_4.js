export function rungeKutta4(f, y0, t0, tFinal, h) {
  if (typeof f !== 'function') {
    throw new Error('f debe ser una función');
  }

  if (h <= 0) {
    throw new Error('h debe ser mayor que 0');
  }

  const resultado = [];

  let t = t0;
  let y = y0;

  resultado.push({ t, y });

  while (t < tFinal) {
    const k1 = h * f(t, y);
    const k2 = h * f(t + h / 2, y + k1 / 2);
    const k3 = h * f(t + h / 2, y + k2 / 2);
    const k4 = h * f(t + h, y + k3);

    y = y + (k1 + 2 * k2 + 2 * k3 + k4) / 6;
    t = t + h;

    resultado.push({ t, y });
  }

  return resultado;
}
