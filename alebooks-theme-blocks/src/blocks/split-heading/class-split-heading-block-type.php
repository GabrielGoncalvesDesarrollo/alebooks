<?php 

namespace WP_Artsolut_Theme_Blocks\Split_Heading;
use WP_Artsolut_Theme_Blocks\Block_Type;

if ( !defined('ABSPATH') ){ die('Direct access not permited.'); }
if (!class_exists('WP_Artsolut_Theme_Blocks\Split_Heading\Artsolut_Split_Heading_Block_Type', false)):
	class Artsolut_Split_Heading_Block_Type extends Block_Type{
		protected $name = 'wp-artsolut-blocks/split-heading';
		protected $attributes = array();
		protected $default_attributes = array();
	}
endif;
