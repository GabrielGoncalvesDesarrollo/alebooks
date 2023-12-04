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


add_filter('render_block', 'art_blocks_modify', 10, 2);
function art_blocks_modify($block_content, $block)
{

	/* if($block['blockName']  === 'core/image'){
		if($block['attrs']['isParallax'] === true){
			$figure_pattern = '/<figure(.*?)>/s';
			if (preg_match_all($figure_pattern, $block_content, $matches)) {
				foreach ($matches[0] as $figure) {
					$figure_with_data = str_replace('<figure', '<figure data-module-banner', $figure);
					$block_content = str_replace($figure, $figure_with_data, $block_content);
				}
			}
		}

		if (isset($block['attrs']['negativeMargin']) && $block['attrs']['negativeMargin'] === true) {
			$block_content = new WP_HTML_Tag_Processor( $block_content );
      $block_content->next_tag('figure'); 
      $block_content->add_class( 'negative-margin' );
      $block_content->get_updated_html();
		}
	} */

	/* if ($block['blockName'] == 'core/heading' && !is_admin()) {
    $dom = new DOMDocument();
    // Establecer la codificación adecuada al cargar el contenido HTML
    $dom->loadHTML(mb_convert_encoding($block_content, 'HTML-ENTITIES', 'UTF-8'), LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);

    $h1Element = $dom->getElementsByTagName('h1')->item(0);
    $childNodes = $h1Element->childNodes;

    $lineas = [];
    foreach ($childNodes as $childNode) {
        if ($childNode->nodeType === XML_TEXT_NODE) {
            $lineas[] = $childNode->nodeValue;
        }
    }

    if (count($lineas) > 1) {
        $primeraParte = trim($lineas[0]);
        $segundaParte = trim($lineas[1]);

        $span = $dom->createElement('span', $primeraParte);
        $span->setAttribute('class', 'first-part');

        $h1Element->nodeValue = '';
        $h1Element->appendChild($span);

        $brElement = $dom->createElement('br');
        $h1Element->appendChild($brElement);

        $textNode = $dom->createTextNode($segundaParte);
        $h1Element->appendChild($textNode);
    }
    // Obtener el contenido HTML con la codificación adecuada
    $block_content = mb_convert_encoding($dom->saveHTML(), 'UTF-8', 'HTML-ENTITIES');
	}  */

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
//add_filter('wp_content_img_tag', 'art_img_tag_image_sizes', 10, 3);


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

/* Woocommerce */



if (!function_exists('art_is_woocommerce_activated')) {
	/**
	 * Query WooCommerce activation
	 */
	function art_is_woocommerce_activated()
	{
		return class_exists('WooCommerce') ? true : false;
	}
}

if (!function_exists('art_header_cart')) {
	/**
	 * Display Header Cart
	 *
	 * @since  1.0.0
	 * @uses  art_is_woocommerce_activated() check if WooCommerce is activated
	 * @return void
	 */
	function art_header_cart()
	{
		if (art_is_woocommerce_activated()) {
			if (is_cart()) {
				$class = 'current-menu-item';
			} else {
				$class = '';
			}
?>
			<ul id="site-header-cart" class="site-header-cart cart-menu">
				<li class="<?php echo esc_attr($class); ?>">
					<?php art_cart_link(); ?>
				</li>
				<li class="cart-widget">
					<?php the_widget('WC_Widget_Cart', 'title='); ?>
				</li>
			</ul>
	<?php
		}
	}
}

function art_cart_link()
{
	if (!art_woo_cart_available()) {
		return;
	}
	?>
	<a class="cart-contents" href="<?php echo esc_url(wc_get_cart_url()); ?>" title="<?php esc_attr_e('Ver tu carrito', 'editorial'); ?>">
		<?php /* translators: %d: number of items in cart */ ?>
		<?php echo wp_kses_post(WC()->cart->get_cart_subtotal()); ?> <span class="count"><?php echo wp_kses_data(WC()->cart->get_cart_contents_count()); ?></span>
		<span class="cart-icon">
			<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M7.31025 17.7824C7.74588 17.7824 8.09902 17.4292 8.09902 16.9936C8.09902 16.558 7.74588 16.2048 7.31025 16.2048C6.87463 16.2048 6.52148 16.558 6.52148 16.9936C6.52148 17.4292 6.87463 17.7824 7.31025 17.7824Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				<path d="M15.9865 17.7824C16.4221 17.7824 16.7753 17.4292 16.7753 16.9936C16.7753 16.558 16.4221 16.2048 15.9865 16.2048C15.5509 16.2048 15.1978 16.558 15.1978 16.9936C15.1978 17.4292 15.5509 17.7824 15.9865 17.7824Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				<path d="M1 1.21802H4.15507L6.26896 11.7796C6.34109 12.1427 6.53865 12.469 6.82705 12.7011C7.11545 12.9333 7.47633 13.0566 7.8465 13.0495H15.5133C15.8835 13.0566 16.2444 12.9333 16.5328 12.7011C16.8212 12.469 17.0187 12.1427 17.0908 11.7796L18.3529 5.16185H4.94383" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</span>
	</a>
	<?php
}

if (!function_exists('art_woo_cart_available')) {
	/**
	 * Validates whether the Woo Cart instance is available in the request
	 *
	 * @since 2.6.0
	 * @return bool
	 */
	function art_woo_cart_available()
	{
		$woo = WC();
		return $woo instanceof \WooCommerce && $woo->cart instanceof \WC_Cart;
	}
}


function art_header_cart_output()
{
	global $woocommerce;

	ob_start();

	if ($woocommerce) {
	?>
		<div class="cart-outer">
			<div class="cart-menu-wrap">
				<div class="cart-menu">
					<a class="cart-contents" href="<?php echo wc_get_cart_url(); ?>">
						<div class="cart-icon-wrap">
							<i class="icon-art-cart" aria-hidden="true"></i>
							<div class="cart-wrap">
								<span><?php echo esc_html($woocommerce->cart->cart_contents_count); ?> </span>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
<?php
	}

	$captured_cart_content = ob_get_clean();
	return $captured_cart_content;
}


function enqueue_wc_cart_fragments()
{
	wp_enqueue_script('wc-cart-fragments');
}
add_action('wp_enqueue_scripts', 'enqueue_wc_cart_fragments');