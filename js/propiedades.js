function mostrarAlerta(){
    alert('Se hizo click');
}
function hacerCLick(){
    var lista =document.querySelectorAll('.boton button');
    for(var i = 0;i < lista.length;i++){
        lista[i].onclick = mostrarAlerta;
    } 
}