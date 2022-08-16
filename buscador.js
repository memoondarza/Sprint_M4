class FormaApi {
    constructor(userId, id, title, body) {
        var _userId = userId;
        var _id = id;
        var _title = title;
        var _body = body;


        Object.defineProperty(this, "_getUserId", {
            get: function () {
                return _userId;
            }
        });
        Object.defineProperty(this, "_setUserId", {
            set: function (userId) {
                _userId = userId;
            }
        });

        Object.defineProperty(this, "_getTitle", {
            get: function () {
                return _title;
            }
        });
        Object.defineProperty(this, "_setTitle", {
            set: function (title) {
                _title = title;
            }
        });

        Object.defineProperty(this, "_getId", {
            get: function () {
                return _id;
            }
        });
        Object.defineProperty(this, "_setId", {
            set: function (id) {
                _id = id;
            }
        });

        Object.defineProperty(this, "_getBody", {
            get: function () {
                return _body;
            }
        });
        Object.defineProperty(this, "_setBody", {
            set: function (body) {
                _body = body;
            }
        });
    }
    getTitle() {
        return this._getTitle;
    }
    setTitle(title) {
        this._setTitle = title;
    }
    getId() {
        return this._getId;
    }
    setId(id) {
        this._setId = id;
    }
    getUserId() {
        return this._getUserId;
    }
    setUserId(userId) {
        this._setUserId = userId;
    }
    getBody() {
        return this._getBody;
    }
    setBody(body) {
        this._setBody = body;
    }
};

function buscar(){
    var nombre = parseInt(document.getElementById('user_id').value);
    var clave = parseInt(document.getElementById('id').value);

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(matrizApi =>{ 
        var pasa = 0;
        for (var i=0; i<matrizApi.length; i++){
            if (matrizApi[i].userId === nombre   &&   matrizApi[i].id === clave){
                document.getElementById('buscado').style.color = 'black';
                document.getElementById("buscado").innerHTML = matrizApi[i].title;
                var pasa =1;
            }
        }
        if (pasa === 0){
            document.getElementById('buscado').style.color = 'yellow';
            document.getElementById("buscado").innerHTML = "API no encontrada";
            alert("API no encontrada");
        }
    }); 
};


function limpiar(){
    document.getElementById("revisor").reset();
};

