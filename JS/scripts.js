function alteraCapa(e){
    let capa = document.getElementsByClassName("filme-principal")[0]
    capa.style.backgroundImage="linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('"+e.src+"')"
    let titulo = document.getElementById("titulo")
    titulo.innerHTML=e.title
    let description = document.getElementById("description")
    description.innerHTML=e.alt
    }