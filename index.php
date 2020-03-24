<?php 

require_once "./bootstrap.php";

$viewVars = [
    'user' => null
];

echo $twig->render("index.twig", $viewVars);

?>