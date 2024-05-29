function calculos(){

    var pedir = document.getElementById("numero").value, exponente = document.getElementById("exponente").value, divisor = document.getElementById("divisor").value

    if(isNaN(pedir)){
        return alert("ingrese un numero porfavor")
    }
    //opciones a elegir
    var potencia = document.getElementById("potencia").checked
    var division = document.getElementById("division").checked, divisible = document.getElementById("divisible").checked, resultado = 0
    if(potencia == true){
        var operacion = "potencia"
        Math.pow(pedir, exponente)
    }else if(division == true){
        var operacion = "division"
        resultado = pedir / divisor
    }else if(divisible == true){
        var operacion = "divisible"
        resultado = pedir % divisor == 0
    }   

    var tabla = document.getElementById("tabla")
    tabla.hidden = false
    var tr = document.createElement("tr")
    tabla.appendChild(tr)


    tr.appendChild(document.createElement("td"))
    tr.children[0].innerHTML = resultado
    tr.appendChild(document.createElement("td"))
    tr.children[1].innerHTML = operacion
    
}

function borrar(){
    var numero = parseInt(prompt("ingrese un numero para eliminar de la tabla"))
    var tabla = document.getElementById("tabla")
    if(numero >= 1 && numero <= tabla.children.length){
        tabla.removeChild(tabla.children[numero])

        /**
         * PORSIACASO
         * var tabla = tabla.chidren[1].remove
         */
    }else{
        alert("INCORRECTO")
    }
}