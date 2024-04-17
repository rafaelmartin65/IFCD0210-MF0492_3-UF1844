<?php
    require_once "../modelo/productos.php";
    $datos = new Articulos();
    $jsondata = $datos->listar();
    echo json_encode($jsondata, JSON_FORCE_OBJECT);
?>    