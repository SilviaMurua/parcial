

<?php
    $servidor="localhost";
    $usuario="root";
    $clave="";
    $BaseDatos="registrarse";

    $conexion=mysqli_connect($servidor,$usuario,$clave,$BaseDatos);
    if(!$conexion){
        echo "Error en la conexión";
    }
    ?>

