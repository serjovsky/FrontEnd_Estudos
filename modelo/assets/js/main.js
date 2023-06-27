function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm(evento){
        evento.preventDefault();

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        const imcUser = peso.value / (altura.value*altura.value);
        let tipo;

        if (imcUser<18.5){
            tipo = "Abaixo do peso";
        }
        else if(imcUser===18.5&&imcUser<=24.9){
            tipo = "Peso normal"
        }
        else if(imcUser>=25&&imcUser<=29.9){
            tipo = "Sobrepeso"
        }
        else if(imcUser>=30&&imcUser<=34.9){
            tipo = "Obesidade grau 1"
        }
        else if(imcUser>=35&&imcUser<=39.9){
            tipo = "Obesidade grau 2"
        }
        else{
            tipo = "Obesidade grau 3"
        }
        resultado.innerHTML += `<p>Seu IMC é: ${imcUser.toFixed(1)} (${tipo})</p>`;
    }
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
