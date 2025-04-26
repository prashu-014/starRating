<?php

$HOSTNAME = 'localhost';
$USERNAME = 'root';
$PASSWORD = '';
$DATABASE ='starrating' ;

$connection = mysqli_connect($HOSTNAME,$USERNAME,$PASSWORD,$DATABASE);

if(!$connection)
{
    die(mysqli_error($connection));
}

echo "connection successfully"



?>