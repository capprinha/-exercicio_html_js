const form = document.getElementById('campo').addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = (document.getElementById('campoA').value);
    const seDerErro1 = (document.getElementById('campoA'))
    const seDerErro2 = (document.getElementById('campoB'))
    const campoB = (document.getElementById('campoB').value);
    const mensagemSus = '<b>Campos validados.</b>';
    const naoValido = '<b>Campos não são validos.</b>';
    const camposIguais = '##Campos são iguais##'

    if (campoB > campoA) {
        document.querySelector('.mensagemSus').innerHTML = mensagemSus
    }
    else if(campoA === campoB){
        document.querySelector('.error').innerHTML = camposIguais
        seDerErro1.style.border = '3px solid red'
        seDerErro2.style.border = '3px solid red'
    }
    else {
        document.querySelector('.mensagemSus').innerHTML = naoValido
    }
    
});



