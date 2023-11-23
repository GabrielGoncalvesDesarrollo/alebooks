<?php if ( !defined('ABSPATH') ){ die('Direct access not permited.'); }

if( function_exists('acf_add_options_page') ) :
    
	function add_acf_menu_pages(){

        acf_add_options_page(array(
            'page_title'      => 'Aliciaruiz config',
            'menu_title'      => 'Aliciaruiz config',
            'menu_slug'       => 'theme-options',
            'capability'      => 'manage_options',
            'position'        => 61.1,
            'redirect'        => true,
            'icon_url'        => 'dashicons-screenoptions',
            'update_button'   => 'Guardar opciones',
            'updated_message' => 'Opciones guardadas',
        ));

        /* acf_add_options_sub_page(array(
            'page_title'  => 'Contacto',
            'menu_title'  => 'Contacto',
            'parent_slug' => 'theme-options',
            'menu_slug'   => 'contact-options'
        )); */

    
        /*acf_add_options_sub_page(array(
            'page_title'  => 'Blog options',
            'menu_title'  => 'Blog options',
            'parent_slug' => 'theme-options',
            'menu_slug'   => 'blog-options'
        ));*/

        acf_add_options_sub_page(array(
            'page_title'  => 'Footer options',
            'menu_title'  => 'Footer options',
            'parent_slug' => 'theme-options',
            'menu_slug'   => 'footer-options'
        ));
        
        /* acf_add_options_sub_page(array(
            'page_title'  => 'Programas',
            'menu_title'  => 'Programas',
            'parent_slug' => 'theme-options',
            'menu_slug'   => 'programa-options'
        )); */

	}
	add_action('acf/init', 'add_acf_menu_pages');

// Add a Sub Page
endif;