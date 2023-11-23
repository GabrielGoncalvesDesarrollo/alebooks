<?php if (!defined('ABSPATH')) {
	die('Direct access not permited.');
} ?>

<?php
$classes = array();
$classes[] = 'product-slider';

$classes = array_filter($classes, function ($value) {
	return !is_null($value) && $value !== '';
});
?>

<div class="<?php echo esc_attr(implode(' ', $classes)); ?>" data-module-pslider>
	<div class="swiper mainswiper">
		<div class="slide-navigation">
			<div class="slide-button-prev"></div>
			<div class="slide-button-next"></div>
		</div>
		<?php echo $content ?>
	</div>
</div>