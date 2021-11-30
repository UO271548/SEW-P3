class File{
    constructor(){
        this.files = [];
        this.cargados = false;
    }

    obtenerArchivos(files){
        if (!this.cargados){
            this.files = files;
            this.obtenerInformacion();
            this.cargados = true;
        }else{
            var docuP = document.getElementsByTagName('p')[0];
            docuP.innerHTML  = "";
            this.files = files;
            this.obtenerInformacion();
        }
    }

    obtenerInformacion(){
        for (var i = 0; i < this.files.length; i++){
            var file = this.files[i];
            var docuP = document.getElementsByTagName('p')[0];

            var archivoTexto = "<h2>" +file.name + "</h2>"
                archivoTexto += "<p> Tipo archivo:" + file.type + "</p>"; 
                archivoTexto += "<p>Tamaño: " + file.size + "</p>";
                archivoTexto += "<p>Última modificación: " + file.lastModifiedDate.toLocaleDateString("es-ES") + "</p>";

                var fileReader = new FileReader();
                fileReader.onload = function(e){
                    archivoTexto += "<pre>"  + fileReader.result + "</pre>";
                    docuP.innerHTML += archivoTexto;
                    
                }
                fileReader.readAsText(file);
                
                
            

        }
    }
}

var file = new File();