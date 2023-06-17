<?php
session_start();
if (isset($_SESSION['iniciada'])){
    echo "<h1> ESTA ES LA WEB OCULTA </h1>";
} else{
    header("location:loguearse.php");
}
?>
