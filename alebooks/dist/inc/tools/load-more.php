<?php 
if ( !defined('ABSPATH') ){ die('Direct access not permited.'); }
 

function art_load_more_scripts() {
 
	global $wp_query; 
	
	// register our main script but do not enqueue it yet
	wp_register_script( 'loadmore', get_stylesheet_directory_uri() . '/assets/js/loadmore.js', array('jquery'), '1.0', true );
 
	// now the most interesting part
	// we have to pass parameters to myloadmore.js script but we can get the parameters values only in PHP
	// you can define variables directly in your HTML but I decided that the most proper way is wp_localize_script()
	
	wp_localize_script( 'loadmore', 'loadmore_params', array(
		'ajaxurl' => site_url() . '/wp-admin/admin-ajax.php', // WordPress AJAX
		'posts' => json_encode( $wp_query->query_vars ), // everything about your loop is here
		'current_page' => get_query_var( 'paged' ) ? get_query_var('paged') : 1,
		'max_page' => $wp_query->max_num_pages,
		'page_search' => (int)is_search(),
		'load_text' => __('Cargar más', 'ailimpo'),
		'loading_text' => __('cargando...', 'ailimpo'),
	) );
 
 	wp_enqueue_script( 'loadmore');
}
 
add_action( 'wp_enqueue_scripts', 'art_load_more_scripts', 99 );


if (!function_exists( 'add_query_vars_filter') ):
	function add_query_vars_filter( $vars ) {
			$vars[] .= 'tipo';
			return $vars;
	}
	add_filter( 'query_vars', 'add_query_vars_filter' );
endif;



function art_loadmore_ajax_handler(){
	// prepare our arguments for the query
	global $post, $noimage;
	$args = json_decode( stripslashes( $_POST['query'] ), true );

	$args['paged'] = $_POST['page'] + 1; // we need next page to be loaded
	$args['post_status'] = 'publish';
	
	$page_search = $_POST['page_search'];

	
	
	
	// it is always better to use WP_Query but not here
	query_posts( $args );
	
	if( have_posts() ) :
		while( have_posts() ): the_post();
		
			$tipo = get_post_type($post);
			
			if ($tipo == 'imprescindible'){
				get_template_part('template-parts/content/content-card', 'imprescindible', null, array('first' => false ));
			} elseif ( $tipo == 'actividad') {
				/* get_template_part('template-parts/content/card-actividad', null, array('page_search' => (int)$page_search)); */
			} else {
				get_template_part('template-parts/content/content-post', null, array('noimage' => $noimage ));
			}
		endwhile;
	endif;
	die; // here we exit the script and even no wp_reset_query() required!
}
 
add_action('wp_ajax_loadmore', 'art_loadmore_ajax_handler'); // wp_ajax_{action}
add_action('wp_ajax_nopriv_loadmore', 'art_loadmore_ajax_handler'); // wp_ajax_nopriv_{action}

function art_imprescindibles_loadmore(){

	$args = array(
		'post_type' => 'imprescindible',
		'post_status' => 'publish',
  	'paged'  => $_POST['paged'],
		'orderby' => 'date',
		'order' => 'DESC',
	);
	$res = new WP_Query($args);
	$max_pages = $res->max_num_pages;

	if ($res->have_posts()){
		while($res->have_posts()){
			$res->the_post();
			get_template_part('template-parts/content/content-card', 'imprescindible', null, array('first' => false ));
		}
		wp_reset_postdata();
	}
	die;
}

add_action('wp_ajax_imprescindibles', 'art_imprescindibles_loadmore');
add_action('wp_ajax_nopriv_imprescindibles', 'art_imprescindibles_loadmore');