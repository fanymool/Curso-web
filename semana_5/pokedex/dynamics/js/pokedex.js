
window.addEventListener("load", () => {
    const btnAgregar = document.getElementById("btn-agregar");
    const divAgregar = document.getElementById("contenedor-agregar");
    const select = document.getElementById("select-tipos");
    const formAgregar = document.getElementById("form-nuevo");
    const btnEnviar = document.getElementById("btn-enviar");
    
    const buscador = document.getElementById("buscador");
    const resultados = document.getElementById("contenedor-resultados");
    const mostrar = document.getElementById("contenedor-mostrar");

    const div_update = document.getElementById("cont_update");
    const form_update = document.getElementById("form-update");
    const btnEnviarupdate = document.getElementById("btn-enviar-update");
    let idpok;
    
    let altura;
    let peso;
    let experiencia_base;
    let tipo;
    
    const btnDelete = document.getElementById("btn-enviar-update");
    const div_delete = document.getElementById("cont-delete");
    
    
    
    
    fetch("./dynamics/php/consultar.php")
    .then((respuesta) => {
        return respuesta.json();
    }).then((datosJSON) => {
        console.log(datosJSON);
        for (let tipo of datosJSON) {
            select.innerHTML += `<option value = ${tipo.type_id}>${tipo.type_name}</option>`;
            form_update.children[4].children[1].innerHTML += `<option value = ${tipo.type_id}>${tipo.type_name}</option>`;
        }
    });
    btnAgregar.addEventListener("click", () => {
        divAgregar.style.display = "block";
    });
    btnEnviar.addEventListener("click", (e) => {
        e.preventDefault();
        divAgregar.style.display = "none";
        datosForm = new FormData(formAgregar);
        fetch("./dynamics/php/insertar.php", {
            method: "POST",
            body: datosForm
        }).then((respuesta) => {
            return respuesta.json();
        }).then((datosJSON) => {
            alert(datosJSON.mensaje);
            
        });
    });
    buscador.addEventListener("keyup", () => {
        let termino = buscador.value;
        resultados.innerHTML = "";
        if (termino.length >= 3) {
            fetch("./dynamics/php/buscador.php?termino=" + termino)
            .then((respuesta) => {
                return respuesta.json();
            }).then((datosJSON) => {
                
                for (resultado of datosJSON) {
                    resultados.innerHTML += `<div class="coincidencia" data-id="${resultado.pok_id}">${resultado.pok_name}</div>`;
                }
                if (datosJSON.length == 0) {
                    resultados.innerHTML = "No hay resultados";
                }
            });
        }
        
    });
    resultados.addEventListener("click", (e) => {
        if (e.target.classList.contains("coincidencia")) {
            let id_pokemon = e.target.dataset.id;
            resultados.innerHTML = "";
            mostrar.innerHTML = "";
            mostrar.style.display = "flex";
            divAgregar.style.display = "none";
            fetch("./dynamics/php/pokemon.php?id=" + id_pokemon)
            .then((respuesta) => {
                return respuesta.json();
            }).then((datosJSON) => {
                let titulo = ["Nombre", "Altura", "Peso", "Tipo", "Experiencia"];
                let datos = [datosJSON.pok_name, datosJSON.pok_height, datosJSON.pok_weight, datosJSON.type_name, datosJSON.pok_base_experience];
                i = 0;
                for (dato of datos) {
                    mostrar.innerHTML += `
                    <div class="dato">
                    <h1>${titulo[i]}</h1>
                    <p>${dato}</p>
                    </div>   
                    `;
                    i++;
                }
                mostrar.innerHTML += `
                <button data-id="${datosJSON.pok_id}" id="btn-eliminar" class=" botones">
                <h1>Eliminar</h1>
                </button> `;
                mostrar.innerHTML += `
                <button data-id="${datosJSON.pok_id}" id="btn-editar" class="botones">
                <h1>Editar</h1>
                </div>`;

                form_update.children[1].children[1].value=datosJSON.pok_height;
                form_update.children[2].children[1].value=datosJSON.pok_weight;
                form_update.children[3].children[1].value=datosJSON.pok_base_experience;
                form_update.children[4].children[1].value=datosJSON.type_id;
                
                const btn_editar = document.getElementById("btn-editar");
                btn_editar.addEventListener("click", ()=>{
                    div_update.style.display = "block";
                    idpok = e.target.dataset.id;
                    console.log("click");
                });
                const btn_delete = document.getElementById("btn-eliminar");
                console.log(btn_delete);
                btn_delete.addEventListener("click", ()=>{
                    idpok = e.target.dataset.id;

                    e.preventDefault();
                    console.log("click");
                    let datosForm = new FormData();
                    datosForm.append("idpok", idpok)
                fetch("./dynamics/php/delete.php", {
                    method: "POST",
                    body: datosForm
                }).then((respuesta) => {
                    return respuesta.json();
                }).then((datosJSON) => {
                    alert(datosJSON.mensaje);
                });
                    
                    
                });
                
                
            })};
        });
        mostrar.addEventListener("click", (e)=>{
            console.log(e.target);
        }) ;
    
    btnEnviarupdate.addEventListener("click", (e)=>{
        e.preventDefault();
        
        let datosFormUp = new FormData(form_update);
        datosFormUp.append("idpok", idpok)
        console.log(idpok);
        fetch("./dynamics/php/update.php", {
            method: "POST",
            body: datosFormUp
        }).then((respuesta) => {
            return respuesta.json();
        }).then((datosJSON) => {
            alert(datosJSON);
        });
        
        
        
    });
    
    
});

// fallos xd

// btnDelete.addEventListener("click", (e)=>{
    //     e.preventDefault();
    
    //     fetch("./dynamics/php/delete.php", {
        //         method: "POST"
        //     }).then((respuesta) => {
            //         return respuesta.json();
            //     }).then((datosJSON) => {
                //         alert(datosJSON);
//     });

// btn_delete.addEventListener("click", ()=>{
    //     let deletepok = document.querySelector(".campo-form");
    //     }
    
    // });


// });
