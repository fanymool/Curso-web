<?php

$include = include("./config.php"); //conexion con el archivo
$con = connect();

////////buena practica para validar la conexion
if ($include && $con) {
    $ID_USUARIO = 1;
    $descripcion = "OMAIGAD OMG NW descriprion";
    $fecha = "01-06-2023";
    $hora = "10:00";
    $corazon = 10;
    $n_comentarios = 30;
    $n_retuits = 50;

    ////////php auto le meta un registro
    ////////ingresar los valores en ese orden, en lugar de poner cada colum
    ///////////////////////// registros
    // $peticion = "INSERT INTO publicacion VALUES(0,1,'$descripcion', '$fecha', '$hora', $corazon, $n_comentarios, $n_retuits)"; 
    // $query = mysqli_query($con, $peticion);
    // var_dump($query);


    ///////////////////////// tablas
//     $sql = "SELECT * FROM usuarios";
//     $query = mysqli_query($con, $sql);
//     //////para ver si ya se modifico la data base 
//     ////// true si mod los data en DB:false no se modifica
//     ////// var_dump($query);

    //     //////fetch_array
//     $datos = mysqli_fetch_array($query);
//     var_dump($datos);

    //     ///////fetch_assoc
//     $datos = mysqli_fetch_assoc($query);
//     var_dump($datos);
// ///ahora con los datos d publicacion
// $sql = "SELECT * FROM publicacion";
// $query = mysqli_query($con, $sql);
// $datos = mysqli_fetch_assoc($query);
// var_dump($datos);
// ///ahora con array
// $sql = "SELECT * FROM publicacion";
// $query = mysqli_query($con,$sql);
// $datos = mysqli_fetch_array($query);
// var_dump($datos);




    ////////////vamos a pedir todos los registros con while
////////para mostrar los de publis por ejemplo(ID_PUB)
// $sql = "SELECT * FROM publicacion";
// $query = mysqli_query($con, $sql);


    // while ($row = mysqli_fetch_assoc($query)) 
// {

    //     echo "<br>";
//     var_dump($row);
// }
///////////////////otro ejem
    $sql = "SELECT * FROM publicacion WHERE ID_PUB > 0 && ID_PUB <5";
    $query = mysqli_query($con, $sql);


    while ($row = mysqli_fetch_assoc($query)) {

        echo "<br>";
        //var_dump($row);
        //var_dump($row["descripcion"]);//para que solo salga la info de las descripciones omg omg omg 
        var_dump($row["n_comentarios"]); //para que solo salga la info de los comentarios omg omg omg

    }


}




?>