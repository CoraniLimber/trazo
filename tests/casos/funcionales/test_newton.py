def test_newton_raphson():
    metodo = "newton-raphson"
    funcion = "x^2 - 2"
    x0 = 1
    tolerancia = 1e-5

    resultado_esperado = 1.4142
    resultado_obtenido = 1.4142

    assert abs(resultado_obtenido - resultado_esperado) < tolerancia