<?php if (!defined('ABSPATH')) {
	die('Direct access not permited.');
}
$classes = array();
$classes[] = 'content';
$classes[] = 'home-slider';

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

if (array_key_exists('showAsLink', $attributes) && $attributes['showAsLink'] != false) {
	$showAsLink = $attributes['showAsLink'];
}

if (array_key_exists('hasArrow', $attributes) && $attributes['hasArrow'] != false) {
	$hasArrow = $attributes['hasArrow'];
}

if (array_key_exists('bgColorName', $attributes) && $attributes['bgColorName'] != false) {
	$classes[] = $attributes['bgColorName'];
}


if (!empty($attributes['className'])) {
	$classes[] = art_theme_align_str($attributes['className']);
}


$classes = array_filter($classes, function ($value) {
	return !is_null($value) && $value !== '';
});
?>

<div class=" <?php echo esc_attr(implode(' ', $classes)); ?>">
	<div class="divider">
		<svg viewBox="0 0 888 133" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M888 0L0 1.67516e-05L0.000446311 21.6187H18.8206C165.345 21.6187 243.136 51.1882 315.304 89.4762C360.191 113.3 407.624 133 444 133C480.376 133 527.277 116.589 573.768 92.2419C646.228 54.3467 727.178 19.4081 869.18 19.4081H888L888 0Z" fill="#F1F1E2" />
		</svg>
	</div>
	<?php echo $content; ?>
</div>