<?php if (!defined('ABSPATH')) {
	die('Direct access not permited.');
} ?>
<?php get_header(); ?>
<div class="container error_404">

	<div class="error_404__title">
		<h1>Error 404</h1>
	</div>

	<div class="grid error_404__content width-100%">
		<div class="col-12 col-4@md col-4@lg"></div>
		<div class="col-12 col-4@md col-4@lg">
			<p class="texto">
				<?php echo __('Estamos teniendo problemas para encontrar lo que buscas', 'domi') ?>
			</p>
			<p>
				<a role="button" class="btn" href="<?php echo home_url('/') ?>" alt="<?php echo __('Volver al inicio', 'domi') ?>"><?php echo __('Volver a la Home', 'domi') ?></a>
			</p>
		</div>
		<div class="col-12 col-4@md col-4@lg"></div>
	</div>
</div>
<?php get_footer(); ?>