<?php
$tipo = "place"; // "stands" , "place", "event"

if( $tipo == "place"){
    $url = 'https://proyectolp2-e0fec-default-rtdb.firebaseio.com/places.json';
}else{
    $url='https://proyectolp2-e0fec-default-rtdb.firebaseio.com/Stand.json';
}

$ch= curl_init();
curl_setopt($ch, CURLOPT_URL,$url);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);

$response=curl_exec($ch);
curl_close($ch);
$data= json_decode($response, true);
$contadorid=0;
$arrayjson1=[];
foreach($data as $key => $value){
  // echo "nombre:" ,$data[$key]["nombre"]."<br>";
  // echo "imagen:" ,$data[$key]["imagen"]."<br>";
  // echo "descripcion:" ,$data[$key]["descripcion"]."<br>";
    $arrayjson=["actividades"=>$data[$key]["actividades"]
      ,"capacidad"=>$data[$key]["capacidad"]
    ,"horario"=>$data[$key]["horario"]
    ,"nombre"=>$data[$key]["nombre"]
    ,"website"=>$data[$key]["website"]

    ];
    
   print_r(json_encode($arrayjson));

}

?>