function cargarDatos(valores)
{
    var titulo = document.getElementById("titulo").value;
    
    var valor=valores.value;
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
                
                console.log(data)
                con=Math.round(data.totalResults/10);
                console.log(con);
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
        
        xmlhttp.open("GET","http://www.omdbapi.com/?apikey=bae08925&s=" + titulo + "&page=" + valor ,true);
        xmlhttp.send();
    }
    return false;


}

function buscarPeliculaPorId(id){
    var detalles="";
    if(id==""){
        detalles="No hay informacion disponible"
        document.getElementById("detalles").innerHTML=detalles;
    } else {
            if(window.XMLHttpRequest){
                xmlhttp =new XMLHttpRequest();
    
            }else {
                xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
    
            xmlhttp.onreadystatechange =function(){
                if(this.readyState == 4 && this.status ==200){
                    var data=JSON.parse(this.responseText)
                    var x;
                    for (x in data) {
                        detalles += data[x] + " <br> ";
                      };

                    document.getElementById("detalles").innerHTML= detalles;
                }
            };
            xmlhttp.open("GET","http://www.omdbapi.com/?apikey=bae08925&i=" + id + "&plot=full",true);
            xmlhttp.send();
        }
        return false;
}


var siguiente=1;
function next()
{

    var titulo = document.getElementById("titulo").value;
    siguiente=siguiente+1;
    
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
                
                console.log(data)
                con=Math.round(data.totalResults/10);
                console.log(con);
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
        
        xmlhttp.open("POST","http://www.omdbapi.com/?apikey=bae08925&s=" + titulo + "&page=" + siguiente + "&plot=full",true);
        xmlhttp.send();
    }
}