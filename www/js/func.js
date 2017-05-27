
seleccion=[];

stockViviendas = {};
stockViviendas = JSON.parse(localStorage.getItem("viviendas")); // Cogemos el stock de viviendas

// Función que usaremos para seleccionar aquellos pisos que se correspondan con la comunidad autónoma
function getPisos(comunidad)
{
    var contenido='';

    // En esta cadena iremos añadiendo los elementos de la lista para luego pasarselo a la web
    for (var index in stockViviendas)
        {            
            if(comunidad === stockViviendas[index].comunidad)
                {                   
                    seleccion.push(stockViviendas[index]);   // Tras almacenarlo en el array SELECCION, procedemos a dibujarlo en la lista usando el mismo ciclo del bucle
                }
        } 
    
        // Si no hay pisos, directamente dibuja un mensaje en el HTML, si nó, lanzará automaticamente la función de dibujar por orden de precio ascendente
        if (seleccion.length == 0)
            {
                contenido+='<h2>Actualmente no tenemos pisos en esta comunidad :&lpar;</h2>';
            }
        else {
            contenido=orden("precio",true); // Dibuja stock en orden ascendente
        }
       
    contenido+='<h3><a href="mapa.html">&lt; Volver al mapa</a></h3>';
    return contenido;   // Devolvemos el contenido de la cadena que hemos construido
}

// Función encargada de almacenar en el sessionstorage la vista detalle del piso que queremos ver en detalle. Al haber entrado en el mismo, sumaremos +1 al campo "interesados".
function detalleVista(id){    
    var indexVista=0;
    for(var index in stockViviendas)
        {            
            if(index == id)
                {     
                    sessionStorage.setItem('viviendaDetalle',index);    
                }
        }    
}

// Con esta funcion sustituimos el botón por un formulario para enviar el deseo de alquilar al propietario
function formularioInteres(){

    var divForm = document.getElementById("interes");
    var contenido='<div id="tituloFormulario"></div><form id="form"><fieldset><label>Enviar comentario al dueño de la vivienda</label><textarea class="formulario-interes">Inserte el comentario que desea enviar</textarea><input type="button" value="Enviar" onclick="enviarComentario();"></fieldset></form>';
    divForm.setAttribute("class","noFlex");
    divForm.innerHTML = contenido;

}

function enviarComentario() {
    var detalle = sessionStorage.getItem("viviendaDetalle");
    pisoDetalle.interesados+=1;
    ninteresados.innerHTML='Interesados: '+pisoDetalle.interesados;
    stockViviendas[detalle].interesados=pisoDetalle.interesados;
    localStorage.setItem("viviendas",JSON.stringify(stockViviendas)); // Almacenamos la lista en el localstorage como string
    var divForm = document.getElementById("form");
    var contenido='<div class="caja"><h1>¡GRACIAS!</h1><h2>Hemos enviado el mensaje al dueño de la vivienda. En breves se pondrá en contacto con usted</h2></div>';
    divForm.innerHTML = contenido;
}

// Funcion para ordenar. Recibe la variable en función de la cual ordenaremos el array y si hacerlo en sentido ascendente o descendente
function orden(variable,direccion){
    
    // Si el array es mayor de 2, realizamos la ordenación, si no, ignoramos la petición de ordenación
    if(seleccion.length>=2)
    {
    
        switch(variable)
                {
                    
                    case "precio":   
                    
                    // Recorremos el array empezando desde el segundo elemento
                    for (var i=1;i<seleccion.length;i++)
                        {
                            // Comprobamos si el elemento actual es mayor que el siguiente, intercambiamos los valores y reiniciamos el loop
                            if(seleccion[i].precio < seleccion[i-1].precio)
                                {
                                    var aux = seleccion[i-1];
                                    seleccion[i-1]=seleccion[i];
                                    seleccion[i]=aux;
                                    i=0;
                                }
                        }
                
                    break;

                    case "habitacion":
                   
                    // Recorremos el array empezando desde el segundo elemento
                    for (var i=1;i<seleccion.length;i++)
                        {
                            // Comprobamos si el elemento actual es mayor que el siguiente, intercambiamos los valores y reiniciamos el loop
                            if(seleccion[i].nhabitaciones < seleccion[i-1].nhabitaciones)
                                {
                                    var aux = seleccion[i-1];
                                    seleccion[i-1]=seleccion[i];
                                    seleccion[i]=aux;
                                    i=0;                                   
                                }
                        }

                    break;

                    case "anio":
                    
                    // Recorremos el array empezando desde el segundo elemento
                    for (var i=1;i<seleccion.length;i++)
                        {
                            // Comprobamos si el elemento actual es mayor que el siguiente, intercambiamos los valores y reiniciamos el loop
                            if(seleccion[i].anocons < seleccion[i-1].anocons)
                                {
                                    var aux = seleccion[i-1];
                                    seleccion[i-1]=seleccion[i];
                                    seleccion[i]=aux;
                                    i=0;                                    
                                }
                        }

                    break;

                    case "interesados":
                
                     // Recorremos el array empezando desde el segundo elemento
                    for (var i=1;i<seleccion.length;i++)
                        {
                            // Comprobamos si el elemento actual es mayor que el siguiente, intercambiamos los valores y reiniciamos el loop
                            if(seleccion[i].interesados < seleccion[i-1].interesados)
                                {
                                    var aux = seleccion[i-1];
                                    seleccion[i-1]=seleccion[i];
                                    seleccion[i]=aux;
                                    i=0;                                    
                                }
                        }

                    break;

                    default:
                    break;
                }
    
            // Si es true, la dejamos como está, en caso contrario, invertimos su orden
        if (!direccion)
                {
                    seleccion.reverse();                   
                }
        
            // Una vez ordenado el contenido, lo dibujamos en la web
        
           contenido = dibujaStock(seleccion);
            
        }
    return contenido;
    
}

// Función que usamos para dibujar los pisos en el HTML, a la cual le pasamos la SELECCION por argumento.
function dibujaStock(selec)
{
    var contenido ='';      // Contenido que tendrá la lista de pisos
    for (var i=0;i<selec.length;i++)
                {                                        
                    contenido+='<a href="vistadetalle.html"><div id="'+selec[i].idAnuncio+'" class="piso" onclick="detalleVista('+selec[i].idAnuncio+');"><img src="imagenes/'+selec[i].urlImg+'"><div class="fila"><span id="'+selec[i].idAnuncio+'" class="col1d4">Vivienda en '+selec[i].ciudad+'</span><span class="precio col1d4">'+selec[i].precio+'</span><span class="col1d4">Calle '+selec[i].calle+' '+selec[i].numero+'</span><span class="ninteresados">Interesados: '+selec[i].interesados+'</span></div><div class="fila"><p class="descripcion col4d4">'+selec[i].descripcion+'</p></div><div class="col4d4 detalles"><span>Año construcción:</span><span class="anocons "> '+selec[i].anocons+'</span><span class="col2d4">Número habitaciones: '+selec[i].nhabitaciones+'</span></div></div></a>';   
                }
        
            document.getElementById("listapisos").innerHTML=contenido;
    
    return contenido;
}


// Función que se encarga de almacenar en el localStorage 
function cargaStock(viviendas){
    
    var stockViviendas={};
    
    for(var i=0;i<viviendas.length;i++)
                    {
                        stockViviendas[viviendas[i].idAnuncio]={
                            idAnuncio:      viviendas[i].idAnuncio,
                            interesados:    viviendas[i].interesados,
                            ciudad:         viviendas[i].ciudad,
                            cp:             viviendas[i].cp,
                            comunidad:      viviendas[i].comunidad,
                            calle:          viviendas[i].calle,
                            numero:         viviendas[i].numero,
                            urlImg:         viviendas[i].urlImg,
                            anocons:        viviendas[i].anocons,
                            nhabitaciones:  viviendas[i].nhabitaciones,
                            precio:         viviendas[i].precio,
                            descripcion:    viviendas[i].descripcion}
                        }
    return stockViviendas;
    
    
}