export function euler({ f, x0, y0, h, xFinal }) {
  if (h <= 0) {
    throw new Error("h debe ser mayor a 0");
  }

  if (xFinal <= x0) {
    throw new Error("xFinal debe ser mayor que x0");
  }

  let x = x0;
  let y = y0;

  const resultado = [[x, y]];
  let iteraciones = 0;

  while (x < xFinal) {
    y = y + h * f(x, y);
    x = x + h;

    resultado.push([x, y]);
    iteraciones++;
  }

  return {
    resultado,
    iteraciones
  };
}