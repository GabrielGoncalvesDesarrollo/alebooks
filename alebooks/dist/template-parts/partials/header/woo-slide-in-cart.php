<?php if (!defined('ABSPATH')) {
	die('Direct access not permited.');
} ?>

<?php

global $post;
global $woocommerce;
?>

<div class="art-slide-in-cart">
	<div class="inner container">
		<div class="header">
			<h4><?php echo esc_html(__('Carrito', 'domi')) ?></h4>
			<a href="#" class="close-cart"><span class="screen-reader-text"><?php echo __('Cerrar carro', 'domi') ?></span><span class="close-wrap"><i class="icon-art-close"></i></span></a>
		</div>
		<?php the_widget('WC_Widget_Cart', 'title= '); ?>
	</div>
</div>
<div class="art-slide-in-cart-bg"></div>