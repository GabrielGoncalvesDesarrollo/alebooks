<?php 

namespace WP_Artsolut_Theme_Blocks\Cta;
use WP_Artsolut_Theme_Blocks\Block_Type;

if ( !defined('ABSPATH') ){ die('Direct access not permited.'); }
if (!class_exists('WP_Artsolut_Theme_Blocks\Cta\Artsolut_Cta_Block_Type', false)):
	class Artsolut_Cta_Block_Type extends Block_Type{
		protected $name = 'wp-artsolut-blocks/cta';
		protected $attributes = array(
			'bgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bgColorName' => array(
				'type' => 'string',
				'default' => ''
			),
			'hasDecoration' => array(
				'type' => 'boolean',
				'default' => false
			)
		);
		protected $default_attributes = array(
			'bgColor' => '',
			'bgColorName' => '',
			'hasDecoration' => false,
		);
	}
endif;
