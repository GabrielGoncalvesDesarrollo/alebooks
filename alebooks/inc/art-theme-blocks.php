<?php if ( !defined('ABSPATH') ){ die('Direct access not permited.'); }

add_filter('render_block_wp-artsolut-blocks/product-slider', 'PL_add_class_to_product_slider_block', 10, 3);


function PL_add_class_to_product_slider_block($block_content, $block, $instance){

	$content = new WP_HTML_Tag_Processor($block_content);

	$content->next_tag(array('class_name' => 'wp-block-gallery'));
	$content->remove_class('wp-block-gallery');

	$content->remove_class('has-nested-images');
	$content->remove_class('columns-default');
	$content->remove_class('is-cropped');
	$content->remove_class('is-layout-flex');
	$content->remove_class('wp-block-gallery-is-layout');
	$content->add_class('swiper-wrapper');

	while ($content->next_tag(array('class_name'=> 'wp-block-image'))){
		$content->add_class('swiper-slide');
	};

	// Save the updated block content.
	$block_content = (string) $content;

	return $block_content;
}