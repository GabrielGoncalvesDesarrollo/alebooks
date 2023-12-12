<?php if (!defined('ABSPATH')) {
	die('Direct access not permited.');
} ?>
<?php


/* $classes = array('wp-artsolut-blocks-container'); */
$classes = array();
$classes[] = 'banner';
$bg = '';
$alt = '';


$classes = apply_filters('wp_artsolut_blocks_container_classes', $classes, $attributes);

/* $hasContainer = ($attributes['align'] != 'wide') ? true : false; */
$hasContainer = true;

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

$iframe_video = $attributes['iframeVideo'];

if (array_key_exists('photoUrl', $attributes) && $attributes['photoUrl'] != '') {
	$bg = $attributes['photoUrl'];
}

if (array_key_exists('photoAlt', $attributes) && $attributes['photoAlt'] != '') {
	$alt = $attributes['photoAlt'];
}

if (array_key_exists('bgColorName', $attributes) && $attributes['bgColorName'] != '') {
	$bgc = 'bg-' . $attributes['bgColorName'];
	$classes[] = $bgc;
}

if (!empty($attributes['className']))
	$classes[] = $attributes['className'];

$anchor = "";
if (!empty($attributes['anchor'])) {
	$anchor = 'id="' . $attributes['anchor'] . '" ';
}

if (array_key_exists('artHide', $attributes) && $attributes['artHide'] != false) {
	$classes[] = 'hide';
}

$classes = array_filter($classes, function ($value) {
	return !is_null($value) && $value !== '';
});
?>
<div class="box">
    <button id="scrollButton" class="btn" data-module-btnscroll>button</button>
    <div <?php echo $anchor ?> class="<?php echo esc_attr(implode(' ', $classes)); ?>">
        <?php if (!empty($bg)) : ?>
            <img class="bg" src="<?php echo $bg ?>" alt="<?php echo $alt ?>">
        <?php endif; ?>
    </div>
</div>







