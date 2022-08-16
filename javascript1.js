function validar() {
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;

    var resultado = `Usuario: ${nombre}  ${apellidos} `;

    document.getElementById("resultado").innerHTML = resultado;
    return false;

    
    
}

// array con productos
var dataSet = [
    ['1', 'Pc ASUS', '1200000', '50'],
    ['2', 'Mouse Hp', '$12000', '30'],
    ['3', 'Monitor 32" MSI', '$180000', '30'],
    ['4', 'laptop Dell', '$800000', '25'],
    ['5', 'Audifonos Sony', '25000', '30'],
    ['6', 'Smartphone samsung S21', '$400000', '20'],
    ['7', 'Impresora Epson','$150000', '15'],
    ['8', 'Silla Gamer Cougar', '$200000', '100'],
];

//setTimeout(function () {
//    $('.loader_bg').fadeToggle();
//}, 3000);

function Carga() {
    return new Promise(resultado => {
      setTimeout(() => {
        $('.loader_bg').fadeToggle();
        resultado('LISTO');
      }, 3000);
    });
  }
  
  async function llamado() {
    console.log('cargando cards ...');
    alert('cargando cards ...')
    const resultado = await Carga();
    console.log(resultado);
    
  }
  
  llamado();


/*datatable producto
$(document).ready(function () {
    $('#example').DataTable({
        data: dataSet,
        columns: [
            { title: 'Id' },
            { title: 'Nombre' },
            { title: 'Precio' },
            { title: 'Stock' },
            
        ],
    });
});*/