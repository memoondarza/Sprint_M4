function miLista(){
    var registros = document.querySelector(".contenedorFavoritos");
    
    if(matrizFavoritos.length != 0){
        document.getElementById("fBuscados").innerHTML = "";
        for(var i=0; i<matrizFavoritos.length; i++){        
                registros.innerHTML += `
                    <h4>APIs Favoritas</h4>        
                    <div class="card float-right">
                        <div class="row">
                        <div class="col-sm-12">
                        <div class="card-block">           
                            <div class="card-body"><strong>Usuario: ${matrizFavoritos[i].userId},  id: ${matrizFavoritos[i].id}</strong></div>
                                <div class="card-body">
                                    <h5 class="card-title"><strong>${matrizFavoritos[i].title}</strong></h5>
                                    <p class="card-title">${matrizFavoritos[i].body}</p>
                                </div>            
                        </div>
                        </div>
                        </div>               
                    </div>
                    `   
        };
    } else {
        document.getElementById("fBuscados").innerHTML = "No hay favoritos seleccionados";
    };
};

/*

*/