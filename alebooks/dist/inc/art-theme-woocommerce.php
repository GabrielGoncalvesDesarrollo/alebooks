<?php if (!defined('ABSPATH')) {
	die('Direct access not permited.');
}

add_filter('woocommerce_add_to_cart_fragments', 'art_add_to_cart_fragment');

if (!function_exists('art_add_to_cart_fragment')) :
	function art_add_to_cart_fragment($fragments)
	{
		global $woocommerce;
		ob_start();
?>
		<a class="cart-contents" aria-label="<?php echo esc_html__('Cart', 'salient'); ?>" href="<?php echo wc_get_cart_url(); ?>">
			<div class="cart-icon-wrap"><i class="icon-art-cart"></i>
				<div class="cart-wrap"><span><?php echo esc_html($woocommerce->cart->cart_contents_count); ?> </span></div>
			</div>
		</a>
	<?php
		$fragments['a.cart-contents'] = ob_get_clean();
		return $fragments;
	}
endif;


// Quantity buttons
add_action('woocommerce_before_quantity_input_field', 'art_quantity_markup_mod_before', 10);
add_action('woocommerce_after_quantity_input_field', 'art_quantity_markup_mod_after', 10);


if (!function_exists('art_quantity_markup_mod_before')) {
	function art_quantity_markup_mod_before()
	{
		echo '<input type="button" value="-" class="minus" />';
	}
}

if (!function_exists('art_quantity_markup_mod_after')) {
	function art_quantity_markup_mod_after()
	{
		echo '<input type="button" value="+" class="plus" />';
	}
}


/* add_action('woocommerce_after_mini_cart', 'empty_minicart_buttons', 10); */

function empty_minicart_buttons()
{

	if (WC()->cart->is_empty()) {

		echo '<div class="nectar-inactive"><p class="woocommerce-mini-cart__total total">';
		do_action('woocommerce_widget_shopping_cart_total');
		echo '</p>';

		do_action('woocommerce_widget_shopping_cart_buttons');
		echo '</div>';
	}
}


/* add_action('woocommerce_widget_shopping_cart_before_buttons', 'art_woo_mini_cart_before_buttons');
 */
function art_woo_mini_cart_before_buttons()
{
	wp_nonce_field('woocommerce-cart');
	?>
	<div class="submit-button">
		<input type="submit" class="button" name="update_cart" value="<?php esc_attr_e('Actualizar carrito', 'domi'); ?>" />
	</div>
<?php
}

// Mini Cart QTY AJAX.
add_action('wp_ajax_art_minicart_update_quantity',  'update_cart_quantity');
add_action('wp_ajax_art_minicart_update_quantity', 'update_cart_quantity');

function update_cart_quantity()
{
	if (!isset($_POST['quantity']) || !isset($_POST['item_key']) || !function_exists('WC')) {
		wp_die();
	}
	$quantity = absint($_POST['quantity']);
	$item_key = sanitize_text_field($_POST['item_key']);

	WC()->cart->set_quantity($item_key, $quantity);

	wp_send_json(array(
		'item' => WC()->cart->get_cart_item($item_key),
		'subtotal' => WC()->cart->get_cart_subtotal(),
		'item_count' => WC()->cart->get_cart_contents_count()
	));
	wp_die();
}


remove_action('woocommerce_before_shop_loop_item_title', 'woocommerce_template_loop_product_thumbnail', 10);
add_action('woocommerce_before_shop_loop_item_title', 'woocommerce_template_loop_product_thumbnail', 10);

/**
 * WooCommerce Loop Product Thumbs
 **/
if (!function_exists('woocommerce_template_loop_product_thumbnail')) {
	function woocommerce_template_loop_product_thumbnail()
	{
		echo "<div class='product__img-wrapper'>";
		echo woocommerce_get_product_thumbnail();
		echo "</div>";
	}
}


function art_change_related_products($args)
{
	// Cambia el número de productos relacionados que se mostrarán
	$args['posts_per_page'] = 3; // Cambia este número al que desees

	return $args;
}

add_filter('woocommerce_output_related_products_args', 'art_change_related_products');

function art_change_related_product_heading($title)
{
	// Cambia el título de los productos relacionados
	$title = 'Te puede interesar'; // Cambia este texto al que desees

	return $title;
}

add_filter('woocommerce_product_related_products_heading', 'art_change_related_product_heading');



function art_limita_envios($provincias)
{
	unset($provincias['ES']['TF']);
	unset($provincias['ES']['GC']);
	unset($provincias['ES']['CE']);
	unset($provincias['ES']['ML']);
	return $provincias;
}
add_filter('woocommerce_states', 'art_limita_envios');


function custom_pre_get_posts_query($q)
{

	$tax_query = (array) $q->get('tax_query');

	$tax_query[] = array(
		'taxonomy' => 'product_cat',
		'field' => 'slug',
		'terms' => array('frutos-secos'), // Don't display products in the clothing category on the shop page.
		'operator' => 'NOT IN'
	);


	$q->set('tax_query', $tax_query);
}
/* add_action('woocommerce_product_query', 'custom_pre_get_posts_query'); */

add_filter('woocommerce_ship_to_different_address_checked', '__return_false');
