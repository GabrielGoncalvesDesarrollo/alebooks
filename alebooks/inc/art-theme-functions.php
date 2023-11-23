<?php if (!defined('ABSPATH')) {
	die('Direct access not permited.');
}

function smartwp_remove_wp_block_library_css()
{
	wp_dequeue_style('wp-block-library');
	wp_dequeue_style('wp-block-library-theme');
	wp_dequeue_style('wc-blocks-style'); // Remove WooCommerce block CSS
}
add_action('wp_enqueue_scripts', 'smartwp_remove_wp_block_library_css', 100);

function art_remove_type_attr($tag, $handle)
{
	return preg_replace("/type=['\"]text\/(javascript|css)['\"]/", '', $tag);
}

add_filter('style_loader_tag', 'art_remove_type_attr', 10, 2);
add_filter('script_loader_tag', 'art_remove_type_attr', 10, 2);


/* Templates de bloques */
add_filter('wp_artsolut_blocks_template_path', function () {
	return  'art-block-templates/';
});

add_filter('wp_artsolut_theme_blocks_template_path', function () {
	return  'art-block-templates/';
});


add_filter('wpcf7_autop_or_not', '__return_false');

function art_options_callback($data, $options, $args)
{

	$option_madrid_email = get_field('_option_madrid_email', 'option');
	$option_madrid_option = get_field('_option_madrid_option', 'option');

	$option_portugal_email = get_field('_option_portugal_email', 'option');
	$option_portugal_option = get_field('_option_portugal_option', 'option');

	$option_italy_email = get_field('_option_italy_email', 'option');
	$option_italy_option = get_field('_option_italy_option', 'option');


	$data = [];
	foreach ($options as $option) {
		if ($option === 'clinicas') {
			$data = array_merge($data, ['Porto|lopepe.dev@gmail.com']);
		}
	}
	return $data;
}
/* add_filter('wpcf7_form_tag_data_option', 'art_options_callback', 10, 3); */


/* function styles */


function art_get_banner_bg_image_src($content)
{

	$result = '';

	$pattern = '/<img.*?src="(.*?)"/i';

	preg_match($pattern, $content, $matches);

	if (!empty($matches[1])) {
		$result =  $matches[1];
	}
	return $result;
}

add_filter('print_styles_array', 'custom_print_styles_array');
function custom_print_styles_array($styles)
{
	$styles_to_remove = array('mailpoet_public');
	if (is_array($styles) && count($styles) > 0) {
		foreach ($styles as $key => $code) {
			if (in_array($code, $styles_to_remove)) {
				unset($styles[$key]);
			}
		}
	}
	return $styles;
}

add_filter('mailpoet_display_custom_fonts', function () {
	return false;
});


add_filter('mailpoet_form_widget_post_process', 'art_remove_mailpoet_tags');

function art_remove_mailpoet_tags($form)
{
	$regexp = '/<style(.*?)type="text\/css"(.*?)>(.*?)<\/style>/is';
	$regexp_style = '/<[^>]+?\K style="[^"]*"/i';

	$form = preg_replace($regexp, '',  $form);
	$form = preg_replace($regexp_style, '',  $form);

	return $form;
}

function _art_change_defer_css($html, $handle)
{

	$deferred_stylesheets = apply_filters('art_change_deferred_stylesheets', array());

	if (in_array($handle, $deferred_stylesheets, true)) {
		/* return str_replace('media=\'all\'', 'media="print" onload="this.media=\'all\'"', $html); */
		return str_replace('media=\'all\'', 'media="all" onload="this.media=\'all\'; this.onload=null; this.isLoaded=true"', $html);
	} else {
		return $html;
	}
}
add_filter('style_loader_tag', '_art_change_defer_css', 10, 2);

/* Funciones de bloques */


//add_filter('render_block', 'art_blocks_modify', 10, 2); 
function art_blocks_modify($block_content, $block)
{

	return $block_content;
}

function art_img_tag_image_sizes($filtered_image, $context, $attachment_id)
{ 
	$dom = new DOMDocument();
	$dom->loadHTML($filtered_image);

	$xpath = new DOMXPath($dom);

	$images = $xpath->query('//img');

	if ($images->length > 0) {
		foreach ($images as $image) {
			// Obtener el ancho y alto actuales

			$parent = $image->parentNode;
			/* echo '<pre>';
			var_dump($parent);
			echo '</pre>'; */

			// Verificar si el elemento padre es un 'figure' y contiene la clase 'full-size'
			if ($parent->nodeName === 'figure' && strpos($parent->getAttribute('class'), 'full-size') !== false
			) {
				// Si el padre es un 'figure' con la clase 'full-size', omite esta imagen y continúa con la siguiente.
				continue;
			}

			$width = $image->getAttribute('width');
			$height = $image->getAttribute('height');

			if (empty($width) || empty($height))
				break;

			// Convertir el ancho y alto a unidades 'rem'
			$width_rem = intval($width) / 16 . 'rem';
			$height_rem = intval($height) / 16 . 'rem';

			$image->setAttribute('style', 'width: ' . $width_rem . '; height: auto;');
		}
	}
	$filtered_image = $dom->saveHTML(); 

	return $filtered_image;
}
/* add_filter('wp_content_img_tag', 'art_img_tag_image_sizes', 10, 3); */


function art_theme_align_str($className)
{
	$replacements = [
		'flexv' => 'flex flex-column',
		'flexh' => 'flex flex-row',
		'justify-xl-start' => 'justify-start@lg',
		'justify-xl-center' => 'justify-center@lg',
		'justify-xl-end' => 'justify-end@lg',
		'align-xl-start' => 'align-start@lg',
		'align-xl-center' => 'align-center@lg',
		'align-xl-end' => 'align-end@lg',
		'justify-md-start' => 'justify-start@md',
		'justify-md-center' => 'justify-center@md',
		'justify-md-end' => 'justify-end@md',
		'align-md-start' => 'align-start@md',
		'align-md-center' => 'align-center@md',
		'align-md-end' => 'align-end@md',
		'justify-xs-start' => 'justify-start@xs',
		'justify-xs-center' => 'justify-center@xs',
		'justify-xs-end' => 'justify-end@xs',
		'align-xs-start' => 'align-start@xs',
		'align-xs-center' => 'align-center@xs',
		'align-xs-end' => 'align-end@xs',
		'mt-xs' => 'margin-top-xs',
		'mt-md' => 'margin-top-md',
		'mt-xl' => 'margin-top-lg',
		// Agregar más reemplazos si es necesario
	];

	if (is_array($className)) {
		$className = array_map(function ($class) use ($replacements) {
			return str_replace(array_keys($replacements), array_values($replacements), $class);
		}, $className);
	} else {
		$className = str_replace(array_keys($replacements), array_values($replacements), $className);
	}

	return $className;
}

function add_custom_data_attribute($block_name, $block_attributes)
{
	if ($block_name === 'wp-artsolut-block/home-slider') {
		$block_attributes['data-custom-attribute'] = 'your-value';
	}
	return $block_attributes;
}
add_filter('getBlockDefaultClassName', 'add_custom_data_attribute', 10, 2);



function the_breadcrumb()
{

	$sep = ' / ';

	if (!is_front_page() && function_exists('bcn_display')) {
		bcn_display();
	}
}


function margin_options($attributes)
{
	if (array_key_exists('align', $attributes) && $attributes['align'] == 'full') {
		$hasContainer = false;
	}

	if (array_key_exists('artMarginTop', $attributes) && $attributes['artMarginTop'] != 'none') {
		$classes[] = 'mt-' . $attributes['artMarginTop'];
	}

	if (array_key_exists('artMarginBottom', $attributes) && $attributes['artMarginBottom'] != 'none') {
		$classes[] = 'mb-' . $attributes['artMarginBottom'];
	}

	if (array_key_exists('artPaddingTop', $attributes) && $attributes['artPaddingTop'] != 'none') {
		$classes[] = 'pt-' . $attributes['artPaddingTop'];
	}

	if (array_key_exists('artPaddingBottom', $attributes) && $attributes['artPaddingBottom'] != 'none') {
		$classes[] = 'pb-' . $attributes['artPaddingBottom'];
	}
}


function truncateString($string, $length, $ellipsis = '...')
{
	$string = strip_tags($string); // Eliminar etiquetas HTML
	if (mb_strlen($string) <= $length) {
		return $string;
	} else {
		$truncated = mb_substr($string, 0, $length);
		return $truncated . $ellipsis;
	}
}






