<?php if (!defined('ABSPATH')) {
	die('Direct access not permited.');
}
?>
<?php $form_unique_id = wp_unique_id('search-form-'); ?>

<form role="search" method="get" class="search-form" action="<?php echo esc_url(home_url('/')); ?>">
	<div class="grid gap-xs">
		<input class="col" placeholder="<?php echo __('Buscar en el blog', 'zambudio') ?>" type="text" id="<?php echo esc_attr($form_unique_id); ?>" class="search-field" aria-label="<?php echo __('Buscador', 'zambudio') ?>" value="<?php echo get_search_query(); ?>" name="s" />
		<input type="hidden" name="post_type" value="product">
	</div>
</form>