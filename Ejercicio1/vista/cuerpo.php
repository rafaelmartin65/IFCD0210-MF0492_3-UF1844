<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script defer src="index.js"></script>
</head>
<body> 
    <h1 id="titulo">Este es el titulo</h1>
    <?php 
       $valor = 500;
       $Valor = "200";
       echo "<h1>El valor es :$valor </h1>";
       $moneda=["espana" => "Peseta","francia" => "Franco","usa" => "Dolar"];
       echo "<h2 id='moneda'>Moneda:{$moneda['francia']}</h2>";
       echo "texto:".$valor - $Valor;
       $persona1 = "Juan";
       $persona2 = &$persona1;
       $persona2 = "Mi nombre es: $persona2";
       echo $persona1;
       echo var_dump($moneda);
       $a = 2;
       $b = "2";
       $c = "2";
       if ($a == $b){
        echo "<p>Variables iguales no necesariamente identicas</p>";
       }
       if ($b === $c){
        echo "<p>Variables identicas</p>";
       }
       if ($a !== $b) {
        echo "$a y $b No son identicos:";
       }
       if ($a == "b" & $a !== $b){
        echo "<p>Variables iguales pero no identicas</p>";
       }
       $dni = "79063069";
       $letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
       $letra = $letras[$dni % 23];
       echo "<p>Mi DNI es : $dni $letra</p>";
    /*Esto es un comentario*/
    ?>
    </body>
</html>