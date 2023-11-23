<?php 

namespace WP_Artsolut_Theme_Blocks\Card;
use WP_Artsolut_Theme_Blocks\Block_Type;

if ( !defined('ABSPATH') ){ die('Direct access not permited.'); }
if (!class_exists('WP_Artsolut_Theme_Blocks\Card\Artsolut_Card_Block_Type', false)):
	class Artsolut_Card_Block_Type extends Block_Type{
		protected $name = 'wp-artsolut-blocks/card';
		protected $attributes = array();
		protected $default_attributes = array();
	}
endif;
