<?php
    require_once "../modelo/familias.php";
    $datos = new Familias();
    $jsondata = $datos->listar();
    echo json_encode($jsondata, JSON_FORCE_OBJECT);
?>    