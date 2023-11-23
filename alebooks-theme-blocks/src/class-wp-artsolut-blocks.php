<?php 
namespace WP_Artsolut_Theme_Blocks;

/* use WP_Artsolut_Theme_Blocks\Home_Animation\Artsolut_Home_Animation_Block_Type; */
use WP_Artsolut_Theme_Blocks\Product_Card\Artsolut_Product_Card_Block_Type;
use WP_Artsolut_Theme_Blocks\Product_Slider\Artsolut_Product_Slider_Block_Type;
use WP_Artsolut_Theme_Blocks\Panaderia\Artsolut_Panaderia_Block_Type;
use WP_Artsolut_Theme_Blocks\Timeline\Artsolut_Timeline_Block_Type;
use WP_Artsolut_Theme_Blocks\Bannr\Artsolut_Bannr_Block_Type;
use WP_Artsolut_Theme_Blocks\FAQ\Artsolut_FAQ_Block_Type;

if ( !defined('ABSPATH') ){ die('Direct access not permited.'); }

class WP_Artsolut_Theme_Blocks {
	protected static $instance = null;
	public static $version = '1.0.0';
	public $token = 'wp-artsolut-theme-blocks';
	public $assets_dir;
	public $assets_url;
	public $assets_front;
	public $assets_editor;
	public $languages_dir;
	public $languages_dir_full;

	public function __construct(){
		$this->define_constants();
		$this->init_plugin_environment();
		$this->includes();
		$this->init_hooks();
		$this->register_block_types();
		/* Settings::init( $this->assets_dir, $this->assets_url ); */
	}

	public function define_constants(){
		if ( ! defined( 'WP_ARTSOLUT_THEME_BLOCKS_ABSPATH' ) ) {
			define( 'WP_ARTSOLUT_THEME_BLOCKS_ABSPATH', trailingslashit( dirname( WP_ARTSOLUT_THEME_BLOCKS_PLUGIN_FILE ) ) );
		}
	}

	public function init_plugin_environment(){
		$this->assets_dir =  WP_ARTSOLUT_THEME_BLOCKS_ABSPATH . 'build/';
		$this->assets_url = esc_url( trailingslashit( plugins_url( '/build/', WP_ARTSOLUT_THEME_BLOCKS_PLUGIN_FILE ) ) );
		$this->assets_editor = esc_url( trailingslashit( plugins_url( '/assets/', WP_ARTSOLUT_THEME_BLOCKS_PLUGIN_FILE ) ) );
		
	}

	public function includes(){
		require_once WP_ARTSOLUT_THEME_BLOCKS_ABSPATH . 'src/class-block-type.php';
		require_once WP_ARTSOLUT_THEME_BLOCKS_ABSPATH . 'src/wp-artsolut-blocks-functions.php';
		
		/* Clases goes here */

		/* require_once WP_ARTSOLUT_THEME_BLOCKS_ABSPATH . 'src/blocks/home-animation/class-homeanimation-block-type.php'; */
		require_once WP_ARTSOLUT_THEME_BLOCKS_ABSPATH . 'src/blocks/product-card/class-product-card-block-type.php';
		require_once WP_ARTSOLUT_THEME_BLOCKS_ABSPATH . 'src/blocks/product-slider/class-product-slider-block-type.php';
		require_once WP_ARTSOLUT_THEME_BLOCKS_ABSPATH . 'src/blocks/panaderia/class-panaderia-block-type.php';
		require_once WP_ARTSOLUT_THEME_BLOCKS_ABSPATH . 'src/blocks/timeline/class-timeline-block-type.php';
		require_once WP_ARTSOLUT_THEME_BLOCKS_ABSPATH . 'src/blocks/banner/class-banner-block-type.php';
		require_once WP_ARTSOLUT_THEME_BLOCKS_ABSPATH . 'src/blocks/faq/class-faq-block-type.php';
	}

	public function init_hooks(){
		add_action( 'enqueue_block_assets', array( $this, 'enqueue_block_assets' ) ); 

		// Hook: Editor assets.
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_block_editor_assets' ), 99 );
	}

	public function enqueue_block_assets() {
		/**
		 * Possibility to enable or disable loading of block assets.
		 *
		 * @since 1.2.0
		 *
		 * @param boolean $enqueue_block_assets If set to true block assets will be loaded.
		 */
		$enqueue_block_assets = apply_filters( 'wp_artsolut_theme_blocks_enqueue_block_assets', true );
		if ( ! $enqueue_block_assets ) {
			return;
		}

		// Styles.
		wp_enqueue_style(
			$this->token . '-styles', // Handle.
			esc_url( $this->assets_url ) . 'style-index.css', // Block style CSS.
			array(),
			self::$version
		);
	}


	public function enqueue_block_editor_assets() {
		// Scripts.
		$index_path = $this->assets_dir . 'index.js';
		$index_url = esc_url( $this->assets_url ) . 'index.js';
		$index_asset_file = $this->assets_dir . 'index.asset.php';
		$index_asset = file_exists( $index_asset_file )
			? require_once $index_asset_file
			: null;

		$index_dependencies = isset( $index_asset['dependencies'] ) ? $index_asset['dependencies'] : array();
		global $wp_version;
		$wp_editor_dependency_to_remove = version_compare( $wp_version, '5.2', '<' ) ? 'wp-block-editor' : 'wp-editor';
		$index_dependencies = array_filter(
			$index_dependencies,
			function ( $dependency ) use ( $wp_editor_dependency_to_remove ) {
				return $wp_editor_dependency_to_remove !== $dependency;
			}
		);

		$index_version = isset( $index_asset['version'] ) ? $index_asset['version'] : filemtime( $index_path );

		
		wp_enqueue_script(
			$this->token . '-js', // Handle.
			$index_url,
			$index_dependencies,
			$index_version,
			true // Enqueue the script in the footer.
		);

		/* wp_localize_script(
			$this->token . '-js',
			'wpBootstrapBlocks',
			array(
				'bootstrapVersion' => Settings::get_bootstrap_version(),
				'isBootstrap5Active' => Settings::is_bootstrap_5_active(),
				'isCssGridEnabled' => Settings::is_css_grid_enabled(),
			)
		); */

		// Styles.
		wp_enqueue_style(
			$this->token . '-editor-styles', // Handle.
			esc_url( $this->assets_url ) . 'index.css', // Block editor CSS.
			array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
			self::$version
		);

		wp_enqueue_style(
			$this->token . '-artsolut-blocks-styles', // Handle.
			esc_url( $this->assets_editor ) . 'editor.css', // Block editor CSS.
			array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
			self::$version
		);
	}

	public function register_block_types(){
		/* Inicialización de clases */

		/* new Artsolut_Home_Animation_Block_Type(); */

		new Artsolut_Product_Card_Block_Type();
		new Artsolut_Product_Slider_Block_Type();
		new Artsolut_Panaderia_Block_Type();
		new Artsolut_Timeline_Block_Type();
		new Artsolut_Bannr_Block_Type();
		new Artsolut_FAQ_Block_Type();
	/* 	new Artsolut_Split_Heading_Block_Type(); */
		/* 
	
		new Artsolut_Tabla_Precios_Block_Type();
		new Artsolut_Bannr_Block_Type();
		new Artsolut_Timeline_Block_Type();
		new Artsolut_Ponentes_Block_Type();
		new Artsolut_Programa_Block_Type(); */
	}

	public function register_custom_block_category( $block_categories, $block_editor_context ) {
		return $this->add_custom_block_category( $block_categories );
	}


	public function register_custom_block_category_old( $categories, $post ) {
		return $this->add_custom_block_category( $categories );
	}

	protected function add_custom_block_category( $block_categories ) {
		return array_merge(
			$block_categories,
			array(
				array(
					'slug' => 'wp-artsolut-blocks',
					'title' => __( 'Artsolut Blocks', 'artsolut' ),
				),
			)
		);
	}

	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	public function __clone() {
		_doing_it_wrong( __FUNCTION__, esc_html__( '¿Haciendo trampas?', 'artsolut' ), esc_attr( self::$version ) );
	}


	public function __wakeup() {
		_doing_it_wrong( __FUNCTION__, esc_html__( '¿Haciendo trampas?', 'artsolut' ), esc_attr( self::$version ) );
	}

}