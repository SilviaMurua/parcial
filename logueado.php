<?php
session_start();
$_SESSION['iniciada']='X';
include("conexion.php");
$email=$_POST['email'];
$contraseña=$_POST['contraseña'];
$sql="SELECT * from datospersonales WHERE email='$email' and contraseña='$contraseña'";
$consulta=mysqli_query($conexion,$sql);
$existe=mysqli_num_rows($consulta);
if ($existe==1){
    header ("location:restringido.php");
}else{
    header ("Location: http://localhost/parcial/Index.html");

}
?> 