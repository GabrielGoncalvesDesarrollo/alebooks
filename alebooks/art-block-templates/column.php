<?php if ( !defined('ABSPATH') ){ die('Direct access not permited.'); } ?>
<?php 
	$classes = array();
	$classes[] = 'col-none';
	$classes[] = 'col-' . $attributes['sizeXs'].'';
	$classes[] = 'col-' . $attributes['sizeMd'].'@sm';
	$classes[] = 'col-' . $attributes['sizeXl'].'@lg';

	if( array_key_exists('bgColorName', $attributes) && $attributes['bgColorName'] != '' ) {
		$classes[] = $attributes['bgColorName'];
	}
	
	if( array_key_exists('hasPadding', $attributes) && $attributes['hasPadding'] != false ) {
		$classes[] = 'has-padding';
	}

	if( array_key_exists('contentHeight', $attributes) && $attributes['contentHeight'] != false ) {
		$classes[] = 'has-content-height';
	}

	if	(array_key_exists('artMarginTop', $attributes) && $attributes['artMarginTop'] != false) {
		$classes[] = 'mt-' . $attributes['artMarginTop'];
	}

	if	(array_key_exists('artMarginBottom', $attributes) && $attributes['artMarginBottom'] != false) {
		$classes[] = 'mb-' . $attributes['artMarginBottom'];
	}

	if( array_key_exists('borderCornerTopRight', $attributes ) && $attributes['borderCornerTopRight'] != false ){
		$classes[] = 'border-Corner-top-right';
	}

	if( array_key_exists('borderCornerTopLeft', $attributes ) && $attributes['borderCornerTopLeft'] != false ){
		$classes[] = 'border-Corner-top-left';
	}

	if( array_key_exists('borderCornerBottomLeft', $attributes ) && $attributes['borderCornerBottomLeft'] != false ){
		$classes[] = 'border-Corner-bottom-left';
	}

	if( array_key_exists('borderCornerBottomRight', $attributes ) && $attributes['borderCornerBottomRight'] != false ){
		$classes[] = 'border-Corner-bottom-right';
	}

	if( array_key_exists('overFlowed', $attributes ) && $attributes['overFlowed'] != false ){
		$classes[] = 'overFlowed';
	}

	if ( array_key_exists('cbgColorName', $attributes) && $attributes['cbgColorName'] != '') {
		$classes[] = 'bg-color-' . $attributes['cbgColorName'];
	}


	$verticalAlignProperties = array(
		array('property' => 'verticalTopXs', 'className' => 'justify-#@xs'),
		array('property' => 'verticalCentertXs', 'className' => 'justify-#@xs'),
		array('property' => 'verticalBottomtXs', 'className' => 'vertical-#@xs'),
		array('property' => 'verticalBetweenXs', 'className' => 'vertical-#@xs'),
		array('property' => 'verticalTopMd', 'className' => 'justify-#@md'),
		array('property' => 'verticalCentertMd', 'className' => 'justify-#@md'),
		array('property' => 'verticalBottomtMd', 'className' => 'vertical-#@md'),
		array('property' => 'verticalBetweenMd', 'className' => 'vertical-#@md'),
		array('property' => 'verticalTopXl', 'className' => 'justify-#@lg'),
		array('property' => 'verticalCentertXl', 'className' => 'justify-#@lg'),
		array('property' => 'verticalBottomtXl', 'className' => 'justify-#@lg'),
		array('property' => 'verticalBetweenXl', 'className' => 'justify-#@lg'),
	);

	$hasVertical = false;

	/* 
	foreach ($verticalAlignProperties as $prop) {
		$property = $prop['property'];
		$className = $prop['className'];
		if (array_key_exists($property, $attributes) && $attributes[$property] !== '') {
			$hasVertical = true;
			$classes[] = str_replace('#', $attributes[$property], $className);
		}
	} 
	*/

	if ($hasVertical) {
		$classes[] = 'flex';
		$classes[] = 'flex-column';
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

	/* foreach ($paddingProperties as $prop) {
		$property = $prop['property'];
		$className = $prop['className'];
		if (array_key_exists($property, $attributes) && $attributes[$property] !== '') {
			$classes[] = str_replace('#', $attributes[$property], $className);
		}
	} */

	if (!empty($attributes['className'])){
		$classes[] = art_theme_align_str($attributes['className']);
	}
										
	
	$iframe_video = $attributes['iframeVideo'];
	
	$classes = array_filter($classes, function($value) { return !is_null($value) && $value !== ''; });
	
	//$classes = art_theme_align_str($classes);
 ?>
<div class="<?php echo esc_attr(implode( ' ', $classes )) ?>">
	<?php if ($iframe_video): ?>
		<div class="ifvideo">
	<?php endif; ?>
	<?php echo $content; // phpcs:ignore ?>
	<?php if ($iframe_video): ?>
		</div>
	<?php endif; ?>
</div>