<?php if (!defined('ABSPATH')) {
	die('Direct access not permited.');
} ?>
<?php

/* $classes = array('wp-artsolut-blocks-container'); */
$classes = array();
$classes[] = 'content';
$bg = '';


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

if( array_key_exists('cbgColorName', $attributes ) && $attributes['cbgColorName'] != ''){
	$classes[] = 'bg-color-'.$attributes['cbgColorName'];
}

if(array_key_exists('topDecoration', $attributes ) && $attributes['topDecoration'] != false ){
	$classes[] = 'decoration';
}

if (array_key_exists('decorationColor', $attributes) && $attribues['decorationColor']) {
	$classes[] = 'decoration-color-'.$attribues['decorationColor'];
}

if( array_key_exists('lesserborderCornerTopRight', $attributes ) && $attributes['lesserborderCornerTopRight'] != false ){
		$classes[] = 'lesserborder-Corner-top-right';
	}

	if( array_key_exists('lesserborderCornerTopLeft', $attributes ) && $attributes['lesserborderCornerTopLeft'] != false ){
		$classes[] = 'lesserborder-Corner-top-left';
	}

	if( array_key_exists('lesserborderCornerBottomLeft', $attributes ) && $attributes['lesserborderCornerBottomLeft'] != false ){
		$classes[] = 'lesserborder-Corner-bottom-left';
	}

	if( array_key_exists('lesserborderCornerBottomRight', $attributes ) && $attributes['lesserborderCornerBottomRight'] != false ){
		$classes[] = 'lesserborder-Corner-bottom-right';
	}

if( array_key_exists('paddingRightLeft', $attributes ) && $attributes['paddingRightLeft'] != false ){
		$classes[] = 'padding-Right-Left';
	}

	if( array_key_exists('alignCenter', $attributes ) && $attributes['alignCenter'] != false ){
		$classes[] = 'align-Center';
	}

$iframe_video = $attributes['iframeVideo'];

if (array_key_exists('photoUrl', $attributes) && $attributes['photoUrl'] != '') {
	$bg = ' style="background-image: url('.$attributes['photoUrl'].');"';
}

$anchor = "";
if (!empty($attributes['anchor'])) {
	$anchor = 'id="' . $attributes['anchor'] . '" ';
}

if (array_key_exists('artHide', $attributes) && $attributes['artHide'] != false) {
	$classes[] = 'hide';
}

	$paddingProperties = array(
		array('property' => 'paddingTopXs', 'className' => 'padding-top-#@xs'),
		array('property' => 'paddingLeftXs', 'className' => 'padding-left-#@xs'),
		array('property' => 'paddingRightXs', 'className' => 'padding-right-#@xs'),
		array('property' => 'paddingBottomXs', 'className' => 'padding-bottom-#@xs'),
		array('property' => 'paddingTopMd', 'className' => 'padding-top-#@md'),
		array('property' => 'paddingLeftMd', 'className' => 'padding-left-#@md'),
		array('property' => 'paddingRightMd', 'className' => 'padding-right-#@md'),
		array('property' => 'paddingBottomMd', 'className' => 'padding-bottom-#@md'),
		array('property' => 'paddingTopXl', 'className' => 'padding-top-#@lg'),
		array('property' => 'paddingLeftXl', 'className' => 'padding-left-#@lg'),
		array('property' => 'paddingRightXl', 'className' => 'padding-right-#@lg'),
		array('property' => 'paddingBottomXl', 'className' => 'padding-bottom-#@lg'),
	);

	foreach ($paddingProperties as $prop) {
		$property = $prop['property'];
		$className = $prop['className'];
		if (array_key_exists($property, $attributes) && $attributes[$property] !== '') {
			$classes[] = str_replace('#', $attributes[$property], $className);
		}
	}

/* if (!empty($attributes['className'])) {
	$classes[] = art_theme_align_str($attributes['className']);
}	 */

//$classes = art_theme_align_str($classes);

$classes = array_filter($classes, function ($value) {
	return !is_null($value) && $value !== '';
});
?>

<div <?php echo $anchor ?> class="<?php echo esc_attr(implode(' ', $classes)); ?>" <?php echo $bg ?>>

		<?php if ($hasContainer) : ?>
				<div class="container max-width-xl">
		<?php else: ?>
				<div class="container width-100%@xs max-width-100%@xs width-100%@lg max-width-100%@lg">
		<?php endif; ?>

		<?php echo $content; // phpcs:ignore ?>
	
		<?php if ($hasContainer) : ?>
			</div>
		<?php else: ?>
			</div>
		<?php endif; ?>
</div>