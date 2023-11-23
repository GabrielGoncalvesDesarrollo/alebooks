<?php if (!defined('ABSPATH')) {
	die('Direct access not permited.');
} ?>

<?php
$page_for_posts_id = get_option('page_for_posts');
$page_for_posts_obj = get_post($page_for_posts_id);
$page_for_posts_content_filtered = apply_filters('the_content', $page_for_posts_obj->post_content);
?>

<?php get_header(); ?>

<?php echo $page_for_posts_content_filtered; ?>

<div class="content margin-bottom-md">
	<div class="container max-width-xl">
		<div class="grid grid-md@lg gap-y-md@xs gap-x-md@lg gap-y-md@lg">
			<?php if (have_posts()) : ?>
				<?php while (have_posts()) : the_post(); ?>
					<?php get_template_part('template-parts/content/content', get_post_type()) ?>
				<?php endwhile; ?>
			<?php else : ?>
				<?php get_template_part('template-parts/content/content', 'none'); ?>
			<?php endif; ?>
		</div>
	</div>
</div>

<div class="content margin-bottom-xl">
	<div class="container">
		<div class="pagination">
			<?php
			global $wp_query;
			$big = 999999999; // Número de páginas máximas
			echo paginate_links(array(
				'base'    => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
				'format'  => '?paged=%#%',
				'current' => max(1, get_query_var('paged')),
				'total'   => $wp_query->max_num_pages,
				'screen_reader_text' => ''
			));
			?>
		</div>
	</div>
</div>
<?php get_footer(); ?>