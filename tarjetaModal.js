var container = document.querySelector('.container');
const url = 'https://jsonplaceholder.typicode.com/posts'
fetch(url)
    .then(res => res.json())
    .then(matrizApi =>{       
        for(var i=0; i<matrizApi.length; i++){
        container.innerHTML += `
            <div class="card" style="width: 18rem;">
                <div class="card-body"><strong>"Usuario: ", ${matrizApi[i].userId}, "  id: ", ${matrizApi[i].id}</strong></div>
                    <div class="card-body">
                        <h5 class="card-title">${matrizApi[i].title}</h5>
                        <br>
                        <!--<p class="card-text">${matrizApi[i].body}</p>-->
                    
                        <button type="button" class="btn btn-primary" onclick='miModal("${matrizApi[i].userId}", "${matrizApi[i].id}")' data-bs-toggle="modal" data-bs-target="#exampleModal">Detalles</button>   
                    </div>
            </div>
            `
        }
    });  
 
function miModal(usuario, clave) {
    fetch(url)
    .then(res => res.json())
    .then(matrizApi =>{    
        for(var i=0; i<matrizApi.length; i++){
            if(matrizApi[i].userId == usuario   &&   matrizApi[i].id == clave){
                document.querySelector('.modal-title').innerHTML = matrizApi[i].title;
                document.querySelector('.modal-body').innerHTML = matrizApi[i].body;            
            };
        }; 
    });          
};