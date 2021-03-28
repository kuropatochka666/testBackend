<?php
$hip = $_POST['hip'];
$smu = $_POST['smu'];

echo json_encode(intdiv($smu, $hip));


