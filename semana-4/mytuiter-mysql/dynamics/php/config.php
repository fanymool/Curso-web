<?php
//configuracion de la DB para conectar la DB
const DBHOST = "localhost";
const DBUSER = "root";
const DBPASS = "";
const DB = "mytuiter";


function connect(){
$conexion = mysqli_connect(DBHOST, DBUSER,DBPASS,DB);
return $conexion;
}
//var_dump($conexion);
//var_dump(connect());



?>