// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  n=array.length
  return array[n-1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(i=0;i<array.length;i++){
    array[i] = (array[i]) + 1;
  }
  return array
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código: 
  var a =  ""
  for (i in palabras){
    if (palabras[i] === palabras[palabras.length-1]){
      a = a + palabras[i] 
    }
    else(a = a + palabras[i] + " ")
  }return a
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (i in array){
    if (array[i] == elemento){
      return true
    }
  }return false
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var sum = 0
  for (i in numeros){
    sum+=numeros[i]
  }
  return sum
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  sum = 0
  prom = 0.0
  cant = 0.0
  for (i in resultadosTest){
      sum+=resultadosTest[i]
      cant+=1
  }
  prom = sum/cant
  return prom
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  mayor = numeros[0]
  for(i in numeros){
    if (numeros[i]>mayor){
      mayor = numeros[i]
    }
  }return mayor
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  mult = 1
  let argu = Array.from(arguments)
  if (argu.length == 1){
    return argu[0]
  }else if (argu.length == 0){
    return 0
  }else{
    for (i in arguments){
      mult = mult * arguments[i]
    }return mult
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  count = 0
  for(i in arreglo){
    if(arreglo[i] > 18){
      count+=1
    }
  }
  return count
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  days=["","Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
  for (i in days){
    if (days[numeroDeDia] ==  "Domingo" || days[numeroDeDia] ==  "Sabado"){return "Es fin de semana"}
    else{return "Es dia Laboral"}
  }

} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let ns= String(n).slice(0,1)
  if (ns == "9"){return true}
  else{return false}
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  elem = arreglo[0]
  equal = true
  for(i in arreglo){
    if(arreglo[i]!=elem){
      equal = false
    }
  }return equal
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  newarray = []
  for (i in array){
    if (array[i]=="Enero" || array[i]=="Marzo" || array[i]=="Noviembre"){
      newarray.push(array[i])
    }
  }
  for (i in newarray){
    if ("Enero" == newarray[i]){
      key1=true
    }else if ("Marzo" == newarray[i]){
      key2=true
    }else if ("Noviembre" == newarray[i]){
      key3=true
    }
  }if (newarray.length==3){
    return newarray
  }else{
    return "No se encontraron los meses pedidos"}
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  newarr = []
  for(i in array){
    if (array[i] > 100){
      newarr.push(array[i])
    }
  }return newarr
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  newarray = []
  for(let i=0;i<10;i++){
    numero+=2
    newarray.push(numero)
    if (numero == i){
      return "Se interrumpió la ejecución"
    }
  }return newarray
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  newarray=[]
  for(let i=0;i<10;i++){
    if (i!=5){
      numero+=2
      newarray.push(numero)}
    else{continue}
  }return newarray
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
