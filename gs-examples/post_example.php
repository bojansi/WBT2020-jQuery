<?php

$data['ime'] = isset($_POST['ime']) ? $_POST['ime'] : "";
$data['prezime'] = isset($_POST['prezime']) ? $_POST['prezime'] : "";
$data['godiste'] = isset($_POST['godiste']) ? $_POST['godiste'] : "";
$data['poruka'] = "Zovem se ".$data['ime']. " ".$data['prezime']. " i imam ". (2021-$_POST['godiste']). " godina/e/u.";
 
echo json_encode($data);
exit;
 
?>