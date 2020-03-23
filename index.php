<?php 

require_once "./bootstrap.php";

$viewVars = [];

echo $twig->render("index.twig", $viewVars);

?>