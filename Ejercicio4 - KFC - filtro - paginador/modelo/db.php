<?php

class DB
{
    private  $servidor;
    private  $puerto;
    private  $base;
    private  $usuario;
    private  $contraseña;
    private  $charset;
    private  $opciones = array(PDO::ATTR_ERRMODE=> PDO::ERRMODE_EXCEPTION);

    // https://diego.com.es/tutorial-de-pdo

    function __construct()
    {
        $this->servidor = "localhost";
        $this->puerto = "3306";
        $this->base = "tienda";
        $this->usuario = "root";
        $this->contraseña = "";
        $this->charset = "utf8";
    }

    public function conexion() {
        try{
            $conecta = new PDO("mysql:host=$this->servidor:$this->puerto;dbname=$this->base;charset=$this->charset",$this->usuario,$this->contraseña,$this->opciones);
        }catch(PDOException $e){
            echo 'Error de conexión:'.$e->getMessage();
            exit;
        }
        return $conecta;
    }

    

}