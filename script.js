var numero1 = document.getElementById('valor1');
var numero2 = document.getElementById('valor2');
var btnLimpio = document.getElementById('limpio');
var resultado = document.getElementById('resultado')    
var btnsumar = document.getElementById('sumar')
var btnRestar = document.getElementById('restar');
var btnMultiplicar = document.getElementById('multiplicar');
var btnDividir = document.getElementById('dividir');


    function limpiar() {
        if(resultado.textContent === '' || numero1.value === '' && numero2.value === '') {
            resultado.textContent = 0;
        } else{
            numero1.value = '';
            numero2.value = '';
        }
            return false
    }     

    function limpiarResultado() {
        if(resultado.textContent !== '') {
            resultado.textContent = '';
        }
    }

    function noPermite() {
        if(numero1.value === '' || numero2.value === '') {
            alert('Tienes que agregar los dos valores');
            limpiar();
        }
    }

    btnLimpio.onclick = function(e) {
        limpiar();
        return false
    }

    function sumar() {
        limpiarResultado();
        resultado.textContent = parseFloat(numero1.value) + parseFloat(numero2.value);
    }

    btnsumar.onclick = function(e) {
        if(numero1.value !== '' && numero2.value !== '') {
        sumar();
        resultado.textContent;
        limpiar();
        } else {
            noPermite();
        }
        return false
    }


    function restar() {
        limpiarResultado();
        resultado.textContent = parseFloat(numero1.value) - parseFloat(numero2.value);
    }

    btnRestar.onclick = function(e) {
        if(numero1.value !== '' && numero2.value !== '') {
        restar();
        resultado.textContent;
        limpiar();
        }else {
            noPermite();
        }
        return false 
    }

    function multiplicar() {
        limpiarResultado();
        resultado.textContent = parseFloat(numero1.value) * parseFloat(numero2.value);
    }

    btnMultiplicar.onclick = function(e) {
        if(numero1.value !== '' && numero2.value !== '') {
        multiplicar();
        resultado.textContent;
        limpiar();
        } else {
            noPermite();
        }
        return false
    }

    function dividir() {
        limpiarResultado();
        resultado.textContent = parseFloat(numero1.value) / parseFloat(numero2.value);
    }

    btnDividir.onclick = function(e) {
        if(numero1.value !== '' && numero2.value !== '') {
        dividir();
        resultado.textContent;
        limpiar();
        } else {
            noPermite();
        }
        return false
    }

