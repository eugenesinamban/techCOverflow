<?php

require_once __DIR__ . '/vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader(__DIR__ . '/view');
$twig = new \Twig\Environment($loader,[
    'debug' => true
]);

define('BASEPATH', realpath(__DIR__));
define('MODELS', BASEPATH . "/models");
define('LIB', BASEPATH . "/lib");

// keep only until launch
$twig->addExtension(new \Twig\Extension\DebugExtension());

//test user
$user = [
        'name' => 'Eugene Sinamban',
        'year' => "二年生",
        'course' => 'プログラマー専攻',
        'accomplishments' => [
            '学際リーダー',
            '学際売り上げ合計2位',
            '運動会副委員長',
            'We Are Tech C. 新人賞',
            'マイクロソフトオフィススペシャリスト資格:エクセル',
            'CompTIA IT Fundamentals試験合格'
        ]
];
?>