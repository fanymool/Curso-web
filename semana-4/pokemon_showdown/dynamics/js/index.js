class entrenador_pokemon{
    constructor(nombre, region_de_origen, no_medallas, team_pokemon){
        this.nombre = nombre;
        this.region_de_origen = region_de_origen;
        this.no_medallas = no_medallas;
        this.team_pokemon = team_pokemon;
    }
    presentacion(){//funcion para presentarse
        console.log(`Hey yo soy ${this.nombre} de ${this.region_de_origen} tengo ${this.no_medallas} medallas y mi team pokémon es ${this.team_pokemon}`);
    }
}


//presentacion del entrenador 1
let entrenador1= new entrenador_pokemon("Jasmine", "Johto", 200, ['Ampharos', 'Magneton', 'Pikachu', 'Charmander', 'Bulbasaur', 'Steelix']);
console.log(entrenador1);
entrenador1.presentacion();
//presentacion del entrenador 2
let entrenador2= new entrenador_pokemon("Anthea", "Unova", 150, ['Gothitelle', 'Chansey', 'Clefairy', 'Vulpix', 'Oddish', 'Gardevoir']);
console.log(entrenador2);
entrenador2.presentacion();

