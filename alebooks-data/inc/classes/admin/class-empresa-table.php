<?php if ( !defined('ABSPATH') ){ die('Direct access not permited.'); }

if(!class_exists('WP_List_Table')){
	require_once( ABSPATH . 'wp-admin/includes/class-wp-list-table.php' );
}

class Art_Empresa_Table extends WP_List_Table {
	public function __construct(){
		parent::__construct(array(
			'plural' => 'Empresas',
			'singular' => 'Empresa',
			'ajax' => false
		));
	}
	

	public function prepare_items() {
		// check if a search was performed.
		$user_search_key = isset( $_REQUEST['s'] ) ? wp_unslash( trim( $_REQUEST['s'] ) ) : '';
		$this->_column_headers = $this->get_column_info();
		$this->handle_table_actions();

		$table_data = $this->fetch_table_data();

		if( $user_search_key ){
			$table_data = $this->filter_table_data( $table_data, $user_search_key );
		}

		$users_per_page = $this->get_items_per_page( 'users_per_page' );
		$table_page = $this->get_pagenum();		

		$this->items = array_slice( $table_data, ( ( $table_page - 1 ) * $users_per_page ), $users_per_page );

		// set the pagination arguments		
		$total_users = count( $table_data );
		$this->set_pagination_args( array (
					'total_items' => $total_users,
					'per_page'    => $users_per_page,
					'total_pages' => ceil( $total_users/$users_per_page )
				) );
	}
}

// Render your admin menu outside the class
function Art_Empresas_Admin_menu()
{
    add_menu_page( 'Listado de empresas', 'Empresas', 'manage_options', 'empreas_render_admin_page', 'empreas_render_admin_page');
}

// Create your menu outside the class
add_action('admin_menu','Art_Empresas_Admin_menu');

// Render your page outside the class
function empreas_render_admin_page(){
    global $wpdb;

    $Obj_Empresas=new Art_Empresa_Table();
}