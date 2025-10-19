function adicionar() {
    const numInput = document.getElementById('num');
    const lista = document.getElementById('lista');
    const num = Number(numInput.value);

    if (num < 1 || num > 100 || isNaN(num)) {
        alert('Por favor, insira um número válido entre 1 e 100.');
        return;
    }

    const option = document.createElement('option');
    option.text = `Valor ${num} adicionado.`;
    lista.appendChild(option);
    numInput.value = '';
}

function finalizar() {
    const lista = document.getElementById('lista');
    const resultado = document.getElementById('resultado');

    if (lista.length === 0) {
        alert('Adicione pelo menos um número antes de finalizar.');
        return;
    }

    const valores = Array.from(lista.options).map(option => Number(option.text.match(/\d+/)[0]));
    const total = valores.length;
    const maior = Math.max(...valores);
    const menor = Math.min(...valores);
    const soma = valores.reduce((acc, val) => acc + val, 0);
    const media = soma / total;

    resultado.innerHTML = `
        <p>Total de números: ${total}</p>
        <p>Maior valor: ${maior}</p>
        <p>Menor valor: ${menor}</p>
        <p>Soma dos valores: ${soma}</p>
        <p>Média dos valores: ${media.toFixed(2)}</p>
    `;
}


