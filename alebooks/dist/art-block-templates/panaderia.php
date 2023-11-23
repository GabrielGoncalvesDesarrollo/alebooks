<?php if (!defined('ABSPATH')) {
	die('Direct access not permited.');
} ?>

<?php
$classes = array();
$classes[] = 'panaderia-card';

$title = $attributes['cardTitle'];
$direction = $attributes['cardDirection'];

$image = $attributes['imageUrl'];
$alt = $attributes['imagealt'];

$post = $attributes['post'];


$url = '';
if (!empty($post))
	$url = $post['url'];

if (!empty($attributes['coverColorName'])) {
	$classes[] = $attributes['coverColorName'];
}
$classes = array_filter($classes, function ($value) {
	return !is_null($value) && $value !== '';
});
?>

<div class="<?php echo esc_attr(implode(' ', $classes)); ?>">
	<a href="<?php echo $url ?>" target="_blank" alt="Ir al contenido">
		<div class="bg">
			<img src="<?php echo $image ?>" alt="<?php echo $alt ?>">
		</div>
		<div class="cover"></div>
		<div class="body">
			<div class="data">
				<h2 class=¨has-text-banner¨><?php echo $title ?></h2>
				<p><?php echo $direction ?></p>
			</div>
			<div class="flecha">
				<?php echo __('Ver en maps', 'hsf') ?>
				<span class="arrow"></span>
			</div>
		</div>
	</a>
</div>