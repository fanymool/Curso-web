<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Boletos</title>
</head>
<body>
    <?php

    $nombre = (isset($_POST["nombre"]) && $_POST["nombre"] !="")? $_POST["nombre"] : "No especifico";
    $apellido = (isset($_POST["apellido"]) && $_POST["apellido"] !="")? $_POST["apellido"] : "No especifico";
    $correo = (isset($_POST["correo"]) && $_POST["correo"] !="")? $_POST["correo"] : "No especifico";
    $telefono = (isset($_POST["telefono"]) && $_POST["telefono"] !="")? $_POST["telefono"] : "No especifico";
    $pag = (isset($_POST["pag"]) && $_POST["pag"] !="")? $_POST["pag"] : "No especifico";
    $place = (isset($_POST["place"]) && $_POST["place"] !="")? $_POST["place"] : "No especifico";
    $zona = (isset($_POST["zona"]) && $_POST["zona"] !="")? $_POST["zona"] : "No especifico";
    $artist = (isset($_POST["artist"]) && $_POST["artist"] !="")? $_POST["artist"] : "No especifico";
    $fecha = (isset($_POST["fecha"]) && $_POST["fecha"] !="")? $_POST["fecha"] : "No especifico";
    $cant_boletos = (isset($_POST["cant_boletos"]) && $_POST["cant_boletos"] !="")? $_POST["cant_boletos"] : "No especifico";




    echo "<br>Hola " .$_POST["nombre"]. " aquí te mostramos tus boletos y tu confirmación de datos";

    echo "<br>";
    echo "<br>";
    echo "<br>";
    echo "<br>";



    echo "<table border='2'>
        <thead>
            <tr>
                <th colspan='2'>
                    Ticket de confirmación de la compra :))
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    Nombre: $nombre $apellido
                </td>
                <td rowspan='4'>
                    <img src='https://i.pinimg.com/564x/ad/9b/6e/ad9b6e6ffaa44d5b5d856eca3f04a47b.jpg' width='204' height='204'>
                </td>
            </tr>
            <tr>
                <td>
                    Correo electronico: $correo
                </td>
            </tr>
            <tr>
                <td>
                    Teléfono celular: $telefono
                </td>
            </tr>
            <tr>
                <td>
                    Metodo de pago: $pag
                </td>
            </tr>
        </tbody>
    </table>";

    echo "<br>";
    echo "<br>";
    echo "<br>";

    for($i = 1; $i <= $cant_boletos && $i <=15; $i++ ){
            echo $i ." 
    <table border='3'>
        <thead>
            <tr>
                <th>
                    <img src='https://i.pinimg.com/564x/dd/98/4a/dd984a87a0bf3b7887141c288377ac8d.jpg' width='508' height='280'>
                </th>
                <th>
                    Boleto a nombre de: $nombre $apellido
                </th>
                <th>
                    Lugar: $place"; 
                    switch($place){
                        case "Foro Sol":
                            echo " <img src='https://pbs.twimg.com/media/FPeREZfXsAEhZ5i.jpg:large' width='465' height='568'>";
                            break;
                        case "Palacio de los deportes":
                            echo " <img src='https://pbs.twimg.com/profile_images/1231354130318450689/xxgjImxD_400x400.jpg' width='200' height='200'>";
                            break;
                        case "Teatro metropolita":
                            echo " <img src='https://indiehoy.com/wp-content/uploads/2014/10/metropolitan.jpg'  width='200' height='200'> ";
                            break;
                        case "Auditorio":
                            echo " <img src='https://www.dondeir.com/wp-content/uploads/2021/10/auditorio-nacional.jpg' width='204' height='204'>";
                            break;
                    }

                    echo"

                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td rowspan='2'>
                    Artista:<br> $artist";
                    switch($artist){
                        case "Luis Miguel":
                            echo " <img src='https://i.pinimg.com/564x/92/dd/3c/92dd3ca674b8d9e81001818f565ab96c.jpg' width='100' height='300'> ";
                            break;
                        case "BTS":
                            echo " <img src='https://i.pinimg.com/564x/97/13/fd/9713fde6b8aa53b0fb2cf3d5620a7f2c.jpg' width='204' height='508'>";
                            break;
                        case "Arctic Monkeys":
                            echo " <img src='https://i.pinimg.com/564x/dc/89/f9/dc89f97d4d4788dfd5fde235f1542788.jpg' width='508' height='508'>";
                            break;
                        case "Taylor Swift":
                            echo " <img src='https://i.pinimg.com/236x/6e/62/17/6e62173a99ac784783d4ddaa8552c900.jpg' width='508' height='902'>";
                            break;
                        case "Die Antwoord":
                            echo " <img src='https://i.pinimg.com/564x/3d/b2/20/3db220e2bf0745ccdef0a48ed1da654d.jpg' width='508' height='769'>";
                            break;
                        case "Seventeen":
                            echo " <img src='https://i.pinimg.com/564x/24/37/f5/2437f5e05a6c45d2af78f1b3d107b059.jpg' width='404' height='705'>";
                            break;
                    }
                    
                    echo "
                </td>
                <td>
                    Fecha: $fecha
                </td>
                
                <td>
                    Extras:<ul>";
                    $extras = (isset($_POST["extras"]) && $_POST["extras"] !="")? $_POST["extras"] : "No especifico";
                    if($extras != "No especifico"){

                        foreach($extras as $extra){
                            echo "<li>$extra</li>";
                            $extros = true;
                        }
                    }
                        else{
                            echo "<li>No especifico</li>";
                        }
                    echo "</ul>

                </td>

            </tr>
                    
            <tr>
                <td>
                    <img src='https://1.bp.blogspot.com/-NgNIrkol97s/UJvlucyOOfI/AAAAAAAAAu0/O5caDS0A1uU/s1600/mapa+de+localidades+y+lugares+para+el+concierto+de+one+direction+en+mexico+2013+disponibles+no+agotados.jpg' width='350' height='450'>;
                </td>
                <td>
                    Zona: $zona
                </td>
            </tr>

            <tr>
                <td colspan='3'>";
                
                    switch($artist){
                        case "Luis Miguel":
                            echo " <p>De pronto flash La chica del bikini azul</p>";
                            break;
                        case "BTS":
                            echo " <p>Love yourself</p>";
                            break;
                        case "Arctic Monkeys":
                            echo " <p>I Wanna Be Yours</p>";
                            break;
                        case "Taylor Swift":
                            echo " <p>Si eres lo suficiente afortunado como para ser diferente de todos los demás, no cambies</p>";
                            break;
                        case "Die Antwoord":
                            echo " <p>Baby boy, you so cool, How could I stay mad at you?,I love you and that is true, You so silly, you so stupid</p>";
                            break;
                        case "Seventeen":
                            echo " <p>Seventeen right here</p>";
                            break;
                    }
                    echo"
                </td>
            </tr>
        
        
        </tbody>
    </table>";

    echo "<br>";
    }

    if($cant_boletos >15){
        $faltaron = $cant_boletos - 15;
        echo "No hay boletos disponibles, para ti solo son 15 <br> Faltaron:" .$faltaron. "de los $cant_boletos";
    }
    ?>
</body>
</html>