<?php
require_once "db.php";

class Articulos
{
    public $codigo;
    public $descripcion;
    public $familia;
    public $impuesto;
    public $precio;
    public $stock;

    public function __construct($codigo,$descripcion,$familia,$impuesto,$precio,$stock)
    {
        $this->codigo = $codigo;
        $this->descripcion = $descripcion;
        $this->familia = $familia;
        $this->impuesto = $impuesto;
        $this->precio = $precio;
        $this->stock = $stock;
    }

    public function listar() {
        try
        {
            $conn = new DB();
            $stm = $conn->conexion()->prepare("select * from articulos");
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_OBJ);
        } catch (Exception $e){
            die($e->getMessage());
        }

    }

}
?>