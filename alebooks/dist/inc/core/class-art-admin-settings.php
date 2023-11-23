<?php if ( !defined('ABSPATH') ){ die('Direct access not permited.'); }

if (!class_exists('Art_Admin_Settings')):
	class Art_Admin_settings {
		public static $menu_page_title;

		public function __construct()
		{
			if (!is_admin()) {
				return;
			}
			
			add_action( 'after_setup_theme', __CLASS__ . '::init_admin_settings', 99 );
			
		}

		public static function init_admin_settings(){
			
			add_action( 'admin_enqueue_scripts', __CLASS__ . '::styles_scripts' );	
		}

		public static function register_scripts( $hook ) {
			/* wp_register_script('artsolut-admin-settings', ART_THEME_CSS . '/assets/js/lib/litte-youtube.js', array('jquery'), ART_THEME_VERSION, true); */

			add_action( 'admin_enqueue_scripts', __CLASS__ . '::styles_scripts' );
		}


		public static function style_scripts(){
			wp_enqueue_style( 'artsolut-admin-settings', ART_THEME_CSS . '/assets/css/admin.css', array(), ART_THEME_VERSION );
			/* wp_enqueue_script( 'artsolut-admin-settings' ); */
		}

	}
	new Art_Admin_Settings();
endif;