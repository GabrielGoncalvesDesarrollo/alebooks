<?php if ( !defined('ABSPATH') ){ die('Direct access not permited.'); }


/**
 * Funciones comunes
 */


function art_custom_login_logo()
{
	$custom_logo_id = get_theme_mod('custom_logo');
	$logo_url = wp_get_attachment_image_url($custom_logo_id, 'full');

	if ($logo_url) {
		echo '<style type="text/css">
            #login h1 a, .login h1 a {
                background-image: url(' . $logo_url . ');
                background-size: contain;
                width: auto;
                height: auto;
            }
        </style>';
	}
}
add_action('login_enqueue_scripts', 'art_custom_login_logo');

function art_vertical_align($data)
{
	$classes = array();

	$verticalAlignProperties = array(
		array('property' => 'YverticalXs', 'className' => 'justify-#@xs'),
		array('property' => 'YverticalMd', 'className' => 'justify-#@md'),
		array('property' => 'YverticalXl', 'className' => 'justify-#@lg'),
	);

	$hasVertical = false;

	foreach ($verticalAlignProperties as $prop) {
		$property = $prop['property'];
		$className = $prop['className'];
		if (array_key_exists($property, $data) && $data[$property] !== '') {
			$hasVertical = true;
			$classes[] = str_replace('#', $data[$property], $className);
		}
	}

	if(!empty($classes)){
		array_unshift($classes, "flex", "flex-column");
	}
	return $classes;
}

function art_margin($data){
	$classes = array();

	$marginProperties = array(
		array('property' => 'marginTopXs', 'className' => 'margin-top-#@xs'),
		array('property' => 'marginLeftXs', 'className' => 'margin-left-#@xs'),
		array('property' => 'marginRightXs', 'className' => 'margin-right-#@xs'),
		array('property' => 'marginBottomXs', 'className' => 'margin-bottom-#@xs'),
		array('property' => 'marginTopMd', 'className' => 'margin-top-#@md'),
		array('property' => 'marginLeftMd', 'className' => 'margin-left-#@md'),
		array('property' => 'marginRightMd', 'className' => 'margin-right-#@md'),
		array('property' => 'marginBottomMd', 'className' => 'margin-bottom-#@md'),
		array('property' => 'marginTopXl', 'className' => 'margin-top-#@lg'),
		array('property' => 'marginLeftXl', 'className' => 'margin-left-#@lg'),
		array('property' => 'marginRightXl', 'className' => 'margin-right-#@lg'),
		array('property' => 'marginBottomXl', 'className' => 'margin-bottom-#@lg'),
	);

	foreach ($marginProperties as $prop) {
		$property = $prop['property'];
		$className = $prop['className'];
		if (array_key_exists($property, $data) && $data[$property] !== '') {
			$classes[] = str_replace('#', $data[$property], $className);
		}
	}

	return $classes;
}


function art_padding($data){
	$classes = array();

	$paddingProperties = array(
		array('property' => 'paddingTopXs', 'className' => 'padding-top-#@xs'),
		array('property' => 'paddingLeftXs', 'className' => 'padding-left-#@xs'),
		array('property' => 'paddingRightXs', 'className' => 'padding-right-#@xs'),
		array('property' => 'paddingBottomXs', 'className' => 'padding-bottom-#@xs'),
		array('property' => 'paddingTopMd', 'className' => 'padding-top-#@md'),
		array('property' => 'paddingLeftMd', 'className' => 'padding-left-#@md'),
		array('property' => 'paddingRightMd', 'className' => 'padding-right-#@md'),
		array('property' => 'paddingBottomMd', 'className' => 'padding-bottom-#@md'),
		array('property' => 'paddingTopXl', 'className' => 'padding-top-#@lg'),
		array('property' => 'paddingLeftXl', 'className' => 'padding-left-#@lg'),
		array('property' => 'paddingRightXl', 'className' => 'padding-right-#@lg'),
		array('property' => 'paddingBottomXl', 'className' => 'padding-bottom-#@lg'),
	);

	foreach ($paddingProperties as $prop) {
		$property = $prop['property'];
		$className = $prop['className'];
		if (array_key_exists($property, $data) && $data[$property] !== '') {
			$classes[] = str_replace('#', $data[$property], $className);
		}
	}

	return $classes;
}

function art_matrix_alignment($data){
	$classes = array();

	$matrixProperties = array(
		array('property' => 'bgalignXs', 'size' => 'xs'),
		array('property' => 'bgalignMd', 'size' => 'md'),
		array('property' => 'bgalignXl', 'size' => 'lg'),
	);

	foreach ($matrixProperties as $prop) {
		$property = $prop['property'];
		$size = $prop['size'];
		if (array_key_exists($property, $data) && $data[$property] !== '') {
			$classes[] = 'bg-' . str_replace(' ', '-', $data[$property]).'@'.$size;
		}
	}
	return $classes;
}

function art_bg_size($data){
	$classes = array();

	$matrixProperties = array(
		array('property' => 'bgsizeXs', 'size' => 'xs'),
		array('property' => 'bgsizeMd', 'size' => 'md'),
		array('property' => 'bgsizeXl', 'size' => 'lg'),
	);

	foreach ($matrixProperties as $prop) {
		$property = $prop['property'];
		$size = $prop['size'];
		if (array_key_exists($property, $data) && $data[$property] !== '') {
			$classes[] = 'bg-' . $data[$property] . '@' . $size;
		}
	}
	return $classes;
}


function art_order_column($data) {
	$classes = array();

	$orderMatrix = array(
		array('property' => 'orderXs', 'size' => 'xs'),
		array('property' => 'orderMd', 'size' => 'md'),
		array('property' => 'orderXl', 'size' => 'lg')
	);

	foreach ($orderMatrix as $prop) {
		$property = $prop['property'];
		$size = $prop['size'];
		if (array_key_exists($property, $data) && $data[$property] !== '') {
			$classes[] = 'order-' . $data[$property] . '@' . $size;
		}
	}

	return $classes;
}

function art_aspect($data){
	$classes = array();

	
	$optionsArray = array(
		array('property' => 'aspectXs', 'size' => 'xs'),
		array('property' => 'aspectMd', 'size' => 'md'),
		array('property' => 'aspectXl', 'size' => 'lg'),
	);

	foreach ($optionsArray as $prop) {
		$property = $prop['property'];
		$size = $prop['size'];
		$value = $prop['value'];

		if (array_key_exists($property, $data) && $data[$property] !== '') {
			$classes[] = 'aspect-ratio-' . $data[$property] . '@' . $size;
		}
	}

	return $classes;
}



// Adds a class to the list block.

add_filter('render_block_wp-artsolut-blocks/column', 'PL_add_class_to_column_block', 10, 3);
function PL_add_class_to_column_block($block_content, $block, $instance)
{
	// Instantiate the tag processor.
	$content = new WP_HTML_Tag_Processor($block_content);

	$content->next_tag(['div']);

	$data = $block['attrs'];
	$classes = array();

	$padding_classes = art_padding($data);
	$vertical_classes = art_vertical_align($data);
	
	$aspect_classes = art_aspect($data);
	$order_classes = art_order_column($data);


	$classes = array_merge($padding_classes, $vertical_classes, $aspect_classes, $order_classes);

	if (!empty($classes)) {
		$content->add_class(implode(" ", $classes));
	}

	// Save the updated block content.
	$block_content = (string) $content;

	// Return the block content.
	return $block_content;
}


add_filter('render_block_wp-artsolut-blocks/container', 'PL_add_class_to_container_block', 10, 3);

function PL_add_class_to_container_block($block_content, $block, $instance){
	
	$content = new WP_HTML_Tag_Processor($block_content);
	$content->next_tag(['.content']);

	
	$data = $block['attrs'];
	$alignment_classes = art_matrix_alignment($data);
	$bg_size_classes = art_bg_size($data);
	$padding_classes = art_padding($data);
	$margin_classes = art_margin($data);

	$classes = array_merge($alignment_classes, $bg_size_classes, $padding_classes, $margin_classes);

	if (!empty($classes)) {
		$content->add_class(implode(" ", $classes));
	}

	// Save the updated block content.
	$block_content = (string) $content;

	return $block_content;
}


// The content

function art_modify_the_content($content)
{

	$processor = new WP_HTML_Tag_Processor($content);

	if ($processor->next_tag('figure')) {
		if (stripos($processor->get_attribute('class'), 'alignfull') === false) {
			if ($processor->next_tag('img')) {
				$width = $processor->get_attribute('width');
				$width_rem = intval($width) / 16 . 'rem';
				$processor->set_attribute('style', 'width:' . $width_rem . '; height: auto');
				$processor->get_updated_html();
			}
		}
	}

	return $processor;
}

// Aplicar la función a través de the_content
add_filter('the_content', 'art_modify_the_content');
