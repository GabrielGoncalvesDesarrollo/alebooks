<?php 

/**
 * Plugin Name:  App theme blocks 
 * Description:  Custom theme blocks
 * Version:      1.0.0
 * Author:       Artsolut
 * Author URI:   https://artsolut.es
 * Text Domain:  wp-artsolut-blocks
 * Domain Path:  /languages/
 *
 * @package artsolutblocks
 */

if ( !defined('ABSPATH') ){ die('Direct access not permited.'); }

if ( ! defined( 'WP_ARTSOLUT_THEME_BLOCKS_PLUGIN_FILE' ) ) {
	define( 'WP_ARTSOLUT_THEME_BLOCKS_PLUGIN_FILE', __FILE__ );
}

// Include the main WP_Bootstrap_Blocks class.
if ( ! class_exists( \WP_Artsolut_Theme_Blocks\WP_Artsolut_Theme_Blocks::class ) ) {
	require_once plugin_dir_path( WP_ARTSOLUT_THEME_BLOCKS_PLUGIN_FILE ) . 'src/class-wp-artsolut-blocks.php';
}

\WP_Artsolut_Theme_Blocks\WP_Artsolut_Theme_Blocks::instance();
