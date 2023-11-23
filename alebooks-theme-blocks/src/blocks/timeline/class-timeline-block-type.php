<?php 

namespace WP_Artsolut_Theme_Blocks\Timeline;
use WP_Artsolut_Theme_Blocks\Block_Type;

if ( !defined('ABSPATH') ){ die('Direct access not permited.'); }
if (!class_exists('WP_Artsolut_Theme_Blocks\Timeline\Artsolut_Tinmeline_Block_Type', false)):
	class Artsolut_Timeline_Block_Type extends Block_Type{
		protected $name = 'wp-artsolut-blocks/timeline';
		protected $attributes = array(
			'items' => array(
				'type'=> 'array',
				'default' => []
			)
		);
		protected $default_attributes = array(
			'items' => array(),
		);
	}
endif;
