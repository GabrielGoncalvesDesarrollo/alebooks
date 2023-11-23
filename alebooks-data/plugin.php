<?php 

/**
 * Plugin Name: Application data
 * Description: Application data
 * Version: 1.0.0
 * Author: Artsolut
 * Author URI: https://artsolut.es
 */

 if ( !defined('ABSPATH') ){ die('Direct access not permited.'); }

 class IndustriaData{
	function __construct(){
 		register_activation_hook(__FILE__, [$this, 'artsolut_data_activation']);
 		register_deactivation_hook(__FILE__, 'artsolut_data_deactivation');
 	}
 
 	function artsolut_data_activation(){
 
 	}	

	function artsolut_data_deactivation(){
	}

	function initialize(){
		$this->constants(array(
			'ART_DATA_DATA' => true,
			'ART_DATA_FILE' => __FILE__,
			'ART_DATA_PATH' => plugin_dir_path( __FILE__ ),
			'ART_DATA_BASENAME' => plugin_basename( __FILE__ )
		));


		include_once ART_DATA_PATH . 'inc/classes/class-art-install.php';
		include_once ART_DATA_PATH . 'inc/acf-builder/autoload.php';
		include_once ART_DATA_PATH . 'inc/options/options.php';
		include_once ART_DATA_PATH . 'inc/metas/meta-footer.php';

	}

	function constants($array = array()){
		foreach($array as $name => $value){
			 if(defined($name)) continue;
			 define($name, $value);
	 }
 	}
 }

 function artdata(){
	global $artdata;
	if (!isset($artdata)){
		$artdata = new IndustriaData();
		$artdata->initialize();
	}
	return $artdata;
}

artdata();