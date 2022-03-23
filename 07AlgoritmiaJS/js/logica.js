//Problema 1.

function problema1(){

    var p1_input = document.getElementById("p1-input").value;

    var palabra1 = p1_input.split(" ");

    var palabra2 = [];

    for(i = (palabra1.length-1); i > -1; i--){

        palabra2.push(palabra1[i]);

    }

    document.querySelector("#p1-output").textContent = palabra2;

}


//Problema 2.

function problema2(){

    var x1 = document.getElementById('p2-x1').value;
    var x2 = document.getElementById('p2-x2').value;
    var x3 = document.getElementById('p2-x3').value;
    var x4 = document.getElementById('p2-x4').value;
    var x5 = document.getElementById('p2-x5').value;
    var y1 = document.getElementById('p2-y1').value;
    var y2 = document.getElementById('p2-y2').value;
    var y3 = document.getElementById('p2-y3').value;
    var y4 = document.getElementById('p2-y4').value;
    var y5 = document.getElementById('p2-y5').value;

    var resultados = (x1 * y1) + (x2 * y2) + (x3 * y3) + (x4 * y4) + (x5 * y5);


    document.querySelector('#p2-output').textContent = resultados; 

}


//Problema  3.

function problema3(){

//Definir alfabeto.
    var alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
                    'M','N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',
                    'X', 'Y', 'Z'];
    
    
    //Vamos a obtener la entrada de los datos.

    var p3_input = document.querySelector('#p3-input').value;

    var p3_palabras =  p3_input.split(',');


    //Tengo que eliminar los espacios.


    p3_palabras = p3_palabras.map(function (palabra){
        //Crear una expresión que me recupere las palabras.
        return palabra.replace(/\s/g, '').toUpperCase();
    });


    //Tengo que calcular cuántos caracteres únicos hay.
    var p3_res = '';

    p3_palabras.forEach(function (palabra, i){
        //Separar las palabras actuales del array, que 
        //contiene cada letras de dicha  palabra.
        var letras_unicas =  [];
        var  palabra_array  = palabra.split('');

        //Iteración.
        alfabeto.forEach(function (letra, j){
            //Itero la palabra.
            palabra_array.forEach(function (letras_palabras, k){

                //Comprobar que la letras esté dentro del alfabeto.

                if(letras_palabras == letra){
                        //Si la letras no la hemos contado
                        //la agregamos  a un array para contener
                        //las letras únicas.
                        if(letras_unicas.indexOf(letra)<0){
                        letras_unicas.push(letra);
                        }
                }
            });
        });

        p3_res += 'Palabra: ' + palabra + ' = ' + letras_unicas.length + '\n';

    });


    document.querySelector('#p3-output').textContent = p3_res;

}

