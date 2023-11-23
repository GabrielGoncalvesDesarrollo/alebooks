<?php if (!defined('ABSPATH')) {
	die('Direct access not permited.');
}

if (!function_exists('artsolut_register_menu_locations')) {
	function artsolut_register_menu_locations()
	{
		register_nav_menus(array(
			'primary' => esc_html__('Menú principal', 'artsolut'),
			'lang' => esc_html__('Selector de idiomas', 'artsolut'),
			'footer' => esc_html__('Menú pie de página', 'artsolut'),
			'legal' => esc_html__('Menú legal', 'artsolut'),
		));
	}
	add_action('init', 'artsolut_register_menu_locations');
}

if (!function_exists('art_upload_mimes')) :
	function art_upload_mimes($mimes)
	{
		$mimes['json'] = 'application/json';
		$mimes['svg'] = 'image/svg+xml';
		return $mimes;
	}
	add_filter('upload_mimes', 'art_upload_mimes');
endif;
