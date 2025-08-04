function verificar() {
    var escrever = document.getElementById('resp');
    var recebenascimento = document.getElementById('nascimento');
    var radsex = document.getElementsByName('genero');

    var nascimento = Number(recebenascimento.value);
    var anoatual = new Date();
    var ano = anoatual.getFullYear();
    var idade = ano - nascimento;

    
    var img = document.createElement('img');
    img.setAttribute ('id', 'foto')
    var genero = '';


    if (nascimento > ano) {
        img.setAttribute('src', 'https://veja.abril.com.br/wp-content/uploads/2016/06/alx_robo-filme-20150429-95_original.jpeg?quality=70&strip=info&w=414&h=280&crop=1')
        escrever.innerHTML = `voce é do futuro`
        escrever.appendChild(img);
        escrever.style.textAlign = 'center';
        img.style.display = 'block';
        img.style.margin = '10px auto';

        return;
    }

    //verifica homem ou mulher e imagem que deve mostrar
    if (radsex[0].checked) {
        genero = 'Homem';
        if (idade >=0 && idade <= 10){
            img.setAttribute('src', 'https://png.pngtree.com/thumb_back/fh260/background/20221203/pngtree-little-child-smiling-men-father-male-photo-image_4632242.jpg');
        } else if ( idade > 10 && idade <= 21) {
            img.setAttribute('src', 'https://us.123rf.com/450wm/michaeljung/michaeljung1306/michaeljung130600298/20235392-portrait-of-happy-male-high-school-student-smiling.jpg');
        } else if ( idade > 21 && idade < 50) {
            img.setAttribute('src', 'https://st.depositphotos.com/2018053/4367/i/950/depositphotos_43671885-stock-photo-portrait-of-adult-man.jpg');

        } else {
            img.setAttribute('src', 'https://media.istockphoto.com/id/1483109187/pt/foto/man-outdoor-senior-happy-retirement-elderly-portrait-male-active-park-smiling-old-fun-nature.jpg?s=612x612&w=0&k=20&c=EFnXZb3clSx-L-aXv0ssWD3m46AuWsTOhl8eVEtpWjE=');
        }
    } else if (radsex[1].checked) {
        genero = 'Mulher';
        if (idade >=0 && idade <= 10){
            img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLYlTjFNrNBe0uFi0XerAVhtv9LHiJwKPcOg&s');
        } else if ( idade > 10 && idade <= 21) {
            img.setAttribute('src', 'https://img.cdndsgni.com/preview/10440398.jpg');
        } else if ( idade > 21 && idade < 50) {
            img.setAttribute('src', 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');

        } else {
            img.setAttribute('src', 'https://media.istockphoto.com/id/1150346585/pt/foto/close-up-portrait-of-happy-senior-woman-portrait.jpg?s=612x612&w=0&k=20&c=WCZcm11pPPAarFLdO589OUc8UNWxP-idjUK-nWd0zxQ=');
        }
    }

    //escreve idade e sexo e img
    if (nascimento < 1900) {
        escrever.innerHTML = `Insira uma data válida.`;
        img.setAttribute('src', 'https://pbs.twimg.com/tweet_video_thumb/GMdEddAXcAAVO0o.jpg')
        escrever.appendChild(img)
        escrever.style.textAlign = 'center';
        img.style.display = 'block';
        img.style.margin = '10px auto';
        return;
    } else if (genero == ''){
        escrever.innerHTML = `Selecione seu genero`;
        return;
    } else {
        escrever.innerHTML = `Identificamos um(a) ${genero} com ${idade} anos.`;
        escrever.appendChild(img)
    }

    if (nascimento > ano) {
        escrever.innerHTML = `voce é do futuro`
    }
 
}
