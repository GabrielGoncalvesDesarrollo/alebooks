<?php if ( !defined('ABSPATH') ){ die('Direct access not permited.'); } 


class Art_Install {
	public static function init(){
		self::install();
	}


	public static function install(){
		if(!is_blog_installed()){
			return;
		}
		self::create_roles();
	}

	public static function create_roles(){
		global $wp_roles;

		if (!class_exists('WP_Roles')){
			return;
		}

		if (!isset($wp_roles)){
			$wp_roles = new WP_Roles();
		}
		_x( 'Empresa', 'User role', 'industria' );

		add_role(
			'empresa',
			'Empresa',
			array(
				'read' => true,
		    'edit_posts' => true,
    		'delete_posts' => true,
			)
		);

		add_role(
			'pending',
			'Pendiente de revisión',
			array(
				'read' => true
			)
		);

		$empresa = get_role('empresa');
		$empresa->add_cap('delete_posts');
		$empresa->add_cap('edit_posts');

		add_role(
			'deny',
			'Denegada',
			array(
				'read' => true
			)
		);

	}


	public static function remove_roles(){
		global $wp_roles;

		if (!class_exists('WP_Roles')){
			return;
		}

		if(!isset($wp_roles)){
			$wp_roles = new WP_Roles();
		}

		remove_role('empresa');

	}
}
Art_Install::init();