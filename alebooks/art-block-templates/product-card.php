<?php if (!defined('ABSPATH')) {
	die('Direct access not permited.');
} ?>

<?php
$classes = array();
$classes[] = 'product-card';

$title = $attributes['cardTitle'];

$image = $attributes['imageUrl'];
$alt = $attributes['imagealt'];

$post = $attributes['post'];
$url = '';
if(!empty($post))
	$url = $post['url'];


if(!empty($attributes['coverColorName'])){
	$classes[] = $attributes['coverColorName'];
}
$classes = array_filter($classes, function ($value) {
	return !is_null($value) && $value !== '';
});
?>

<div class="<?php echo esc_attr(implode(' ', $classes)); ?>">
	<a href="<?php echo $url ?>" alt="Ir al contenido">
		<div class="bg">
			<img src="<?php echo $image ?>" alt="<?php echo $alt ?>">
		</div>
		<div class="cover"></div>
		<div class="body">
			<h2><?php echo $title ?></h2>
			<span class="arrow"></span>
		</div>
	</a>
</div>