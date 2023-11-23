<?php 

namespace WP_Artsolut_Theme_Blocks;

if ( !defined('ABSPATH') ){ die('Direct access not permited.'); }


abstract class Block_Type { 
	protected $name = '';

	protected $attributes = array();
	protected $default_atributes = array();

	public function __construct() {
		add_action('init', array($this, 'register_block_type'));
	}

	public function register_block_type(){
		$this->default_atributes = apply_filters("{$this->get_filter_prefix()}_default_attributes", $this->default_attributes);

		foreach( $this->default_atributes as $attribute_name => $default_value ){
			if( array_key_exists($attribute_name, $this->attributes) ){
				$this->attributes[$attribute_name]['default'] = $default_value;
			}
		}
		register_block_type(
			$this->name,
			array(
				'render_callback' => array($this, 'render_callback'),
				'attributes' => $this->attributes,
			)
		);
	}

	public function render_callback($attributes, $content) {
		return wp_artsolut_theme_blocks_get_template( $this->get_template_name(), $attributes, $content );
	}


	protected function get_filter_prefix() {
		// Replace all special characters in block type name with underscore.
		// Eg. wp-bootstrap-blocks/myblock => wp_bootstrap_blocks_myblock
		return preg_replace( '/[-\/]/', '_', $this->name );
	}

	protected function get_template_name() {
		// Remove namespace from block name.
		$namespace_separator_position = strrpos( $this->name, '/' );
		return false === $namespace_separator_position ? $this->name : substr( $this->name, $namespace_separator_position + 1 );
	}

}