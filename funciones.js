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
                    detalles+=  "<h2>" +data.Title+"</h2>"
                       +    "<h3>Rate:"+data.Rate+"</h3>"
                       +    "<h3>Released: "+data.Released+"</h3>"
                       +    "<h3>Runtime:"+data.Runtime+"</h3>"
                       +    "<h3>Genre:"+data.Genre+"</h3>"
                       +    "<h3>Director:"+data.Director+"</h3>"
                       +    "<h3>Writer: "+data.Writer+"</h3>"
                       +    "<h3>Actor:"+data.Actors+"</h3>"
                       +    "<h3>Plot:"+data.Plot+"</h3>"
                       +    "<h3>Language:"+data.Language+"</h3>"
                       +    "<h3>Country:"+data.Country+"</h3>"
                       +    "<h3>Metascore:"+data.Metascore+"</h3>"
                       +    "<h3>imdbRating:"+data.imdbRating+"</h3>"
                       +    "<h3>imdbVotes:"+data.imdbVotes+"</h3>"
                       +    "<h3>DVD:"+data.DVD+"</h3>"
                       +    "<h3>BoxOffice:"+data.BoxOffice+"</h3>"
                       +    "<h3>Production:"+data.Production+"</h3>"
                       +    "<h3>Website:"+data.Website+"</h3>"
                       +    "<h3>Response:"+data.Response+"</h3>"
                    
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