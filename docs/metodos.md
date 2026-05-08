## Sistemas de Ecuaciones Lineales

| Nombre | Descripcion breve | Entrada esperada | Salida esperada | Estado |
|---|---|---|---|
|**Eliminación de Gauss**| Transforma el sistema en una matriz triangular superior y resuelve por sustitución regresiva | Matriz de coeficientes "A" (n×n), vector de términos independientes "b" | Vector solución "x" | Pendiente |
|**Gauss-Jordan**| Extiende la Eliminación de Gauss hasta obtener la matriz identidad, resolviendo directamente | Matriz de coeficientes "A" (n×n), vector "b" | Vector solución "x"| Pendiente |
|**Jacobi**| Método iterativo que actualiza todas las incógnitas simultáneamente en cada iteración | Matriz "A", vector "b", solución inicial "x0", tolerancia, máx. iteraciones | Vector solución aproximada "x" | Pendiente |



## Sistemas de Ecuaciones No Lineales

| Nombre | Descripcion breve | Entrada esperada | Salida esperada | Estado |
|---|---|---|---|
|**Biseccion**| Divide repetidamente un intervalo a la mitad hasta localizar la raíz | Función "f", extremos del intervalo [a, b], tolerancia | Raíz aproximada "x" | Pendiente |
|**Método de la Secante**| Aproxima la derivada usando dos puntos anteriores para converger a la raíz | Función "f", dos puntos iniciales "x0" y "x1", tolerancia | Raíz aproximada "x" | Pendiente |
|**Newton-Raphson**| Usa la función y su derivada para converger rápidamente a la raíz | Función "f", derivada "f'", punto inicial "x0", tolerancia | Raíz aproximada "x" | Pendiente |



## Interpolación

| Nombre | Descripcion breve | Entrada esperada | Salida esperada | Estado |
|---|---|---|---|
|**Interpolación de Lagrange**| Construye un polinomio que pasa exactamente por todos los puntos dados | Arreglo de puntos "x", arreglo de valores "y", punto a estimar "x_est" | Valor interpolado "y_est" | Pendiente |
|**Interpolación de Newton**| Usa diferencias divididas para construir el polinomio interpolante de forma incremental | Arreglo de puntos "x", arreglo de valores "y", punto a estimar "x_est" | Valor interpolado "y_est" y tabla de diferencias divididas | Pendiente |



## Integración Numérica


| Nombre | Descripcion breve | Entrada esperada | Salida esperada | Estado |
|---|---|---|---|
|**Regla del Trapecio**| Aproxima el área bajo la curva usando trapecios en cada subintervalo | Función "f", límites [a, b], número de subintervalos "n" | Valor aproximado de la integral | Pendiente |
|**Simpson 1/3**| Aproxima la integral usando polinomios de grado 2 en pares de subintervalos | Función "f", límites [a, b], número de subintervalos "n" (par) | Valor aproximado de la integral | Pendiente |

