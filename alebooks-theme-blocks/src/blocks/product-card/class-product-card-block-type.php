<?php 

namespace WP_Artsolut_Theme_Blocks\Product_Card;
use WP_Artsolut_Theme_Blocks\Block_Type;

if ( !defined('ABSPATH') ){ die('Direct access not permited.'); }
if (!class_exists('WP_Artsolut_Theme_Blocks\Product_Card\Artsolut_Product_Card_Block_Type', false)):
	class Artsolut_Product_Card_Block_Type extends Block_Type{
		protected $name = 'wp-artsolut-blocks/product-card';
		protected $attributes = array(
			'cardTitle' => array(
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
			'imageAlt' => '',
			'imageUrl' => '',
			'coverColor' => '',
			'coverColorName' => '',
			'post' => null
		);
	}
endif;
