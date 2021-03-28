<?php
$prefix = $_POST['prefix'];
$str = explode(' ', $_POST['str']);
$arr = [];

foreach ($str as &$item){
    if (substr($item, 0, strlen($prefix)) == $prefix){
        array_push($arr, $item);
    }
}

$arr = join(' ', $arr);

header('Content-Type: text/json; charset=utf-8');

echo json_encode($arr);


