var cardex = document.querySelector('.contenedorTarjetas');
var matrizFavoritos = [];

const url = 'https://jsonplaceholder.typicode.com/posts'
fetch(url)
    .then(res => res.json())
    .then(matrizApi =>{       
        for(var i=0; i<matrizApi.length; i+=1){
        cardex.innerHTML += `
            <div class="row">
                <div class="col-md-4">
                <div class="card">
                <div class="card-block">           
                    <div class="card-body"><strong>Usuario: ${matrizApi[i].userId},  id: ${matrizApi[i].id}</strong></div>
                        <div class="card-body">
                            <h5 class="card-title">${matrizApi[i].title}</h5>
                            <br>                          
                            <button type="button" class="btn btn-primary" onclick='miModal(${matrizApi[i].userId}, ${matrizApi[i].id})' data-bs-toggle="modal" data-bs-target="#exampleModal">Detalles</button>   
                            <button type="button" class="btn btn-warning" onclick='misFavoritos(${matrizApi[i].userId}, ${matrizApi[i].id})' data-bs-toggle="modal" data-bs-target="#example2Modal">Añadir a Favoritos</button>
                            </div>            
                </div>
                </div>
                </div>

            </div>
            `
        }
    });  
 
function miModal(usuario, claveId) {
    fetch(url)
    .then(res => res.json())
    .then(matrizApi =>{    
        for(var i=0; i<matrizApi.length; i++){
            if(matrizApi[i].userId == usuario   &&   matrizApi[i].id == claveId){
                document.querySelector('.modal-title').innerHTML = matrizApi[i].title;
                document.querySelector('.modal-body').innerHTML = matrizApi[i].body;            
            };
        }; 
    });          
};


function misFavoritos(usuario, claveId) {  
    
    fetch(url)
    .then(res => res.json())
    .then(matrizApi =>{           
        for(var i=0; i<matrizApi.length; i++){
            if(matrizApi[i].userId === usuario   &&   matrizApi[i].id === claveId){
                matrizFavoritos.push({userId: matrizApi[i].userId, id: matrizApi[i].id, title: matrizApi[i].title, body: matrizApi[i].body});   
                
            }
        }
    })
    
};     
