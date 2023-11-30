<?php

/**
 * The Template for displaying product archives, including the main shop page which is a post type archive
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/archive-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.4.0
 */

defined('ABSPATH') || exit;

$category = get_queried_object();
$banner = get_field('_cat_banner', $category);
?>

<?php get_header('shop'); ?>

<?php if (!empty($banner)): ?>
	<div class="content mb-xl">
			<div class="archive__banner">
				<img src="<?php echo $banner['url'] ?>" alt="<?php echo $banner['alt'] ?>">
			</div>
	</div>
<?php endif; ?>

<div class="content mt-xl">
	<div class="container width-100%@xs max-width-100%@xs width-100%@lg max-width-100%@lg">
		<div class="grid offset-0 gap-md">			
			<?php if (is_search()): ?>
				<div class="col-12 col-12@lg offset-0@lg">
					<div class="titulo-archivo"><?php woocommerce_page_title(); ?></div>
				</div>
			<?php else: ?>
				<div class="col-12 col-12@lg offset-0@lg">
					<div class="titulo-archivo"><?php woocommerce_page_title(); ?></div>
				</div>
				<hr class="separador">
			<?php endif; ?>

		</div>
	</div>
</div>

<div class="content mb-xl">
	<div class="container">
		<?php if (woocommerce_product_loop()): ?>
		
			<div class="grid mb-xl offset-1">
				<?php //do_action('woocommerce_before_shop_loop'); ?>
			</div>

			<div class="grid offset-0">
				
				<div class="col-12@lg">
					<?php woocommerce_product_loop_start(); ?>
				
					<?php
					if (wc_get_loop_prop('total')) {
						while (have_posts()) {
							the_post();
				
							/**
							 * Hook: woocommerce_shop_loop.
							 */
							do_action('woocommerce_shop_loop');
				
							wc_get_template_part('content', 'product');
						}
					}
					?>
					<?php woocommerce_product_loop_end(); ?>
				</div>
			</div>
		

			<?php do_action('woocommerce_after_shop_loop'); ?>

		<?php else: ?>
			<?php do_action('woocommerce_no_products_found'); ?>
		<?php endif; ?>
	</div>
</div>

<?php get_footer('shop'); ?>