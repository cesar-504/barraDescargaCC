agregarScript('https://cdn.rawgit.com/eligrey/FileSaver.js/1.3.2/FileSaver.min.js');
agregarScript('https://cdn.rawgit.com/Stuk/jszip/v3.1.1/dist/jszip.min.js');
var barra= document.getElementById("barraDescargaCC");
var htmlBarra="https://cdn.rawgit.com/cesar-504/barraDescargaCC/dev/barraDescarga.html";

 
var cssBarra="";
var fileArray=[];
if(!barra)//comprobar si la barra ya se ha creado
    cargarBarra();
document.body.appendChild(barra);
document.body.insertBefore(barra, document.body.firstChild);

function descargatt(){
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
        //abrirTab(links[x]);
        cargarArchivo(links[x]);
        
        console.log("link : "+x +" : "+ links[x]);
    }


}
function agregarScript(url){
    var s2 = document.createElement('script');
    s.type = 'text/javascript';
    s.src = url;
    document.body.insertBefore(s, document.body.firstChild);
}
function abrirTab (url) {
    var win = window.open(url, '_blank');
    win.focus();
}
function cargarAjax (id,url){
    var xmlhttp =new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4)
            document.getElementById(id).innerHTML=xmlhttp.responseText;
        //else
        //    document.getElementById(id).innerHTML= '<div> Cargando</div>';

    }
    xmlhttp.open("GET",url,true);

    xmlhttp.send();

}

function cargarArchivo(url){
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.responseType = "blob";
    oReq.onload = function (oEvent) {
        var file = oReq.response; // Note: not oReq.responseText
        if (file) {
            fileArray.append(file);
        }
        
    };
    oReq.send(null);
}
function cargarBarra (){
    barra = document.createElement("div");
    barra.setAttributeNode(document.createAttribute("id"));
    barra.id="barraDescargaCC";
    cargarAjax(barra.id,htmlBarra);
}
function cerrar(){
    document.body.removeChild(barraDescargaCC);
}
function descargaSelect (){}
function descargaPag(){}
function crearZip(files){
    var zip = new JSZip();
    for (var i=0; i<files.length; i++) {
        zip.file(""+i,files[i]);
        
    }
    var content = zip.generate({type:"blob"});
    saveAs(content, "Archivos.zip");
}
