
function numGuiones(num, opc)
{
    let guiones = ''
    let totalGuiones = ''
    
    if(opc == 1)
        guiones = '-'
    else
        guiones = '='
        
    let str = num.toString();
    for(let o = 0; o < str.length; o++)
    {
        totalGuiones += guiones
    }
    return totalGuiones
}
function mostrar(num, opc)
{
    let espacios = '+'
    let separador = '|'
    
    console.log(espacios, numGuiones(num, opc), espacios)
    console.log(separador, num, separador)
    console.log(espacios, numGuiones(num, opc), espacios)
}

function sumarCuadros()
{
    const arrayNumeros = [1, 23, 453, 3267, 12354, 123456];
    let suma = 0
    
    for(let i = 0; i < arrayNumeros.length; i++)
    {
        mostrar(arrayNumeros[i], 1)
        suma += arrayNumeros[i]
    }
    mostrar(suma, 2)
    console.log('***** Fin *****')
}

//ejecutar funcion
sumarCuadros()