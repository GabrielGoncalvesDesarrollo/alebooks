<?php if ( !defined('ABSPATH') ){ die('Direct access not permited.'); } ?>
<?php 
	$classes = array();
	$classes[] = 'grid';
	/* $classes[] = 'gap-md'; */

	if (array_key_exists('equalHeight', $attributes) && $attributes['equalHeight'] == true) {
		$classes[] = 'has-equal';
	}

	if (array_key_exists('noGutters', $attributes) && $attributes['noGutters'] == true) {
		$classes[] = 'no-gutters';
	}

	if (array_key_exists('columnGutter', $attributes) && $attributes['columnGutter'] != '') {
		
		switch ($attributes['columnGutter']) {
			case 'md':
				$classes[] = 'gap-x-md';
				break;
			case 'xs':
				$classes[] = 'gap-x-xs';
				break;
		}
		/* $classes[] = 'gap-col-' . $attributes['columnGutter']; */
	}

	if (array_key_exists('rowGutter', $attributes) && $attributes['rowGutter'] != '') {
		switch ($attributes['rowGutter']) {
			case 'md':
				$classes[] = 'gap-y-md';
				break;
			case 'xs':
				$classes[] = 'gap-y-xs';
				break;
		}
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

	if (!empty($attributes['className'])){
		$classes[] = $attributes['className'];
	}

	$classes = array_filter($classes, function($value) { return !is_null($value) && $value !== ''; });
?>
<div class="<?php echo esc_attr(implode( ' ', $classes )) ?>">
	<?php echo $content; // phpcs:ignore ?>
</div>