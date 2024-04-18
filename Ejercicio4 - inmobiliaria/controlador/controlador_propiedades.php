<?php
    // var_dump($_POST['familias']);
    require_once "../modelo/propiedades.php";
    $datos = new Propiedad();
    $jsondata = $datos->listar($_POST['localidades']);
    echo json_encode($jsondata, JSON_FORCE_OBJECT);
?>    