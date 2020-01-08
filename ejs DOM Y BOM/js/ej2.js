class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anio) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anio = anio;
    }

    mostrarGen() {
        if ((this.anio >= 1938) && (this.anio <= 1948)) {
            return ("generacion silent generation, rasgo:austeridad");
        }

        if ((this.anio >= 1949) && (this.anio <= 1968)) {
            return ("generacion baby boom, rasgo:ambicion");
        }

        if ((this.anio >= 1969) && (this.anio <= 1980)) {
            return ("generacion x , rasgo:obsesion por el exito");
        }

        if ((this.anio >= 1981) && (this.anio <= 1993)) {
            return ("generacion y, rasgo:frustracion");
        }

        if ((this.anio >= 1994) && (this.anio <= 2010)) {
            return ("generacion z, rasgo:irreverencia");
        }
    }

    esMayorEdad(){
        if(this.edad>18){
            console.log("es mayor de edad");
        }
        else{
            console.log('no es mayor de edad');
        }
    }

    get getDatos(){
        console.log()
    }

}

var personas = [];
var i = 0;


var valor = () => {
    inputVal1 = document.getElementById("nombre").value;
    inputVal2 = document.getElementById("edad").value;
    inputVal3 = document.getElementById("dni").value;
    inputVal4 = document.getElementById("sexo").value;
    inputVal5 = document.getElementById("peso").value;
    inputVal6 = document.getElementById("altura").value;
    inputVal7 = document.getElementById("anio").value;
    console.log(inputVal1, inputVal2, inputVal3, inputVal4, inputVal5, inputVal6, inputVal7);
    personas[i] = new Persona(inputVal1, inputVal2, inputVal3, inputVal4, inputVal5, inputVal6, inputVal7);
    console.log(personas[i]);
    i = i++;
}

var gen = () => {
    console.log(personas[i].mostrarGen());
}

var edad = () =>{
    console.log(personas[i].esMayorEdad());
} 
