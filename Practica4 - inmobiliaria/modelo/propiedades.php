<?php
require_once "db.php";

class propiedades
{
    public $id;
    public $tipo;
    public $idlocalidad;
    public $dormitorio;
    public $baño;
    public $precio;
    public $metros;

    public function __construct($id = 0,$tipo = "",$idlocalidad = 0,$dormitorio = 0,$baño = 0,$precio = 0,$metros = 0)
    {
        $this->id = $id;
        $this->tipo = $tipo;
        $this->idlocalidad = $idlocalidad;
        $this->dormitorio = $dormitorio;
        $this->baño = $baño;
        $this->precio = $precio;
        $this->metros = $metros;
    }

    public function listar($filtro) {
        try
        {
            $conn = new DB();
            $clausula = "SELECT id,tipo,localidad as idlocalidad,metros,precio,dormitorio,baño FROM propiedades inner join idlocalidads on propiedades.idlocalidad = idlocalidads.codidlocalidad";
            if ($filtro != "0") {
                $clausula = $clausula." where propiedades.idlocalidad = ".$filtro;
            }
            $stm = $conn->conexion()->prepare($clausula);
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_OBJ);
        } catch (Exception $e){
            die($e->getMessage());
        }
    }

}
?>