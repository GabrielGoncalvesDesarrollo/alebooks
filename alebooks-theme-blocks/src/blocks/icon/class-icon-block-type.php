<?php 

namespace WP_Artsolut_Theme_Blocks\Icon;
use WP_Artsolut_Theme_Blocks\Block_Type;

if ( !defined('ABSPATH') ){ die('Direct access not permited.'); }
if (!class_exists('WP_Artsolut_Theme_Blocks\Icon\Artsolut_Icon_Block_Type', false)):
	class Artsolut_Icon_Block_Type extends Block_Type{
		protected $name = 'wp-artsolut-blocks/icon';
		protected $attributes = array(
			'iconName' => array(
				'type' => 'string'
			)
		);
		protected $default_attributes = array(
			'iconName' => ''
		);
	}
endif;
