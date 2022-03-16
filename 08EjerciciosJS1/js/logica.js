function problema1(){
    
    var cap = parseInt(document.querySelector('#p1-input').value);

    var ganancia = (cap * 0.02);

    var total = (cap * 0.02) + cap;

    document.querySelector('#p1-output').textContent = 'Ganancia: $' + ganancia + '\n' +'Total ganado: $' + total;
 
}

function problema2(){
    
    var base = parseInt(document.querySelector('#p2-input1').value);

    var com_1 = (parseInt(document.querySelector('#p2-input2').value)*0.1);

    var com_2 = (parseInt(document.querySelector('#p2-input3').value)*0.1);

    var com_3 = (parseInt(document.querySelector('#p2-input4').value)*0.1);

    var totalcom = com_1 + com_2 + com_3;

    var totalfin = totalcom + base;

    document.querySelector('#p2-output').textContent = 'Total de Ganancia en comisiones: $' + totalcom + '\n' + 'Total mensual: $' + totalfin;

}

function problema3(){
     
    var totComp = parseInt(document.querySelector('#p3-input').value);

    var desc = totComp * 0.15;

    var tot = totComp - desc;

    document.querySelector('#p3-output').textContent = 'Descuento: $' + desc + '\n' + 'Total a pagar: $' + tot;
}

function problema4(){
    var cal1 = parseInt(document.querySelector('#p4-input1').value);

    var cal2 = parseInt(document.querySelector('#p4-input2').value);

    var cal3 = parseInt(document.querySelector('#p4-input3').value);

    var calEx = parseInt(document.querySelector('#p4-input4').value);

    var calTf = parseInt(document.querySelector('#p4-input5').value);

    var promPar = ( cal1 + cal2 +  cal3 )/3;

    var por1 = promPar * 0.55;

    var por2 = calEx * 0.3;

    var por3 = calTf * 0.15;

    var calFinal = por1 + por2 + por3;

    document.querySelector('#p4-output').textContent = 'Calificación Final: ' + calFinal;
}

function problema5(){

    var mujeres = parseInt(document.querySelector('#p5-input1').value);

    var hombres = parseInt(document.querySelector('#p5-input2').value);

    var totalAlumn = mujeres + hombres;

    var porMuj = (mujeres * 100)/totalAlumn;
    var porHom = (hombres * 100)/totalAlumn;

    document.querySelector('#p5-output').textContent = 'Total de Alumnos: ' + totalAlumn + '\n' + 'Porcentaje de Mujeres: ' + porMuj + '%' + '\n' + 'Porcentaje de Hombres: ' + porHom + '%';
}


function problema6(){

    var diaAct = parseInt(document.querySelector('#p6-input1').value);

    var mesAct = parseInt(document.querySelector('#p6-input2').value);

    var añoAct = parseInt(document.querySelector('#p6-input3').value);

    var diaNac = parseInt(document.querySelector('#p6-input4').value);

    var mesNac = parseInt(document.querySelector('#p6-input5').value);

    var añoNac = parseInt(document.querySelector('#p6-input6').value);

    edad = añoAct - añoNac;

    if(mesNac > mesAct){

        edad = edad - 1;

        if(mesNac == mesAct){

            if(diaNac > diaAct){

                edad = edad -1;
            

                if (diaNac == diaAct){

                    edad == edad
                }

            }
        }

    }

    document.querySelector('#p6-output').textContent = 'Tu edad es : ' + edad + ' años.';

}