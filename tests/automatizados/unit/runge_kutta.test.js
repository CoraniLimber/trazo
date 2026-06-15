import { euler } from '../../../src/edo/euler.js';
import { rungeKutta4 } from '../../../src/edo/runge_kutta_4.js';

describe('Métodos EDO', () => {
  const f = (t, y) => -y;
  const valorExacto = Math.exp(-0.1);

  test('Euler aproxima y(0.1) para dy/dt = -y', () => {
    const res = euler({
      f,
      x0: 0,
      y0: 1,
      h: 0.1,
      xFinal: 0.1
    });

    const ultimo = res.resultado[res.resultado.length - 1];
    const yEuler = ultimo[1];

    expect(yEuler).toBeCloseTo(valorExacto, 1);
  });

  test('RK4 es más preciso que Euler para la misma EDO', () => {
    const resEuler = euler({
      f,
      x0: 0,
      y0: 1,
      h: 0.1,
      xFinal: 0.1
    });

    const yEuler =
      resEuler.resultado[resEuler.resultado.length - 1][1];

    const resRK4 = rungeKutta4(
      f,
      1,
      0,
      0.1,
      0.1
    );

    const yRK4 = resRK4[resRK4.length - 1].y;

    const errorEuler = Math.abs(yEuler - valorExacto);
    const errorRK4 = Math.abs(yRK4 - valorExacto);

    expect(errorRK4).toBeLessThan(errorEuler);
  });

  test('h <= 0 lanza error', () => {
    expect(() =>
      rungeKutta4(f, 1, 0, 1, 0)
    ).toThrow();
  });

  test('RK4 retorna array de objetos { t, y }', () => {
    const resultado = rungeKutta4(
      f,
      1,
      0,
      0.1,
      0.1
    );

    expect(Array.isArray(resultado)).toBe(true);

    expect(resultado[0]).toHaveProperty('t');
    expect(resultado[0]).toHaveProperty('y');
  });
});