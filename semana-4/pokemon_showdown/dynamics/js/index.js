class entrenador_pokemon {//clase con la info de los entrenadores
    constructor(nombre, region_de_origen, no_medallas, team_pokemon) {
        this.nombre = nombre;
        this.region_de_origen = region_de_origen;
        this.no_medallas = no_medallas;
        this.team_pokemon = team_pokemon;
    }
    presentacion() {//funcion para presentarse
        console.log(`Hey yo soy ${this.nombre} de ${this.region_de_origen} tengo ${this.no_medallas} medallas y mi team pokemon es ${this.team_pokemon}`);
    }
    fight(){
        console.log(`Yo ${this.nombre} elijo a ${this.team_pokemon[5]}`);
    }

}

class pokemon {
    constructor(nombre, tipo, vida, ataque, ataque_especial, defensa, defensa_especial, velocidad) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.vida = vida;
        this.ataque = ataque;
        this.ataque_especial = ataque_especial;
        this.defensa = defensa;
        this.defensa_especial = defensa_especial;
        this.velocidad = velocidad;
    }
    ataca_con() {
        console.log(`${this.nombre} de tipo ${this.tipo} con vida ${this.vida} disponible,  ataca con ${this.ataque} y su ataque especial ${this.ataque_especial} cuenta con una defensa de ${this.defensa} y una defensa especial ${this.defensa_especial}, su velocidad es de ${this.velocidad}`)
    }
}

// class battle extends entrenador_pokemon{
//     constructor(nombre, region_de_origen, no_medallas, team_pokemon){
//         super(nombre, region_de_origen, no_medallas, team_pokemon);

//     }
//     fight(){
//         console.log(`Yo ${this.nombre} elijo a ${pokemon.this.nombre}`);
//     }
// }






//presentacion del entrenador 1
let entrenador1 = new entrenador_pokemon("Jasmine", "Johto", 200, ['Ampharos', ' Magneton', ' Pikachu', ' Charmander', ' Bulbasaur', ' Steelix']);
console.log(entrenador1);
entrenador1.presentacion();
// entrenador1.mi_team.push
// entrenador1.this.team_pokemon.push('Ampharos', 'Magneton', 'Pikachu', 'Charmander', 'Bulbasaur', 'Steelix');
//presentacion del entrenador 2
let entrenador2 = new entrenador_pokemon("Anthea", "Unova", 150, ['Gothitelle', ' Chansey', ' Clefairy', ' Vulpix', ' Oddish', ' Gardevoir']);
console.log(entrenador2);
entrenador2.presentacion();
//pokemones de entrenador1
const Steelix = new pokemon("Steelix", "Metal", 100, "Metal pesado", "Metal super pesado", "Brillo metalico", "shinee-white", 200);

console.log("¡¡¡Que comience la batalla!!!");

entrenador1.fight();

Steelix.ataca_con();




