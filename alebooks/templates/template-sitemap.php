<?php

/**
 * Template Name: Página - Mapa del sitio
 */

if (!defined('ABSPATH')) {
	die('Direct access not permited.');
}
?>
<?php get_header(); ?>

<?php if (have_posts()) : ?>
	<?php while (have_posts()) : the_post() ?>
		<?php the_content(); ?>
	<?php endwhile; ?>
<?php endif; ?>

<div class="content mb-md sitemap">
	<div class="container max-width-lg">
		<div class="grid">
			<div class="col-12 col-12@lg">
				<div class="mb-xs">
					<h2>Páginas</h2>
				</div>
				<?php
				wp_nav_menu(
					array(
						'menu_id' => 'pagemap-main-menu',
						'theme_location' => 'primary',
						'container'      => false,
						'depth'          => 2,
						'fallback_cb'    => false,
						'items_wrap' => '<ul id="%1$s" class="%2$s" role="menu" tabindex="-1">%3$s</ul>',
						'menu_class' => 'menu-map',
						'walker'         => new A11Y_Aria_Walker_Nav_Menu(),
					)
				);
				?>
			</div>
		</div>

	</div>
</div>

<div class="content mb-xl sitemap">
	<div class="container max-width-lg">
		<div class="grid">
			<div class="col-12 col-12@lg">
				<div class="mb-xs">
					<h2>Páginas Legales</h2>
				</div>
				<?php
				wp_nav_menu(
					array(
						'menu_id' => 'pagemap-legal-menu',
						'theme_location' => 'legal',
						'container'      => false,
						'depth'          => 2,
						'fallback_cb'    => false,
						'menu_class' => 'menu-map',
						'items_wrap' => '<ul id="%1$s" class="am-click-menu %2$s" role="menu" >%3$s</ul>',
						'walker'         => new A11Y_Aria_Walker_Nav_Menu(),
					)
				);
				?>
			</div>
		</div>

	</div>
</div>

<?php get_footer(); ?>