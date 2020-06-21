<?php
// header("Access-Control-Allow-Origin: *");
// header('Access-Control-Allow-Credentials: true');
// header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
// header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// header("Content-Type: application/json; charset=UTF-8");

define('DB_HOST', '187.45.196.168');
define('DB_PORT', '3306');
define('DB_USER', 'dberpestock');
define('DB_PASS', 'T901189112a');
define('DB_NAME', 'dberpestock');

function connect()
{
  $connect = mysqli_connect(DB_HOST ,DB_USER ,DB_PASS ,DB_NAME);

  if (mysqli_connect_errno($connect)) {
    die("Failed to connect:" . mysqli_connect_error());
  } else {
    echo 'coneected';
  }

  mysqli_set_charset($connect, "utf8");

  return $connect;
}

$con = connect();