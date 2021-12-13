function verResultado(){
    var palpite = document.getElementById('palpite').value;
    var numSort = Math.floor(Math.random() * 10)
    const resultado = document.querySelector('p');
    if( palpite == numSort){
        resultado.textContent = ('Voce ganhou!')
    }else{
        resultado.textContent = ('Voce perdeu! O numero era ' + numSort + '. Tente de novo.')
    }
}  
function jogarDeNovo(){
    var numSort = Math.floor(Math.random() * 10)

}
function JogarDeNovo(){
    window.location.reload();
} 