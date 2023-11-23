<?php if (!defined('ABSPATH')) {
	die('Direct access not permited.');
} ?>
<?php
$classes = array();
$classes[] = 'btn';

$showAsLink = false;
$hasArrow = false;

if (array_key_exists('align', $attributes) && $attributes['align'] != 'none' && $attributes['align'] != 'left') {
	$classes[] = 'align-' . $attributes['align'];
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

if (array_key_exists('artHide', $attributes) && $attributes['artHide'] != 'none') {
	$classes[] = 'arthide';
}

if (array_key_exists('showAsLink', $attributes) && $attributes['showAsLink'] != false) {
	$showAsLink = $attributes['showAsLink'];
}

if (array_key_exists('hasArrow', $attributes) && $attributes['hasArrow'] != false) {
	$hasArrow = $attributes['hasArrow'];
}

if (!empty($attributes['className']))
	$classes[] = $attributes['className'];


$classes = array_filter($classes, function ($value) {
	return !is_null($value) && $value !== '';
});
?>
<a role="button" href="<?php echo esc_url($attributes['url']) ?>" class="<?php echo esc_attr(implode(' ', $classes)) ?>" <?php if (!empty($attributes['rel'])) : ?> rel="<?php echo esc_attr($attributes['rel']); ?>" <?php endif; ?> <?php if (!empty($attributes['linkTarget'])) : ?> target="<?php echo esc_attr($attributes['linkTarget']); ?>" <?php endif; ?> title="<?php echo $attributes['text'] ?>">
	<?php echo $attributes['text']; ?>
	<span class="flecha"></span>
</a>