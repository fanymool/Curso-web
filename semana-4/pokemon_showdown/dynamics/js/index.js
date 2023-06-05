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
    choose() {
        console.log(`Yo ${this.nombre} elijo a ${this.team_pokemon[5]}`);
    }
    // choose() {
    //     console.log(`Yo ${this.nombre} `);
    }



class pokemon {
    constructor(nombre, tipo, vida, ataque, ataque_especial, defensa, defensa_especial, velocidad, movimientos) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.vida = vida;
        this.ataque = ataque;
        this.ataque_especial = ataque_especial;
        this.defensa = defensa;
        this.defensa_especial = defensa_especial;
        this.velocidad = velocidad;
        this.movimientos = movimientos;
    }
    ataca_con() {
        console.log(`Tipo ${this.tipo} con vida ${this.vida} disponible,  ataca con ${this.ataque} y su ataque especial ${this.ataque_especial} cuenta con una defensa de ${this.defensa} y una defensa especial ${this.defensa_especial}, su velocidad es de ${this.velocidad}. Y Usare el movimiento  ${this.movimientos[2]}`)
        
    }
    
}
class mov_Pokemon{
    constructor(nombrepokemon, nombreattack, potencia, tipo_movimiento) {
        this.nombrepokemon = nombrepokemon;
        this.nombreattack = nombreattack;
        this.potencia = potencia;
        this.tipo_movimiento = tipo_movimiento;    
    }
    attack_mov(){
        console.log(`${this.nombrepokemon} ataco con ${this.nombreattack}, con una potencia de ${this.potencia} y es tipo ${this.tipo_movimiento[0]}`);
    }

}



//*********************************************presentacion del entrenador 1
let entrenador1 = new entrenador_pokemon("Jasmine", "Johto", 200, ['Ampharos', ' Magneton', ' Pikachu', ' Charmander', ' Bulbasaur', ' Steelix']);
// console.log(entrenador1);////muestra info de entrenador1
entrenador1.presentacion();
//*********************************************presentacion del entrenador 2
let entrenador2 = new entrenador_pokemon("Anthea", "Unova", 150, ['Gothitelle', ' Chansey', ' Clefairy', ' Vulpix', ' Oddish', ' Gardevoir']);
// console.log(entrenador2);////muestra info de entrenador2
entrenador2.presentacion();
//*******************pokemones de entrenador1
const Steelix = new pokemon("Steelix", "Metal", 100, "Metal pesado", "Metal super pesado", "Brillo metalico", "shinee-white", 200, ['oro real','plata one', 'bronce', 'esmeralda green']);

//*******************pokemones de entrenador2
const Gardevoir=new pokemon("Gardevoir", "Electrico", 75, "rayitos de luz", "Rayote de Luz", "espejo", "espejoxlux", 500, ['LED WHITE','LED BLUE', 'LED RED', 'LED REPUTATION']);

//*********************************************ataques
let steel_attack = new mov_Pokemon("Steelix", "oro real", "1789 pc", ['fisico', 'especial']);
let garde_attack = new mov_Pokemon("Gardevoir", "espejoxlux", "4902 pc", ['especial','fisico']);



//////////////////////empieza la batalla
console.log("**********************************************************");//solo es un separador
console.log("*        ¡¡¡Que comience la batalla!!!                   *");
console.log("**********************************************************");//solo es un separador

// itworks
entrenador1.choose();//Entrenador 1 (Jasmine) elije a uno de sus pokémones
Steelix.ataca_con();//se describen las caracteristicas del pokémon
console.log("**********************************************************");//solo es un separador
entrenador2.choose();//Entrenador 2 (Anthea) elije a uno de sus pokémones
Gardevoir.ataca_con();//se describen las caracteristicas del pokémon
console.log("**********************************************************");//solo es un separador
console.log("GO!!");

steel_attack.attack_mov();
garde_attack.attack_mov();

console.log("**********************************************************");//solo es un separador
console.log("K.O!!");
console.log(`El ganador es la entrenadora ${entrenador1.nombre} que cuenta ya con ${entrenador1.no_medallas} medallas`);
console.log(`Mientras que la entrenadora ${entrenador2.nombre} ha perdido, suerte para la proxima`);



// la verdad esta act si me costo, y mas pq aunque me gusta pokemon, no conocia esta pagina, pero hice lo que pude
// abajo estan mis intentos fallidos :')











//////////////////////////////////////
//     k_o_battle(garde_attack.potencia, steel_attack.potencia){
// if (garde_attack.potencia>steel_attack.potencia) {
//     console.log(`Steelix ha ganado y GardevoirF ha perdido`);
// } else {
//     console.log(`Gardevoir ha ganado y Steelix ha perdido`);
// }


// k_o_battle(garde_attack.potencia,steel_attack.potencia);
// if (garde_attack.potencia>steel_attack.potencia) {
//     console.log(`Steelix ha ganado y Gardevoir ha perdido`)
// } else {
//     console.log(`Gardevoir ha ganado y Steelix ha perdido`)
// }




//     k_o_mov(steel_attack){
// if (steel_attack.potencia>garde_attack.potencia) {
//     console.log('${steel_attack} ha ganado');
// } else {
//     console.log(`${steel_attack} ha perdido y ganó ${garde_attack}`);
// }
    



// const pokemones_teamJasmine = (Steelix, Ampharos);
// switch (pokemones_teamJasmine) {
    
//     case Steelix:
//         entrenador1.choose();//Entrenador 1 (Jasmine) elije a uno de sus pokémones
//         Steelix.ataca_con();
//         break;

//     case Ampharos:
//         entrenador1.choose();//Entrenador 1 (Jasmine) elije a uno de sus pokémones
//         console.log(Ampharos.ataca_con());
//         break;
// }



// if (team_pokemon=[0]){
//     entrenador1.choose();//Entrenador 1 (Jasmine) elije a uno de sus pokémones
//     console.log[Ampharos.ataca_con()]; 
// }else if (team_pokemon=[5]) {
//     entrenador1.choose();//Entrenador 1 (Jasmine) elije a uno de sus pokémones
//     Steelix.ataca_con();
    

// }



// //funcionara?
// const pokemones = {

//     Steelix: {
//         nombre: "Steelix",
//         tipo: "Metal",
//         vida: 100,
//         ataque: "Metal pesado",
//         ataque_especial: "Metal super pesado",
//         defensa: "Brillo metalico",
//         defensa_especial: "shinee-white",
//         velocidad: 200,
//     },
    // ataca_con() {
    //     console.log(`Tipo ${tipo} con vida ${vida} disponible,  ataca con ${ataque} y su ataque especial ${ataque_especial} cuenta con una defensa de ${defensa} y una defensa especial ${defensa_especial}, su velocidad es de ${velocidad}`);
    // 
// }
//     attack(){

//     }
// }

// console.log(`Yo ${entrenador1.nombre} elijo a ${pokemones.Steelix.nombre}`);
// // console.log(pokemones.ataca_con);
// if (pokemones.Steelix.nombre) {
//     console.log(Object.keys(pokemones.Steelix));
//     console.log()
// }
