function calculando(){
    //importantes
    var numero = document.getElementById("numero").value
    
    var exponente = document.getElementById("exponente").value


    var divisor = document.getElementById("divisor").value

    if(isNaN(numero))return alert("ingrese un numero porfavor")

    //elecciones
    var potencia1 = document.getElementById("potencia").checked
    
    var division1 = document.getElementById("division").checked

    var divisible1 = document.getElementById("divisible").checked
    
    var resultadoFinal = 0
    
    if(potencia1 == true){
        var operacion = "potencia"
        Math.pow(numero, exponente)
    }
    else if(division1 == true){
        var operacion = "division"
        resultadoFinal = numero / divisor
    }
    else if(divisible1 == true){
        var operacion = "divisible"
        resultadoFinal = numero % divisor
    }

    var tabla = document.getElementById("tabla")
    //creacion de tabla
    tabla.hidden = false

    var tr = document.createElement("tr")
    tabla.appendChild(tr)

    tr.appendChild(document.createElement("td"))
    
    
    tr.children[0].innerHTML = resultadoFinal
    
    tr.appendChild(document.createElement("td"))
   
    tr.children[1].innerHTML = operacion
    
}

function borrando(){
    var numero = parseInt(prompt("ingrese un numero para eliminar de la tabla"))

    var tablon = document.getElementById("tabla")
    
    if(numero >= 1 && numero <= tablon.children.length){
        tablon.removeChild(tablon.children[numero])
    }
    else{
        alert("ingresaste algo mal")
    }
}