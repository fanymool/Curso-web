<?php
require "config.php";
$conexion = connect();
if (!$conexion) {
    echo "No se puedo conectar :(";
} else {
    
    $idpok = (isset($_POST["idpok"]) && $_POST["idpok"] != "") ? $_POST["idpok"] : false;
    $altura = (isset($_POST["altura"]) && $_POST["altura"] != "") ? $_POST["altura"] : false;
    $peso = (isset($_POST["peso"]) && $_POST["peso"] != "") ? $_POST["peso"] : false;
    $exp_base = (isset($_POST["exp_base"]) && $_POST["exp_base"] != "") ? $_POST["exp_base"] : false;
    $tipo = (isset($_POST["tipo"]) && $_POST["tipo"] != "") ? $_POST["tipo"] : false;

    if ($idpok) {
        $sql= "UPDATE pokemon SET pok_height=$altura,pok_weight=$peso, pok_base_experience=$exp_base WHERE pok_id=$idpok";
        $res = mysqli_query($conexion, $sql);
        $sql1 = "UPDATE pokemon_types SET type_id =$tipo WHERE pok_id= $idpok";
        $res1 = mysqli_query($conexion, $sql1);
        echo json_encode(array($altura,$peso,$exp_base,$tipo));

    } else {
        if (!$tipo) {
            $respuesta = array("ok" => false, "mensaje" => "No se especificó el nombre");
        } else if (!$altura) {
            $respuesta = array("ok" => false, "mensaje" => "No se especificó la alutra");
        } else if (!$peso) {
            $respuesta = array("ok" => false, "mensaje" => "No se especificó el peso");
        } else if (!$exp_base) {
            $respuesta = array("ok" => false, "mensaje" => "No se especificó la experiencia base");
        }
        echo json_encode($respuesta);
    }
    }

?>