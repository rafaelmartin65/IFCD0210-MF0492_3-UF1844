<?php
    // var_dump($_POST['familias']);
    require_once "../modelo/productos.php";
    $datos = new Articulos();
    $jsondata = $datos->listar($_POST['familias'],1);
    echo json_encode($jsondata, JSON_FORCE_OBJECT);
?>    