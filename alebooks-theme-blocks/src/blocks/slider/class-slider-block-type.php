<?php 

namespace WP_Artsolut_Theme_Blocks\Home_Slider;
use WP_Artsolut_Theme_Blocks\Block_Type;

if ( !defined('ABSPATH') ){ die('Direct access not permited.'); }
if (!class_exists('WP_Artsolut_Theme_Blocks\Home_Slider\Artsolut_Home_Slider_Block_Type', false)):
	class Artsolut_Home_Slider_Block_Type extends Block_Type{
		protected $name = 'wp-artsolut-blocks/home-slider';
		protected $attributes = array();
		protected $default_attributes = array();
	}
endif;
