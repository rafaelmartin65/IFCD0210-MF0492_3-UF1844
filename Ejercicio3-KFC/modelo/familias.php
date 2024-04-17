<?php
require_once "db.php";

class Familias
{
    public $codfamilia;
    public $nombfamilia;
    

    public function __construct($codfamilia = 0,$nombfamilia = "")
    {
        $this->codfamilia = $codfamilia;
        $this->nombfamilia = $nombfamilia;
    }

    public function listar() {
        try
        {
            $conn = new DB();
            $stm = $conn->conexion()->prepare("SELECT * from familias");
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_OBJ);
        } catch (Exception $e){
            die($e->getMessage());
        }
    }

}
?>