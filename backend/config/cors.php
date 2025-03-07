<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['*'],
    'allowed_origins' => [
        'http://localhost:8080',
        'http://127.0.0.1:8080',
        'http://192.168.0.105:8080',
        'http://[::1]:8080'
    ],
    'allowed_origins_patterns' => [
        'http://192.168.*:8080'
    ],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true,
];