<?php
    require_once "../modelo/localidades.php";
    $datos = new Localidades();
    $jsondata = $datos->listar();
    echo json_encode($jsondata, JSON_FORCE_OBJECT);
?>