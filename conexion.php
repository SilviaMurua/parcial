

<?php
    $conexion=mysqli_connect("localhost","root","","registrarse");
    if($conexion){
        echo "Conexión Exitosa";
    }else{
        echo "Error de Conexión";
    }
    ?>

	