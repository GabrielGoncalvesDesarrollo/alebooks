<?php if (!defined('ABSPATH')) {
	die('Direct access not permited.');
}


if (!class_exists('Art_Enqueue_Scripts')) :
	class Art_Enqueue_Scripts
	{
		public static $styles;
		public static  $scripts;

		public function __construct()
		{
			add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'), 999);
		}

		public function enqueue_scripts()
		{
			global $wp_query;

			if (false === self::enqueue_theme_assets()) {
				return;
			}


			/* $file_prefix = ( SCRIPT_DEBUG ) ? '' : '.min'; */
			$file_prefix = '';
			$dir_name    = (SCRIPT_DEBUG) ? 'unminified' : 'minified';

			$js_uri  = ART_THEME_CSS . '/assets/js/' . $dir_name . '/';
			$css_uri = ART_THEME_CSS . '/assets/css/' . $dir_name . '/';

			$js_uri  = ART_THEME_CSS . '/assets/js/';
			$css_uri = ART_THEME_CSS . '/assets/css/';

			/* wp_register_style( 'app-css', $css_uri .'app'. $file_prefix . '.css', array(), ART_THEME_VERSION, 'all' ); */

			$all_assets = self::theme_assets();

			$styles     = $all_assets['css'];
			$scripts    = $all_assets['js'];

			if (is_array($styles) && !empty($styles)) {
				foreach ($styles as $key => $style) {
					$dependency = array();

					$rand = rand(1, 99999999999);
					$css_file = $css_uri . $style . $file_prefix . '.css';

					wp_register_style($key, $css_file, $dependency, ART_RAND, 'all');

					$custom_css = "
                .mycolor{
                        background: black;
                }";

					wp_add_inline_style('custom-style', $custom_css);

					// Enqueue.
					wp_enqueue_style($key);

					// RTL support.
					wp_style_add_data($key, 'rtl', 'replace');
				}

				add_filter(
					'art_change_deferred_stylesheets',
					function ($handles) {
						$handles[] = 'app-css';
						return $handles;
					},
					10,
					1
				);
			}

			if (is_array($scripts) && !empty($scripts)) {
				foreach ($scripts as $key => $script) {

					// Register.
					wp_register_script($key, $js_uri . $script . $file_prefix . '.js', array('jquery'), ART_THEME_VERSION, true);

					// Enqueue.
					wp_enqueue_script($key);
				}
			}

			$art_localize = array(
				'ajax_url' => admin_url('admin-ajax.php'),
				'ajax_nonce' => wp_create_nonce('art-ajax-nonce'),
				'posts' => json_encode($wp_query->query_vars), // everything about your loop is here
				'current_page' => get_query_var('paged') ? get_query_var('paged') : 1,
				'max_page' => $wp_query->max_num_pages,
				'page_search' => (int)is_search(),
				'blog_page' => get_permalink(get_option('page_for_posts')),
				'agenda_page' => get_permalink(get_option('art_agenda_page')),
				'empresas_page' => get_post_type_archive_link('empresa'),
				'current_url' => home_url()
			);
			wp_localize_script('app-js', 'art', apply_filters('art_theme_js_localize', $art_localize));
		}

		public static function theme_assets()
		{
			$default_assets = array(
				// handle => location ( in /assets/js/ ) ( without .js ext).
				'js'  => array(
					/* 'wow' => 'wow', */
					'app-js' => 'bundle',
				),
				// handle => location ( in /assets/css/ ) ( without .css ext).
				'css' => array(
					/* 'swiper' => 'swiper.min', */
					'app-css' => 'app',
				),
			);
			return apply_filters('art_theme_assets', $default_assets);
		}

		public static function enqueue_theme_assets()
		{
			return apply_filters('art_enqueue_theme_assets', true);
		}
	}
	new Art_enqueue_Scripts();
endif;
