<?php
/**
 * The template for displaying product content within loops
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.6.0
 */

defined( 'ABSPATH' ) || exit;

global $product;

// Ensure visibility.
if ( empty( $product ) || ! $product->is_visible() ) {
    return;
}

if ( has_term( 'low-cost', 'product_cat', $product->get_id() ) ) {
    $is_low_cost = true;
} else {
    $is_low_cost = false;
}
?>
<div <?php wc_product_class( 'col-12@xs col-6@sm col-4@lg', $product ); ?>>
    <?php
    /**
     * Hook: woocommerce_before_shop_loop_item.
     *
     * @hooked woocommerce_template_loop_product_link_open - 10
     */
    do_action( 'woocommerce_before_shop_loop_item' );
    ?>

    <div class="specific-product-wrapper">
        <?php
        /**
         * Hook: woocommerce_before_shop_loop_item_title.
         *
         * @hooked woocommerce_show_product_loop_sale_flash - 10
         * @hooked woocommerce_template_loop_product_thumbnail - 10
         */
        do_action( 'woocommerce_before_shop_loop_item_title' );
        ?>
    </div>

	<?php if ( $is_low_cost ) : ?>
        <div class="specific-product-wrapper-lowcost">
            LOWCOST
        </div>
    <?php endif; ?>

	<?php
        $tags = get_the_terms( $product->get_id(), 'product_tag' );
        if ( $tags && ! is_wp_error( $tags ) ) {
            echo '<div class="products__tags">';
            $tag_names = array();
            foreach ( $tags as $tag ) {
                $tag_names[] = $tag->name;
            }
            echo implode( ', ', $tag_names );
            echo '</div>';
            }
        ?>
    <?php
    /**
     * Hook: woocommerce_shop_loop_item_title.
     *
     * @hooked woocommerce_template_loop_product_title - 10
     */
    do_action( 'woocommerce_shop_loop_item_title' );
    ?>

    <?php
    /**
     * Hook: woocommerce_after_shop_loop_item_title.
     *
     * @hooked woocommerce_template_loop_rating - 5
     * @hooked woocommerce_template_loop_price - 10
     */
    do_action( 'woocommerce_after_shop_loop_item_title' );
    ?>

    <?php
    /**
     * Hook: woocommerce_after_shop_loop_item.
     *
     * @hooked woocommerce_template_loop_product_link_close - 5
     * @hooked woocommerce_template_loop_add_to_cart - 10
     */
    do_action( 'woocommerce_after_shop_loop_item' );
    ?>

</div>
