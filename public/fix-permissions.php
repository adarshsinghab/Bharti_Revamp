<?php
function chmod_r($path) {
    $dir = new DirectoryIterator($path);
    foreach ($dir as $item) {
        if ($item->isDot()) continue;
        
        $pathname = $item->getPathname();
        if ($item->isDir()) {
            chmod($pathname, 0755);
            chmod_r($pathname);
        } else {
            chmod($pathname, 0644);
        }
    }
}

$target = __DIR__ . '/assets';
if (file_exists($target)) {
    chmod($target, 0755);
    chmod_r($target);
    echo "Permissions for 'assets' folder and its contents fixed successfully!";
} else {
    echo "Folder 'assets' not found.";
}
?>
