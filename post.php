<?php
$tipo = "place"; // "stands" , "place", "event"

if( $tipo == "place"){
    $data = '{"nombre": Finca La Gloria, "direccion": "MP4F+785, Vía a la Costa, Guayaquil", "capacidad":4000}';
    $url = 'https://proyectolp2-e0fec-default-rtdb.firebaseio.com/places.json';
}else{
    $data='{"nombre":"Stand3","imagen":"path3","descripcion":"algo algo3"}';
    $url='https://proyectolp2-e0fec-default-rtdb.firebaseio.com/Stand.json';
}

$ch= curl_init();

curl_setopt($ch, CURLOPT_URL,$url);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content.Type: text/plain'));

$response=curl_exec($ch);
if(curl_errno($ch)){
    echo"Error:".curl_errno($ch);
}else{
    echo"Se insertó";
}
?>