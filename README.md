# Trazo

> Trazo es una librería de métodos numéricos en JavaScript diseñado para resolver problemas matemáticos mediante métodos de aproximación.

## ¿Qué es?

Trazo es una librería en desarrollo que implementa distintos métodos numéricos para resolver sistemas de ecuaciones lineales y no lineales, realizar interpolaciones y aplicar integración numérica de manera sencilla.

## ¿Para quién es?

Este proyecto está dirigido a:
- Estudiantes de ingeniería
- Personas que estudian métodos numéricos
- Profesionales que necesiten hacer cálculos aproximados en JavaScript

## ¿Qué problema resuelve?

Trazo facilita la implementación de algoritmos matemáticos complejos, evitando que el usuario tenga que programarlos desde cero y permitiéndole enfocarse en su aplicación.

## Métodos numéricos disponibles

| Categoría                     | Método                              |
|-----------------------------|-------------------------------------|
| Sistemas lineales           | Eliminación de Gauss                |
| Sistemas lineales           | Gauss-Jordan                       |
| Sistemas lineales           | Descomposición LU                  |
| Sistemas lineales           | Jacobi                             |
| Sistemas lineales           | Gauss-Seidel                       |
| Ecuaciones no lineales      | Método de bisección                |
| Ecuaciones no lineales      | Método de la secante               |
| Ecuaciones no lineales      | Método de Newton-Raphson           |
| Ecuaciones no lineales      | Método de Falsa Posición           |
| Ecuaciones no lineales      | Método de Punto Fijo               |
| Interpolación               | Interpolación de Lagrange          |
| Interpolación               | Interpolación de Newton            |
| Interpolación               | Splines cúbicos                    |
| Integración numérica        | Regla del trapecio                 |
| Integración numérica        | Método de Simpson (1/3, 3/8)       |
| Integración numérica        | Cuadratura de Gauss                |
| Integración numérica        | Gauss-Legendre                     |
| Derivación numérica         | Diferencias finitas                |
| EDOs                        | Runge-Kutta 4 (RK4)                |
| Ajuste de curvas            | Mínimos cuadrados                  |

> Nota: Actualmente en desarrollo.

## Instalación

Clonar el repositorio:

    git clone https://github.com/sis-inf/trazo.git
    cd trazo

## Uso rápido

Ejemplo básico de uso esperado:
	import { biseccion } from 'trazo';
	const f = (x) => x * x - 4;
	const resultado = biseccion(f, 0, 3, 0.001);
	console.log("Raíz aproximada:", resultado);
    
## Documentación
Ver la carpeta [docs/](docs/)

## Contribuir
Ver [CONTRIBUTING.md](CONTRIBUTING.md)

## Licencia
MIT — ver [LICENSE](LICENSE)