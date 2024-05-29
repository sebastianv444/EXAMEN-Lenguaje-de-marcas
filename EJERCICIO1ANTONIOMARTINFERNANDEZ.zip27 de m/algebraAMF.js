function calculo(){
    //PRINCIPAL
    var numero = document.getElementById("numero").value,exponente = document.getElementById("exponente").value
    var divisor = document.getElementById("divisor").value
    //CONDICION PARA VER SI ES UN NUMERO
    if(isNaN(numero) || numero.trim() == ""){return alert("ingrese un numero porfavor")}

    var potencia = document.getElementById("potencia").checked,division = document.getElementById("division").checked
    var divisible = document.getElementById("divisible").checked,result = 0
    
    if(potencia == true){
        var operacion = "potencia"
        result = Math.pow(numero, exponente)
    }
    else if(division == true){
        var operacion = "division"
        result = numero / divisor
    }
    else if(divisible == true){
        var operacion = "divisible"
        result = numero % divisor
    }


    var tabla = document.getElementById("tabla"),tr = document.createElement("tr")
    tabla.hidden = false
    tabla.appendChild(tr)
    tr.appendChild(document.createElement("td"))
    
    tr.children[0].innerHTML = result
    
    tr.appendChild(document.createElement("td"))
   
    tr.children[1].innerHTML = operacion
    
}

function borrar(){
    var numero = parseInt(prompt("ingrese un numero para eliminar de la tabla"))
    var tablero = document.getElementById("tabla")
    if(numero >= 1 && numero <= tablero.children.length){tablero.removeChild(tablero.children[numero])}
    else{
        alert("recuerde ingresar un numero con la longitud de las filas")
    }
}