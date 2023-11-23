<?php 

namespace WP_Artsolut_Theme_Blocks\Cat_Menu;
use WP_Artsolut_Theme_Blocks\Block_Type;

if ( !defined('ABSPATH') ){ die('Direct access not permited.'); }
if (!class_exists('WP_Artsolut_Theme_Blocks\Cat_Menu\Artsolut_Cat_Menu_Block_Type', false)):
	class Artsolut_Cat_Menu_Block_Type extends Block_Type{
		protected $name = 'wp-artsolut-blocks/cat-menu';
		protected $attributes = array();
		protected $default_attributes = array();
	}
endif;
