<?php 

namespace WP_Artsolut_Theme_Blocks\Panaderia;
use WP_Artsolut_Theme_Blocks\Block_Type;

if ( !defined('ABSPATH') ){ die('Direct access not permited.'); }
if (!class_exists('WP_Artsolut_Theme_Blocks\Panaderia\Artsolut_Panaderia_Block_Type', false)):
	class Artsolut_Panaderia_Block_Type extends Block_Type{
		protected $name = 'wp-artsolut-blocks/panaderia';
		protected $attributes = array(
			'cardTitle' => array(
				'type' => 'string'
			),
			'cardDirection' => array(
				'type' => 'string'
			),
			'imageAlt' => array(
				'type' => 'string'
			),
			'imageUrl' => array(
				'type' => 'string'
			),
			'coverColor' => array(
				'type' => 'string'
			),
			'coverColorName' => array(
				'type' => 'string'
			),
			'post' => array(
				'type' => 'object'
			)
		);
		protected $default_attributes = array(
			'cardTitle' => '',
			'cardDirection' => '',
			'imageAlt' => '',
			'imageUrl' => '',
			'coverColor' => '',
			'coverColorName' => '',
			'post' => null
		);
	}
endif;
