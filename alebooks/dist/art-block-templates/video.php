<?php if ( !defined('ABSPATH') ){ die('Direct access not permited.'); } ?>
<?php 
	$classes = array();
	$classes[] = 'art-video';

	$classes = apply_filters( 'wp_artsolut_blocks_container_classes', $classes, $attributes );

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

	$anchor = "";
	if (!empty($attributes['anchor'])) {
		$anchor = 'id="'.$attributes['anchor'].'" ';
	}

	if( array_key_exists('artHide', $attributes) && $attributes['artHide'] != false ) {
		$classes[] = 'hide';
	}

	$photoUrl = '';
	$photoAlt = '';
	$videoType = '';
	$videoId = '';

	if( array_key_exists('photoUrl', $attributes) && $attributes['photoUrl'] != '' ) {
		$photoUrl = $attributes['photoUrl'];
	}

	if( array_key_exists('videoType', $attributes) && $attributes['videoType'] != '' ) {
		$videoType = $attributes['videoType'];
	}

	if( array_key_exists('videoId', $attributes) && $attributes['videoId'] != '' ) {
		$videoId = $attributes['videoId'];
	}

	$classes = array_filter($classes, function($value) { return !is_null($value) && $value !== ''; });

 ?>

<div <?php echo $anchor ?> class="<?php echo esc_attr( implode( ' ', $classes ) ); ?>" data-module-player>
		<?php if (!empty($photoUrl)): ?>
			<!-- <div class="placeholder"><img src="<?php echo $photoUrl ?>" alt="<?php echo $photoAlt ?>"></div>
			<div class="play-button"><img src="<?php echo ART_THEME_CSS ?>/assets/images/play.svg" alt="<?php echo __('Play', 'psicodepor') ?>"></div> -->
		<?php endif; ?>
		<div class="video-player" data-plyr-provider="<?php echo $videoType ?>" data-plyr-embed-id="<?php echo $videoId ?>" data-poster="<?php echo $photoUrl ?>"></div>
</div>