<?php
require "config.php";
$conexion = connect();
if (!$conexion) {
    echo "No se pudo conectar :(";
} else {
    // deberia de poner las varriables id popk y esas???***
    $idpok = (isset($_POST["idpok"]) && $_POST["idpok"] != "") ? $_POST["idpok"] : false;
    // $altura = (isset($_POST["altura"]) && $_POST["altura"] != "") ? $_POST["altura"] : false;
    // $peso = (isset($_POST["peso"]) && $_POST["peso"] != "") ? $_POST["peso"] : false;
    // $exp_base = (isset($_POST["exp_base"]) && $_POST["exp_base"] != "") ? $_POST["exp_base"] : false;
    // $tipo = (isset($_POST["tipo"]) && $_POST["tipo"] != "") ? $_POST["tipo"] : false;

if ($idpok) {
    $sql = "DELETE FROM base_stats WHERE pok_id = $idpok";
    $res = mysqli_query($conexion, $sql);

    $sql1 = "DELETE FROM pokemon_evolution_matchup WHERE pok_id = $idpok";
    $res = mysqli_query($conexion, $sql1);

    $sql2 = "DELETE FROM pokemon_abilities WHERE pok_id = $idpok";
    $res = mysqli_query($conexion, $sql2);
    
    $sql3 = "DELETE FROM pokemon_types WHERE pok_id = $idpok";
    $res = mysqli_query($conexion, $sql3);


    $sql4 = "DELETE FROM pokemon WHERE pok_id = $idpok";
    $res = mysqli_query($conexion, $sql4);
    $respuesta = array("ok" => true, "mensaje" => "se logro eliminar el pokemon");
} else {//pongo las primeras vrd pq las demas cuando se update, pasan a aser las 1ras
    if (!$idpok) {
        $respuesta = array("ok" => false, "mensaje" => "No se logro eliminar el pokemon");
    }
    // } else if (!$altura) {
        //     $respuesta = array("ok" => false, "mensaje" => "No se logro eliminar la alutra");
        // } else if (!$peso) {
            //     $respuesta = array("ok" => false, "mensaje" => "No se logro eliminar el peso");
            // } else if (!$exp_base) {
                //     $respuesta = array("ok" => false, "mensaje" => "No se logro eliminar la experiencia base");
                // }
                
            }
            
            
            echo json_encode($respuesta);

}


?>
