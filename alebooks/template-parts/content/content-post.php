<?php if (!defined('ABSPATH')) {
	die('Direct access not permited.');
} ?>

<?php
$thumbnail_id = get_post_thumbnail_id($post->ID);
$alt = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true);
$thumb = get_the_post_thumbnail_url($post->ID, 'full');
$terms = get_the_category();
?>

<div class="col-12 col-6@md col-4@lg post-card">
	<a href="<?php echo get_the_permalink() ?>" title="<?php echo __('Ir al contenido', 'hsf') ?>">
		<div class="imagen">
			<img src="<?php echo $thumb ?>" alt="<?php echo $alt ?>">
		</div>
		<div class="cuerpo">
			<h2 class="has-size-noticia"><?php echo get_the_title() ?></h2>
			<div class="fecha"><?php echo the_date() ?></div>
			<div class="excerpt"><?php echo truncateString(get_the_content(), 100) ?></div>
			<div class="goto"><?php echo __('Leer más', 'hsf') ?><span class="arrow"></span></div>
		</div>
	</a>
</div>
