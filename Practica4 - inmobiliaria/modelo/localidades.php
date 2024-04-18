<?php
require_once "db.php";

class localidades
{
    public $id;
    public $descripcion;
    

    public function __construct($id = 0,$descripcion = "")
    {
        $this->id = $id;
        $this->descripcion = $descripcion;
    }

    public function listar() {
        try
        {
            $conn = new DB();
            $stm = $conn->conexion()->prepare("SELECT * from localidades");
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_OBJ);
        } catch (Exception $e){
            die($e->getMessage());
        }
    }

}
?>