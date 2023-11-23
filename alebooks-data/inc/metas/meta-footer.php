<?php if ( !defined('ABSPATH') ){ die('Direct access not permited.'); }

use StoutLogic\AcfBuilder\FieldsBuilder;

$o_footer = new FieldsBuilder('_o_contact_options', ['style' => 'default', 'title' => '1. - Datos de contacto', 'order' => '0']);
$o_footer
	->addWysiwyg('_o_contact_data', [
					'label' => 'Datos de contacto',
					'instructions' => 'Introduzca los datos de contato para mostrar en el footer',
					'required' => 0,
					'conditional_logic' => [],
					'wrapper' => [
							'width' => '',
							'class' => '',
							'id' => '',
					],
					'default_value' => '',
					'tabs' => 'all',
					'toolbar' => 'simple',
					'media_upload' => 0,
					'delay' => 0,
			])
			->addWysiwyg('_o_contact_horario', [
					'label' => 'Datos de Horario de atención al público',
					'instructions' => 'Introduzca los datos de Horario de atención al público para mostrar en el footer',
					'required' => 0,
					'conditional_logic' => [],
					'wrapper' => [
							'width' => '',
							'class' => '',
							'id' => '',
					],
					'default_value' => '',
					'tabs' => 'all',
					'toolbar' => 'simple',
					'media_upload' => 0,
					'delay' => 0,
			])
	->setLocation('options_page', '==', 'footer-options');

	add_action('acf/init', function () use ($o_footer) {
			/* print_r($o_footer->build()); */
			acf_add_local_field_group($o_footer->build());
	});  
                                                                  