function Contar() {
    var Ninicio = Number(document.getElementById('inicio').value);
    var Nfim = Number(document.getElementById('fim').value);
    var Npasso = Number(document.getElementById('passo').value) || 1;
    var Escrever = document.getElementById('resp');

    Escrever.innerHTML = `Contagem: <br>`;

    if(Ninicio == 0 || Nfim == 0){
        window.alert('Faltam dados');
        return;
    } else if (Ninicio > Nfim){
        for(let i = Ninicio ;i >= Nfim; i = i - Npasso){
        Escrever.innerHTML += `\u{1F449} ${i} `;
        }
    } else {
    for(let i = Ninicio ;i <= Nfim; i = i + Npasso){
        Escrever.innerHTML += `\u{1F449} ${i} `;
    }
    }

    Escrever.innerHTML += ` \u{1F3C1}`
    
}
