<?php if (!defined('ABSPATH')) {
	die('Direct access not permited.');
}

define('ART_THEME_PATH', get_template_directory());
define('ART_THEME_CSS', get_template_directory_uri());
define('ART_THEME_VERSION', '1.0.0');

$rand = rand(1, 99999999999);

define('ART_RAND', $rand);

require ART_THEME_PATH . '/inc/init.php';
