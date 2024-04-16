<?php
require_once "db.php";

class Productos
{
    public $codigo;
    public $producto;

    public function __construct($codigo = "",$producto="")
    {
        $this->codigo = $codigo;
        $this->producto =$producto;
       
    }

    public function listar() {
        try
        {
            $conn = new DB();
            $stm = $conn->conexion()->prepare("select * from productos order by producto");
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_OBJ);
        } catch (Exception $e){
            die($e->getMessage());
        }

    }

    public function nuevoProducto() {
        try {
            $basededatos = new DB();
            $sql = "SELECT max(codigo)+1 as nuevo from combustible";
            $clausula = $basededatos->conexion()->prepare($sql);
            $clausula->execute();
            return $clausula->fetch(PDO::FETCH_OBJ);
        } catch (Exception $e) {
            die($e->getMessage());
        }
    }

    public function insertar() {
        try {
            $basededatos = new DB();
            $sql = "insert into combustible (codigo,tipo) values (:codigo,:tipo)";
            return $basededatos->conexion()->prepare($sql)->execute((array) $this);
        } catch (Exception $e) {
            die($e->getMessage());
        }
       
    }

}
?>