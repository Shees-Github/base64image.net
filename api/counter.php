<?php
/**
 * Simple Conversion Counter API
 * Tracks total conversions across all BASE64IMAGE tools
 *
 * Usage:
 * GET  /api/counter.php - Get current count
 * POST /api/counter.php - Increment and get new count
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Counter file location
$counterFile = __DIR__ . '/counter.txt';
$initialCount = 12847;

// Initialize counter file if it doesn't exist
if (!file_exists($counterFile)) {
    file_put_contents($counterFile, $initialCount);
}

// Lock file for atomic operations
$lockFile = $counterFile . '.lock';
$fp = fopen($lockFile, 'w');

if (!flock($fp, LOCK_EX)) {
    http_response_code(500);
    echo json_encode(['error' => 'Could not acquire lock']);
    exit;
}

try {
    // Read current count
    $count = (int) file_get_contents($counterFile);

    // Handle POST - increment counter
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $count++;
        file_put_contents($counterFile, $count);

        echo json_encode([
            'count' => $count,
            'incremented' => true
        ]);
    }
    // Handle GET - just return current count
    else {
        echo json_encode([
            'count' => $count
        ]);
    }
} finally {
    // Release lock
    flock($fp, LOCK_UN);
    fclose($fp);
}
