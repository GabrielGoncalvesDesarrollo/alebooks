<?php if (!defined('ABSPATH')) {
	die('Direct access not permited.');
} ?>
<?php get_header(); ?>
<div class="content margin-top-xl margin-bottom-xl">
	<div class="container">
		<div class="grid offset-1@lg">
			<div class="col-12 col-5@lg">
				<h1 class="has-text-dest1">
					<?php
					/* translators: %s: search term */
					printf(esc_attr__('Resultados de la búsqueda: %s', 'storefront'), '<span>' . get_search_query() . '</span>');
					?>
				</h1>
			</div>
		</div>
	</div>
</div>

<div class="content">
	<div class="container">
		<?php if (have_posts()): ?>
			<?php 
				while ( have_posts() ) :
				the_post();

				/**
				* Include the Post-Format-specific template for the content.
				* If you want to override this in a child theme, then include a file
				* called content-___.php (where ___ is the Post Format name) and that will be used instead.
				*/
				get_template_part( 'content', get_post_format() );

				endwhile;
			?>
		<?php endif; ?>
	</div>
</div>
<?php get_footer(); ?>