<?php
if (!defined('ABSPATH')) {
	die('Direct access not permitted.');
}

$classes = array();
$classes[] = 'timeline';

$items = $attributes['items'];

if (!empty($attributes['className']))
	$classes[] = $attributes['className'];

$classes = array_filter($classes, function ($value) {
	return !is_null($value) && $value !== '';
});
?>

<div class="<?php echo esc_attr(implode(' ', $classes)); ?>">
	<?php
	$counter = 1;

	?>
	<?php foreach ($items as $item) : ?>
		<div class="timeline__component">
			<div class="timeline__item__image">
				<?php if (!empty($item['image'])) : ?>
					<img src="<?php echo esc_url($item['image']); ?>" alt="Selected Image" />
				<?php endif; ?>
			</div>
			<div class="timeline__icon"></div>
			<div class="timeline__item__content">
                <div class="timeline__item__content title">
                    <?php echo esc_html($item['title']); ?>
                </div>
                <div class="timeline__item__content desc">
                    <?php echo esc_html($item['description']); ?>
                </div>
			</div>
		</div>
	<?php endforeach; ?>
</div>
