<?php
    require_once "../modelo/localidades.php";
    $datos = new Localidad();
    $jsondata = $datos->listar();
    echo json_encode($jsondata, JSON_FORCE_OBJECT);
?>    