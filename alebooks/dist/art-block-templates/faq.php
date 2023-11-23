<?php
if (!defined('ABSPATH')) {
	die('Direct access not permitted.');
}

$classes = array();
$classes[] = 'faq';

$items = $attributes['items'];

if (!empty($attributes['className']))
	$classes[] = $attributes['className'];


$classes = array_filter($classes, function ($value) {
	return !is_null($value) && $value !== '';
});
?>

<div class="<?php echo esc_attr(implode(' ', $classes)); ?>">
    <?php foreach ($items as $item) : ?>
        <div class="faq__component" data-module-acordeon>
            <div class="faq__item" >
                <div class="faq__item__title left">
                    <span><?php echo $item['title'] ?></span>
                    <div class="faq__arrow"></div>
                </div>
                <div class="faq__item__content left">
                    <?php echo $item['description'] ?>
                </div>
            </div>
        </div>
    <?php endforeach; ?>
</div>
