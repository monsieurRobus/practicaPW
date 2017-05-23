
var seleccion = [];
var viviendas = [
    { interesados:0, idAnuncio:"0000" ,ciudad:"AAAAAA", cp:0,comunidad:"cmancha", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"},
    { interesados:0, idAnuncio:"0001", ciudad:"AAAAAA", cp:0,comunidad:"cmancha", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"},
    { interesados:0, idAnuncio:"0002", ciudad:"AAAAAA", cp:0,comunidad:"cmancha", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"},
    { interesados:0, idAnuncio:"0003",ciudad:"AAAAAA", cp:0,comunidad:"cmancha", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"},
    { interesados:0, idAnuncio:"0004", ciudad:"AAAAAA", cp:0,comunidad:"cmancha", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"},
    { interesados:0, idAnuncio:"0005", ciudad:"AAAAAA", cp:0,comunidad:"cantabria", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"},
    { interesados:0, idAnuncio:"0006", ciudad:"AAAAAA", cp:0,comunidad:"cantabria", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"},
    { interesados:0, idAnuncio:"0007", ciudad:"AAAAAA", cp:0,comunidad:"madrid", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"},
    { interesados:0, idAnuncio:"0008", ciudad:"AAAAAA", cp:0,comunidad:"madrid", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"},
    { interesados:0, idAnuncio:"0009", ciudad:"AAAAAA", cp:0,comunidad:"madrid", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"},
    { interesados:0, idAnuncio:"0010", ciudad:"AAAAAA", cp:0,comunidad:"cataluna", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"},
    { interesados:0, idAnuncio:"0011", ciudad:"AAAAAA", cp:0,comunidad:"cataluna", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"},
    { interesados:0, idAnuncio:"0012", ciudad:"AAAAAA", cp:0,comunidad:"cvalenciana", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"},
    { interesados:0, idAnuncio:"0013", ciudad:"AAAAAA", cp:0,comunidad:"cvalenciana", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"},
    { interesados:0, idAnuncio:"0014", ciudad:"AAAAAA", cp:0,comunidad:"andalucia", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"},
    { interesados:0, idAnuncio:"0015", ciudad:"AAAAAA", cp:0,comunidad:"andalucia", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"},
    { interesados:0, idAnuncio:"0016", ciudad:"AAAAAA", cp:0,comunidad:"navarra", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"},
    { interesados:0, idAnuncio:"0017", ciudad:"AAAAAA", cp:0,comunidad:"navarra", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"},
    { interesados:0, idAnuncio:"0018", ciudad:"AAAAAA", cp:0,comunidad:"navarra", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"},
    { interesados:0, idAnuncio:"0019", ciudad:"AAAAAA", cp:0,comunidad:"navarra", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"},  
    { interesados:0, idAnuncio:"0020", ciudad:"AAAAAA", cp:0,comunidad:"navarra", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"},
    { interesados:0, idAnuncio:"0021", ciudad:"AAAAAA", cp:0,comunidad:"navarra", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"},
    { interesados:0, idAnuncio:"0022", ciudad:"AAAAAA", cp:0,comunidad:"navarra", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"},
    { interesados:0, idAnuncio:"0023", ciudad:"AAAAAA", cp:0,comunidad:"ibaleares", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"},
    { interesados:0, idAnuncio:"0024", ciudad:"AAAAAA", cp:0,comunidad:"icanarias", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"},
    { interesados:0, idAnuncio:"0025", ciudad:"AAAAAA", cp:0,comunidad:"icanarias", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"},
    { interesados:0, idAnuncio:"0026", ciudad:"AAAAAA", cp:0,comunidad:"extremadura", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"},
    { interesados:0, idAnuncio:"0027", ciudad:"AAAAAA", cp:0,comunidad:"extremadura", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"},
    { interesados:0, idAnuncio:"0028", ciudad:"AAAAAA", cp:0,comunidad:"cmancha", calle: "AAAAAA", numero: 0, urlImg: 'vivienda.jpg', anocons:0,nhabitaciones: 0,precio:0,descripcion:"Lorem ipsum dolor amet o algo así"}];

function getPisos(comunidad)
{
    contenido='<h1>LISTADO DE VIVIENDAS</h1>';          // En esta cadena iremos añadiendo los elementos de la lista para luego pasarselo a la web
    for (var i=0;i<viviendas.length;i++ )
        {
            
            if(comunidad === viviendas[i].comunidad)
                {                   
                    seleccion.push(viviendas[i]);   // Tras almacenarlo en el array SELECCION, procedemos a dibujarlo en la lista usando el mismo ciclo del bucle
                    
                    contenido+='<a href=""><div id="'+viviendas[i].idAnuncio+'" class="piso" onclick="detalleVista();"><img src="imagenes/'+viviendas[i].urlImg+'"><div class="fila"><span id="'+viviendas[i].idAnuncio+'" class="col1d4">Vivienda en '+viviendas[i].ciudad+'</span><span class="precio col1d4">'+viviendas[i].precio+'</span><span class="ninteresados">'+viviendas[i].interesados+'</span></div><div class="fila"><p class="descripcion col4d4">'+viviendas[i].descripcion+'</p></div><div class="detalles"><span>Año construcción:</span><span class="anocons">'+viviendas[i].anocons+'</span></div></div></a>';
                    
                }
            
            
        }
    
   
    return contenido;
    
    
}