<?php if (!defined('ABSPATH')) {
	die('Direct access not permitted.');
}
?>
<?php $form_unique_id = wp_unique_id('search-form-'); ?>

<form role="search" method="get" class="search-form" action="<?php echo esc_url(home_url('/')); ?>">
	<div class="grid gap-xs">
		<input class="col search-field" placeholder="<?php echo __('Buscar en el catálogo', 'Alebooks') ?>" type="text" id="<?php echo esc_attr($form_unique_id); ?>" aria-label="<?php echo __('Buscador', 'Alebooks') ?>" value="<?php echo get_search_query(); ?>" name="s" />
		<input type="hidden" name="post_type" value="product">
	</div>
	<div class="flex justify-end@xl">
		<button type="submit" class="search-btn"><?php echo __('Buscar', 'Alebooks') ?></button>
	</div>
</form>
