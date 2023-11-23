<?php 

namespace WP_Artsolut_Theme_Blocks\Bannr;
use WP_Artsolut_Theme_Blocks\Block_Type;

if ( !defined('ABSPATH') ){ die('Direct access not permited.'); }
if (!class_exists('WP_Artsolut_Theme_Blocks\Bannr\Artsolut_Bannr_Block_Type', false)):
	class Artsolut_Bannr_Block_Type extends Block_Type{
		protected $name = 'wp-artsolut-blocks/banner';
		protected $attributes = array(
			'photoId' => array(
				'type' => 'number'
			),
			'photoUrl' => array(
				'type' => 'string',
				'default' => ''
			) 
		);
		protected $default_attributes = array(
			'photoId' => 0,
			'photoUrl' => '' 
		);
	}
endif;
