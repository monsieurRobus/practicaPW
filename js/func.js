
seleccion=[];

stockViviendas = {};
stockViviendas = JSON.parse(localStorage.getItem("viviendas")); // Cogemos el stock de viviendas

// Función que usaremos para seleccionar aquellos pisos que se correspondan con la comunidad autónoma
function getPisos(comunidad)
{
    contenido='<h1>LISTADO DE VIVIENDAS</h1><div class="menulista"><span>Precio</span><input id="precioup" type="button" value="&uarr;"><input id="preciodown" type="button" value="&darr;"></div><div class="menulista"><span>N Hab.</span><input id="habitacionup" type="button" value="&uarr;"><input id="habitaciondown" type="button" value="&darr;"></div><div class="menulista"><span>Año fab</span><input id="anioup" type="button" value="&uarr;"><input id="aniodown" type="button" value="&darr;"></div><div class="menulista"><span>Interes</span><input id="interesup" type="button" value="&uarr;"><input id="interesdown" type="button" value="&darr;"></div>';          
    
    
    contenido+="<div id='listapisos'>";
    
    // En esta cadena iremos añadiendo los elementos de la lista para luego pasarselo a la web
    for (var index in stockViviendas)
        {            
            if(comunidad === stockViviendas[index].comunidad)
                {                   
                    seleccion.push(stockViviendas[index]);   // Tras almacenarlo en el array SELECCION, procedemos a dibujarlo en la lista usando el mismo ciclo del bucle
                    
                    contenido+='<a href="vistadetalle.html"><div id="'+stockViviendas[index].idAnuncio+'" class="piso" onclick="detalleVista('+stockViviendas[index].idAnuncio+');"><img src="imagenes/'+stockViviendas[index].urlImg+'"><div class="fila"><span id="'+stockViviendas[index].idAnuncio+'" class="col1d4">Vivienda en '+stockViviendas[index].ciudad+'</span><span class="precio col1d4">'+stockViviendas[index].precio+'</span><span class="ninteresados">'+stockViviendas[index].interesados+'</span></div><div class="fila"><p class="descripcion col4d4">'+stockViviendas[index].descripcion+'</p></div><div class="detalles"><span>Año construcción:</span><span class="anocons">'+stockViviendas[index].anocons+'</span></div></div></a>';    
                }
        }    
    
    contenido+='</div>';
    return contenido;   // Devolvemos el contenido de la cadena que hemos construido en el array
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
    ninteresados.innerHTML=pisoDetalle.interesados;
    stockViviendas[detalle].interesados=pisoDetalle.interesados;
    localStorage.setItem("viviendas",JSON.stringify(stockViviendas)); // Almacenamos la lista en el localstorage como string
    var divForm = document.getElementById("form");
    var contenido='<div class="caja"><h1>¡GRACIAS!</h1><h2>Hemos enviado el mensaje al dueño de la vivienda. En breves se pondrá en contacto con usted</h2></div>';
    divForm.innerHTML = contenido;
}

// Funcion para ordenar. Recibe la variable en función de la cual ordenaremos el array y si hacerlo en sentido ascendente o descendente
function orden(variable,direccion){
    
    var comparador='';
    
    switch(variable)
            {
                case "precio":

                    

                break;

                case "habitacion":



                break;

                case "anio":



                break;

                case "interesados":



                break;

            default:
            break;
    }
    
        if (direccion)
                {
                    
                }
            else
                {
                    
                }
            
    
}