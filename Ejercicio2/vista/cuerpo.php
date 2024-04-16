<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <?php echo '<script src="index.js"></script>'?>
    <script src="index.js"></script>
</head>
<body>
    <!-- Esto es un comentario -->
<?php 
$valor = 500;

echo '<h1 id="titulo">El valor es: '.$valor.'</h1>';
echo "<h1>El valor es: $valor </h1>";

$moneda = array ("España" => "Euro", "USA" => "Dolar", "Francia" => "Euro"
);
echo "<h2>La moneda de España es: {$moneda['España']}</h2>";
// Esto es un comentario

$a = 2;
$b = "2";
$c = "2";
if ($a == $b) {
    echo $a;

    echo "<p>Varable siguales pero no identicas</p>";

};

?>
<?php
function calcularLetraDNI($dni) {
    $letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    $resto = $dni % 23;
    echo '<p>'.$resto.'</p>';
    return $letras[$resto];
}

// Ejemplo de uso
$numeroDNI = 78644004;
$letraDNI = calcularLetraDNI($numeroDNI);
echo "El DNI completo es: $numeroDNI-$letraDNI";
?>

</body>
</html>

