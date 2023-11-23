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
