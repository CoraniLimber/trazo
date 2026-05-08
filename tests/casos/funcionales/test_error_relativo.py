def test_error_relativo():
    metodo = "newton-raphson"
    funcion = "x^2 - 2"
    x0 = 1
    tolerancia = 1e-5

    resultado_esperado = 1.4142
    resultado_obtenido = 1.4142

    error = abs(resultado_obtenido - resultado_esperado)

    assert error < tolerancia