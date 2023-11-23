<?php if (!defined('ABSPATH')) {
	die('Direct access not permited.');
} ?>
<?php get_header(); ?>

<?php get_template_part('template-parts/single/single', get_post_type()); ?>

<?php get_footer(); ?>