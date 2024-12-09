function verificar() {
    var data = new Date()
    var ano  = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert    ('[Erro] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 13){
                img.setAttribute('src', 'imagens/menino.png')
            }
            else if ( idade >= 13 && idade < 25 ){
                img.setAttribute('src', 'imagens/joven1.png')
            }
            else if ( idade >= 25 && idade < 55 ){
                img.setAttribute('src', 'imagens/adulto1.png')
            }
            else{
                img.setAttribute('src', 'imagens/idoso.png')
            }
                
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 13){ img.setAttribute('src', 'imagens/menina.png')}
            else if ( idade >= 13 && idade < 25 ){ img.setAttribute('src', 'imagens/joven2.png')}
            else if ( idade >= 25 && idade < 55 ){ img.setAttribute('src', 'imagens/adulto2.png')}
            else{ img.setAttribute('src', 'imagens/idosa.png')}
        }
        res.style.textAlign = 'center'
        res.innerHTML = 'Detectamos '+ genero + ' com ' + idade + ' anos.'
        img.style.display = 'block'; 
        img.style.margin = '0 auto'; 
        res.appendChild(img)

    }
    
}