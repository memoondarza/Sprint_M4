var favoritos= [];
//agrega datos al array
function agregarFavorito(){
    let favorito = document.getElementById('btnfavorito').value;

    favoritos.push(favorito);
}

//muestra los datos del array
function mostrarFavoritos(){
    let mostrar = document.getElementById('mostrar');
    mostrar.innerHTML = '';

    for(const favorito of favoritos){
        let favoritoText = document.createElement('p');
        favoritoText.innerHTML = favorito;
        mostrar.appendChild(favoritoText);
    }
}