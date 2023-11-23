<?php 

namespace WP_Artsolut_Theme_Blocks\Bg_Cta;
use WP_Artsolut_Theme_Blocks\Block_Type;

if ( !defined('ABSPATH') ){ die('Direct access not permited.'); }
if (!class_exists('WP_Artsolut_Theme_Blocks\Bg_Cta\Artsolut_Bg_Cta_Block_Type', false)):
	class Artsolut_Bg_Cta_Block_Type extends Block_Type{
		protected $name = 'wp-artsolut-blocks/bg-cta';
		protected $attributes = array();
		protected $default_attributes = array();
	}
endif;
