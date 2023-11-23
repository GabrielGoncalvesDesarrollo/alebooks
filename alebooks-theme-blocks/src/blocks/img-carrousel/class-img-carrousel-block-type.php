<?php 

namespace WP_Artsolut_Theme_Blocks\ImgCarrousel;
use WP_Artsolut_Theme_Blocks\Block_Type;

if ( !defined('ABSPATH') ){ die('Direct access not permited.'); } 

if (!class_exists('WP_Artsolut_Theme_Blocks\ImgCarrousel\Artsolut_ImgCarrousel_Block_Type', false)):
	class Artsolut_ImgCarrousel_Block_Type extends Block_Type{
		protected $name = 'wp-artsolut-blocks/imgcarrousel';
        protected $attributes = array(
            'images' => array(
				'type'=> 'array',
				'default' => [],
			)
        );
		protected $default_attributes = array(
              'images' => array(),
        );
	}
endif;
