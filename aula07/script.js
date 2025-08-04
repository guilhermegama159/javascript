function Gerar(){
    var Numero = window.document.getElementById('numero')
    var tab = window.document.getElementById('tabuada')

    var n = Number(Numero.value)  

    tab.innerHTML = ''

    if(n == 0){
        window.alert('Adicione um numero acima ou abaixo de 0')
        return;
    }
    for(c = 1; c <= 10; c++){
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}` ;
        tab.appendChild(item)
    }
}