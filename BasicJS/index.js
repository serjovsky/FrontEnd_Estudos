function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nomeUser = form.querySelector('.nome');
        const sobrenomeUser = form.querySelector('.sobrenome');
        const pesoUser = form.querySelector('.peso');
        const alturaUser = form.querySelector('.altura');

        pessoas.push({
            nome: nomeUser.value,
            sobrenome: sobrenomeUser.value,
            peso: pesoUser.value,
            altura: alturaUser.value,
        });
        console.log(pessoas);

        resultado.innerHTML += `<p>${nomeUser.value} ${sobrenomeUser.value} `+
        `${pesoUser.value} ${alturaUser.value}</p>`;
    }
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();