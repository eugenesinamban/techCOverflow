<?php 

require_once "../bootstrap.php";

$viewVars = [
    'user' => $user
];

echo $twig->render('messageNew.twig', $viewVars);

?>