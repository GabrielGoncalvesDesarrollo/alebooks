<?php if (!defined('ABSPATH')) {
	die('Direct access not permited.');
}

$classes = array();
$classes[] = 'content';
$classes[] = 'home-animation';

if (array_key_exists('titulo', $attributes) && $attributes['titulo'] != '') {
	$titulo = $attributes['titulo'];
}

if (!empty($attributes['className'])) {
	$classes[] = art_theme_align_str($attributes['className']);
}

$classes = array_filter($classes, function ($value) {
	return !is_null($value) && $value !== '';
});
?>

<div class=" <?php echo esc_attr(implode(' ', $classes)); ?>" data-module-animacion>
	<div class="bg">
		<div class="body">
			<div class="grid">
				<div class="col-3@lg home-animation__left">
					<img src="<?php echo ART_THEME_CSS ?>/assets/images/animacion-left.png" alt="<?php echo __('Patatas y frutos secos', 'domi') ?>">
				</div>
				<div class="col-6@lg home-animation__center">
					<?php if (!empty($titulo)) : ?>
						<h1 class="has-size-t2"><?php echo $titulo ?></h1>
					<?php endif; ?>
					<img src="<?php echo ART_THEME_CSS ?>/assets/images/animacion-center.png" alt="<?php echo __('Patatas y frutos secos', 'domi') ?>">
				</div>
				<div class="col-3@lg home-animation__right">
					<img src="<?php echo ART_THEME_CSS ?>/assets/images/animacion-right.png" alt="<?php echo __('Patatas y frutos secos', 'domi') ?>">
				</div>
			</div>
		</div>
	</div>
</div>