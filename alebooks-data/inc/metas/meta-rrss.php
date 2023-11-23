<?php if ( !defined('ABSPATH') ){ die('Direct access not permited.'); }

use StoutLogic\AcfBuilder\FieldsBuilder;

$data_rrss = new FieldsBuilder('_meta_rrss', ['style' => 'default', 'title' => '1. - Datos redes sociales', 'order' => '0']);

$data_rrss
	->addUrl('_o_instagram', [
		'label' => 'Instagram',
		'instructions' => 'Introduzca la url de su cuenta de Instagram',
		'required' => 0,
		'conditional_logic' => [],
		'wrapper' => [
			'width' => '',
			'class' => '',
			'id' => '',
		],
		'default_value' => '',
		'placeholder' => '',
	])
	->addUrl('_o_facebook', [
		'label' => 'Facebook',
		'instructions' => 'Introduzca la url de su cuenta de Facebook',
		'required' => 0,
		'conditional_logic' => [],
		'wrapper' => [
			'width' => '',
			'class' => '',
			'id' => '',
		],
		'default_value' => '',
		'placeholder' => '',
	])

	->setLocation('options_page', '==','rrss-options');

add_action('acf/init', function () use ($data_rrss) {
		/* print_r($data_rrss->build()); */
		acf_add_local_field_group($data_rrss->build());
});
