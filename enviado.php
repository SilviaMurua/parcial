

<?php
    include("conexion.php");
    $email=$_POST['email'];
    $contraseña=$_POST['contraseña'];
    $domicilio=$_POST['domicilio'];
    $localidad=$_POST['localidad'];
    $provincia=$_POST['provincia'];
    $pais=$_POST['pais'];
    $nombre=$_POST['nombre'];
    $sql="INSERT INTO datospersonales values ('$email','$contraseña','$domicilio','$localidad','$provincia','$pais','$nombre')";
    $consulta=mysqli_query($conexion,$sql);
    if($consulta){
        echo "Datos Insertados";
    }else
    {
        echo "No se pudieron insertar los datos";
        }


?>
    




