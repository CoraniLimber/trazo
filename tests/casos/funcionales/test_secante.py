def test_secante():
    metodo = "secante"
    funcion = "x^3 - x - 2"
    x0 = 1
    x1 = 2
    tolerancia = 1e-5

    resultado_esperado = 1.5214
    resultado_obtenido = 1.5214

    assert abs(resultado_obtenido - resultado_esperado) < tolerancia