<?php if ( !defined('ABSPATH') ){ die('Direct access not permited.'); }

if ( !class_exists('Art_After_Setup_Theme')):
	
	class Art_After_Setup_Theme{
		private static $instance;

		public static function get_instance(){
			if ( !isset(self::$instance) ){
				self::$instance = new self();
			}
			return self::$instance;
		}

		public function __construct(){
			add_action( 'after_setup_theme', array( $this, 'setup_theme' ), 2 );
			add_action( 'admin_enqueue_scripts', array($this,'art_theme_add_editor_styles'), 20);
			add_action('init',array($this, 'art_stored_data' ));
		}

		function art_theme_add_editor_styles() {
			wp_enqueue_style('admin-styles', ART_THEME_CSS.'/assets/css/admin.css');
		}

		public function art_stored_data(){
		}

		public function setup_theme() {

			add_theme_support( 'align-wide' );
			add_theme_support( 'title-tag' );
			add_theme_support( 'post-thumbnails' );
			add_theme_support('woocommerce');
			add_theme_support('block-template-parts');
			add_theme_support('custom-logo');


			add_theme_support(
				'html5',
				array(
					'navigation-widgets',
					'search-form',
					'gallery',
					'caption',
					'style',
					'script',
				)
			);
			add_theme_support(
				'editor-color-palette',
				array(
						array(
								'name'  => esc_html__( 'Black', 'twentytwentyone' ),
								'slug'  => 'black',
								'color' => '#000000',
						),
						array(
								'name'  => esc_html__( 'Dark gray', 'twentytwentyone' ),
								'slug'  => 'dark-gray',
								'color' => '#555555',
						),
				)
			);


			add_theme_support( 'wp-block-styles' );
			add_theme_support( 'responsive-embeds' );
			add_theme_support('editor-styles');

			remove_action('wp_head', 'print_emoji_detection_script', 7);
			remove_action('admin_print_scripts', 'print_emoji_detection_script');
			remove_action('wp_print_styles', 'print_emoji_styles');
			remove_action('admin_print_styles', 'print_emoji_styles');
			remove_filter('the_content_feed', 'wp_staticize_emoji');
			remove_filter('comment_text_rss', 'wp_staticize_emoji');
			remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
		}
	}
	Art_After_Setup_Theme::get_instance();
endif;
