function verResultado(){
    const palpite = document.getElementById('palpite').value;
    const numSort = Math.floor(Math.random() * 10)
    const resultado = document.querySelector('p');
    
    if( palpite == numSort){
        resultado.textContent = ('Voce ganhou!')
    }else{
        resultado.textContent = ('Voce perdeu! O numero era ' + numSort + '. Tente de novo.')
        }
    }
 
function jogarDeNovo(){
    const numSort = Math.floor(Math.random() * 10)

}
function JogarDeNovo(){
    window.location.reload();
} 