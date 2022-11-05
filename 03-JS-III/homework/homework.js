// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var total=0;
    for (var i = 0                 ; i <= 10                 ; i++          ) {
      // | Declaramos una variable | Expresión condcicional | Incrementamos la variable |
      total=total+i;
      }
      return total;
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var pares=[];
  for(numero of array){
    if(numero%2==0){
      pares.push(numero)//Agrega <numero> al array <pares>
    }
  }
  return pares;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  var cuadrados=[];
  for(numero of array){
  cuadrados.push(numero**2)//Agrega <numero> al array <pares>
  }
  return cuadrados;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  var suma=0;
  for(numero of array){
    suma=suma+numero;
  }
  return suma;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  numletter=num.toString();
  return(numletter.length);
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
