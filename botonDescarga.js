var parrafo = document.createElement("div");
var contenido = document.createTextNode("Descargar todo");
var boton = document.createElement("button");
boton.appendChild(contenido);
var att = document.createAttribute("onclick");
att.value ="descargatt()";
parrafo.appendChild(boton);
boton.setAttributeNode(att);
document.body.appendChild(parrafo);
document.body.insertBefore(parrafo, document.body.firstChild);

var descargatt =function(){
    var nouEvent = document.createEvent("MouseEvents");
    nouEvent.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    var doc= document.getElementsByClassName("BtnDescarga");
    var links =[];
    console.log(doc);
    for (x=0;x<doc.length;x++)
    {
        var mensaje = String(doc[x].onclick);
        var link = mensaje.split("'");
        links[x] ="https://portalcfdi.facturaelectronica.sat.gob.mx/"+link[1];
        abrirTab(links[x]);
        console.log("link : "+x +" : "+ links[x]);
    }
 
  //alert("Se han encontrado los siguientes valores en elementos 'opcion1'\n" + texto);
};
var abrirTab = function (url) { 
    var win = window.open(url, '_blank');
    win.focus(); 
};

