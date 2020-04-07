function cargarDatos()
{
    var titulo = document.getElementById("titulo").value;
    var detalles="";
    if(titulo == ""){
        detalles="<tr>" +
        "<td colspan='5' > No hay informacion disponible </td>" +
        "</tr>";
        document.getElementById("tablaDatosPersonalesDetalles").innerHTML=detalles;

    }else {
        if(window.XMLHttpRequest){
            xmlhttp =new XMLHttpRequest();

        }else {
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlhttp.onreadystatechange =function(){
            if(this.readyState == 4 && this.status ==200){
                var data=JSON.parse(this.responseText)

                data.Search.forEach(movie => {
                    detalles += "<tr>" +
                    "<td><a href='#' onclick=\"buscarPeliculaPorId('" + movie.imdbID + "' )\">Detalles" +
                    "<td>" + movie.Title + "</td>" +
                    "<td>" + movie.Year + "</td>" +
                    "<td>" + movie.Type + "</td>" +
                    "<td><img src=" + movie.Poster + "></td>" +
                    "</tr>";
                    
                });
                document.getElementById("tablaDatosPersonalesDetalles").innerHTML= detalles;
            }
        };
        xmlhttp.open("GET","http://www.omdbapi.com/?apikey=bae08925&s=" + titulo + "&page=1-5",true);
        xmlhttp.send();
    }
    return false;


}

function buscarPeliculaPorId(id){
    var detalles="";
    if(id==""){
        detalles="No hay informacion disponible"
        document.getElementById("tablaDatosPersonalesDetalles").innerHTML=detalles;
    } else {
            if(window.XMLHttpRequest){
                xmlhttp =new XMLHttpRequest();
    
            }else {
                xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
    
            xmlhttp.onreadystatechange =function(){
                if(this.readyState == 4 && this.status ==200){
                    var data=JSON.parse(this.responseText)
                    console.log(data);
                   
                    document.getElementById("tablaDatosPersonalesDetalles").innerHTML= data;
                }
            };
            xmlhttp.open("GET","http://www.omdbapi.com/?apikey=bae08925&i=" + id + "&plot=full",true);
            xmlhttp.send();
        }
        return false;
}
