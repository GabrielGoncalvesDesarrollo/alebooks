<?php if ( !defined('ABSPATH') ){ die('Direct access not permited.'); } ?>
<?php get_header(); ?>
<?php if (have_posts()): the_post();?>
	<?php the_content() ?>
<?php endif; ?>
<?php get_footer(); ?>