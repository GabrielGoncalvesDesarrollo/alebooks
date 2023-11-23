<?php 

namespace WP_Artsolut_Theme_Blocks\Home_Animation;
use WP_Artsolut_Theme_Blocks\Block_Type;

if ( !defined('ABSPATH') ){ die('Direct access not permited.'); }
if (!class_exists('WP_Artsolut_Theme_Blocks\Home_Animation\Artsolut_Home_Animation_Block_Type', false)):
	class Artsolut_Home_Animation_Block_Type extends Block_Type{
		protected $name = 'wp-artsolut-blocks/home-animation';
		protected $attributes = array(
			'titulo' => array(
				'type' => 'string',
				'default' => ''
			),
		);
		protected $default_attributes = array(
			'titulo' => '',
		);
	}
endif;
