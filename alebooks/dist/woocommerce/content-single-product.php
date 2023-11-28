<?php

/**
 * The template for displaying product content in the single-product.php template
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-single-product.php.
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

defined('ABSPATH') || exit;

global $product;

$icons = get_field('_product_icons');

/**
 * Hook: woocommerce_before_single_product.
 *
 * @hooked woocommerce_output_all_notices - 10
 */
do_action('woocommerce_before_single_product');

if (post_password_required()) {
	echo get_the_password_form(); // WPCS: XSS ok.
	return;
}
?>
<div id="product-<?php the_ID(); ?>" <?php wc_product_class('container pb-xl', $product); ?>>
	<div class="container margin-top-xl@xs margin-top-xl@lg margin-bottom-md@lg">
		<div class="grid offset-1@lg">
			<div class="grid gap-x-md gap-y-xl@xs gap-y-md@lg">
				<div class="col-12 col-4@lg">
						<?php do_action('woocommerce_before_single_product_summary'); ?>
				</div>
				<div class="col-12 col-1@lg"></div>
				<div class="col-12 col-6@lg">
					<?php if (!empty($icons)): ?>
						<div class="product__icons">
							<div class="grid gap-x-xs gap-y-md">
								<?php foreach($icons as $icon): ?>
									<?php if ($icon = 'ninguno'): ?>
										<?php continue; ?>
									<?php endif; ?>
									<div class="col-6">
										<div class="product__icon">
											<i class="ico-<?php echo $icon['value'] ?>"></i>
											<span><?php echo $icon['label'] ?></span>
										</div>
									</div>
								<?php endforeach; ?>
							</div>
						</div>
					<?php endif; ?>
					<div class="product__title">
						<?php woocommerce_template_single_title(); ?>
					</div>
					<div class="product__price">
						<?php woocommerce_template_single_price(); ?>
					</div>
					<div class="product__excerpt">
						<?php woocommerce_template_single_excerpt() ?>
					</div>
					<div class="product__actions">
						<?php 
							woocommerce_template_single_add_to_cart()
						 ?>
					</div>
					<div class="product__meta">
						<?php woocommerce_template_single_meta(); ?>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="content product__related margin-top-2xl">
		<div class="container">
			<div class="grid offset-1@lg">
				<?php woocommerce_output_related_products() ?>
			</div>
		</div>
	</div>
	<?php
	/**
	 * Hook: woocommerce_before_single_product_summary.
	 *
	 * @hooked woocommerce_show_product_sale_flash - 10
	 * @hooked woocommerce_show_product_images - 20
	 */
	//do_action( 'woocommerce_before_single_product_summary' );
	?>

	<div class="summary entry-summary pt-xs">
		<?php
		/**
		 * Hook: woocommerce_single_product_summary.
		 *
		 * @hooked woocommerce_template_single_title - 5
		 * @hooked woocommerce_template_single_rating - 10
		 * @hooked woocommerce_template_single_price - 10
		 * @hooked woocommerce_template_single_excerpt - 20
		 * @hooked woocommerce_template_single_add_to_cart - 30
		 * @hooked woocommerce_template_single_meta - 40
		 * @hooked woocommerce_template_single_sharing - 50
		 * @hooked WC_Structured_Data::generate_product_data() - 60
		 */
		//do_action( 'woocommerce_single_product_summary' );
		?>
	</div>

	<?php
	/**
	 * Hook: woocommerce_after_single_product_summary.
	 *
	 * @hooked woocommerce_output_product_data_tabs - 10
	 * @hooked woocommerce_upsell_display - 15
	 * @hooked woocommerce_output_related_products - 20
	 */
	//do_action( 'woocommerce_after_single_product_summary' );
	?>
</div>

<?php do_action('woocommerce_after_single_product'); ?>