<?php 

namespace WP_Artsolut_Theme_Blocks\FAQ;
use WP_Artsolut_Theme_Blocks\Block_Type;

if ( !defined('ABSPATH') ){ die('Direct access not permited.'); }
if (!class_exists('WP_Artsolut_Theme_Blocks\FAQ\Artsolut_FAQ_Block_Type', false)):
	class Artsolut_FAQ_Block_Type extends Block_Type{
		protected $name = 'wp-artsolut-blocks/faq';
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
