<?php
header('Content-Type: text/plain');

echo "Running cleanup script...\n";
echo "Current PHP Script Directory: " . __DIR__ . "\n";
echo "Files/Folders in current directory:\n";
$files = scandir(__DIR__);
foreach ($files as $file) {
    if ($file == '.' || $file == '..') continue;
    $type = is_dir(__DIR__ . '/' . $file) ? 'DIR' : 'FILE';
    echo "  [$type] $file\n";
}
echo "\n-----------------------------------\n\n";

function makeWritableAndClean($path) {
    if (!file_exists($path)) {
        return;
    }
    @chmod($path, 0777);
    if (is_dir($path)) {
        foreach (scandir($path) as $item) {
            if ($item == '.' || $item == '..') continue;
            makeWritableAndClean($path . DIRECTORY_SEPARATOR . $item);
        }
    }
}

function deleteDirectoryAggressive($dir) {
    if (!file_exists($dir)) {
        return true;
    }

    if (!is_dir($dir)) {
        $result = @unlink($dir);
        if (!$result) {
            echo "  Warning: Failed to delete file: $dir\n";
        }
        return $result;
    }

    $success = true;
    foreach (scandir($dir) as $item) {
        if ($item == '.' || $item == '..') {
            continue;
        }
        $subPath = $dir . DIRECTORY_SEPARATOR . $item;
        if (!deleteDirectoryAggressive($subPath)) {
            $success = false;
        }
    }

    $result = @rmdir($dir);
    if (!$result) {
        echo "  Warning: Failed to delete directory: $dir\n";
    }
    return $result && $success;
}

$dirsToDelete = ['_next', 'assets', '_nextm', 'assets1', 'nextm', 'old'];

foreach ($dirsToDelete as $dirName) {
    $target = __DIR__ . '/' . $dirName;
    if (file_exists($target)) {
        echo "Found: $dirName. Preparing permissions and force deleting...\n";
        makeWritableAndClean($target);
        if (deleteDirectoryAggressive($target)) {
            echo "SUCCESSFULLY DELETED: $dirName\n\n";
        } else {
            echo "PARTIALLY FAILED/FAILED to delete: $dirName\n\n";
        }
    } else {
        echo "Not found: $dirName\n";
    }
}

echo "Cleanup process complete!\n";
?>
