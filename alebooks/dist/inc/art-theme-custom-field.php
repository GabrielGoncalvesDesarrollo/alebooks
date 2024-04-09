<?php 
if (!defined('ABSPATH')) {
    die('Direct access not permitted.');
}

/** Custom Field Producto **/

add_action( 'woocommerce_product_options_general_product_data', 'woocommerce_product_author_bio' );

function woocommerce_product_author_bio() {
    global $woocommerce, $post;
    
    echo '<div class="options_group">';
    
    // Campo para la biografía del autor
    echo '<p class="form-field _author_bio_field"><label for="_author_bio">Biografía del Autor:</label>';
    
    // Campo de texto enriquecido (con editor)
    echo '<div class="general-editor">';
    wp_editor( 
        get_post_meta( $post->ID, '_author_bio', true ), 
        '_author_bio', 
        array(
            'textarea_name' => '_author_bio',
            'textarea_rows' => 5,
            'wpautop'       => true
        )
    );
    echo '</div>'; // Cierre del div para el editor
    
    echo '</p>'; // Cierre del div para el campo

    // Campo para otro dato personalizado
    echo '<p class="form-field _author_editoral_field"><label for="_author_editoral">Editorial:</label>';
    
    // Campo de texto enriquecido (con editor)
    echo '<div class="general-editor">';
    wp_editor( 
        get_post_meta( $post->ID, '_author_editoral', true ), 
        '_author_editoral', 
        array(
            'textarea_name' => '_author_editoral',
            'textarea_rows' => 5,
            'wpautop'       => true
        )
    );
    echo '</div>'; // Cierre del div para el editor
    
    echo '</p>'; // Cierre del div para el campo
    

    // Campo para otro dato personalizado
    echo '<p class="form-field _author_subtitle_field"><label for="_author_subtitle">Subtitulo:</label>';
    
    // Campo de texto enriquecido (con editor)
    echo '<div class="general-editor">';
    wp_editor( 
        get_post_meta( $post->ID, '_author_subtitle', true ), 
        '_author_subtitle', 
        array(
            'textarea_name' => '_author_subtitle',
            'textarea_rows' => 5,
            'wpautop'       => true
        )
    );
    echo '</div>'; // Cierre del div para el editor
    
    echo '</p>'; // Cierre del div para el campo
    

    // Campo para otro dato personalizado
    echo '<p class="form-field _author_person_field"><label for="_author_person">Autor:</label>';
    
    // Campo de texto enriquecido (con editor)
    echo '<div class="general-editor">';
    wp_editor( 
        get_post_meta( $post->ID, '_author_person', true ), 
        '_author_person', 
        array(
            'textarea_name' => '_author_person',
            'textarea_rows' => 5,
            'wpautop'       => true
        )
    );
    echo '</div>'; // Cierre del div para el editor
    
    echo '</p>'; // Cierre del div para el campo
    
    // Campo para otro dato personalizado
    echo '<p class="form-field _author_format_field"><label for="_author_format">Formato del producto:</label>';
    
    // Campo de texto enriquecido (con editor)
    echo '<div class="general-editor">';
    wp_editor( 
        get_post_meta( $post->ID, '_author_format', true ), 
        '_author_format', 
        array(
            'textarea_name' => '_author_format',
            'textarea_rows' => 5,
            'wpautop'       => true
        )
    );
    echo '</div>'; // Cierre del div para el editor
    
    echo '</p>'; // Cierre del div para el campo

    // Campo para otro dato personalizado
    echo '<p class="form-field _author_chars_field"><label for="_author_chars">Características:</label>';
    
    // Campo de texto enriquecido (con editor)
    echo '<div class="general-editor">';
    wp_editor( 
        get_post_meta( $post->ID, '_author_chars', true ), 
        '_author_chars', 
        array(
            'textarea_name' => '_author_chars',
            'textarea_rows' => 5,
            'wpautop'       => true
        )
    );
    echo '</div>'; // Cierre del div para el editor
    
    echo '</p>'; // Cierre del div para el campo

    // Campo para otro dato personalizado
    echo '<p class="form-field _author_collection_field"><label for="_author_collection">Colección:</label>';
    
    // Campo de texto enriquecido (con editor)
    echo '<div class="general-editor">';
    wp_editor( 
        get_post_meta( $post->ID, '_author_collection', true ), 
        '_author_collection', 
        array(
            'textarea_name' => '_author_collection',
            'textarea_rows' => 5,
            'wpautop'       => true
        )
    );
    echo '</div>'; // Cierre del div para el editor
    
    echo '</p>'; // Cierre del div para el campo

    // Campo para otro dato personalizado
    echo '<p class="form-field _author_language_field"><label for="_author_language">Idioma de publicación:</label>';
    
    // Campo de texto enriquecido (con editor)
    echo '<div class="general-editor">';
    wp_editor( 
        get_post_meta( $post->ID, '_author_language', true ), 
        '_author_language', 
        array(
            'textarea_name' => '_author_language',
            'textarea_rows' => 5,
            'wpautop'       => true
        )
    );
    echo '</div>'; // Cierre del div para el editor
    
    echo '</p>'; // Cierre del div para el campo

    // Campo para otro dato personalizado
    echo '<p class="form-field _author_date_field"><label for="_author_date">Fecha de edición:</label>';
    
    // Campo de texto enriquecido (con editor)
    echo '<div class="general-editor">';
    wp_editor( 
        get_post_meta( $post->ID, '_author_date', true ), 
        '_author_date', 
        array(
            'textarea_name' => '_author_date',
            'textarea_rows' => 5,
            'wpautop'       => true
        )
    );
    echo '</div>'; // Cierre del div para el editor
    
    echo '</p>'; // Cierre del div para el campo

    // Campo para otro dato personalizado
    echo '<p class="form-field _author_ibic_field"><label for="_author_ibic">Materia destacada IBIC:</label>';
    
    // Campo de texto enriquecido (con editor)
    echo '<div class="general-editor">';
    wp_editor( 
        get_post_meta( $post->ID, '_author_ibic', true ), 
        '_author_ibic', 
        array(
            'textarea_name' => '_author_ibic',
            'textarea_rows' => 5,
            'wpautop'       => true
        )
    );
    echo '</div>'; // Cierre del div para el editor
    
    echo '</p>'; // Cierre del div para el campo

    echo '</div>';
    
}

add_action( 'woocommerce_process_product_meta', 'woocommerce_product_author_bio_save' );

function woocommerce_product_author_bio_save( $post_id ){
    if( isset( $_POST['_author_bio'] ) ) {
        update_post_meta( $post_id, '_author_bio', $_POST['_author_bio'] );
    }
    if( isset( $_POST['_author_editoral'] ) ) {
        update_post_meta( $post_id, '_author_editoral', $_POST['_author_editoral'] );
    }
    if( isset( $_POST['_author_subtitle'] ) ) {
        update_post_meta( $post_id, '_author_subtitle', $_POST['_author_subtitle'] );
    }
    if( isset( $_POST['_author_person'] ) ) {
        update_post_meta( $post_id, '_author_person', $_POST['_author_person'] ); 
    }
    if( isset( $_POST['_author_format'] ) ) {
        update_post_meta( $post_id, '_author_format', $_POST['_author_format'] ); 
    }
    if( isset( $_POST['_author_chars'] ) ) {
        update_post_meta( $post_id, '_author_chars', $_POST['_author_chars'] ); 
    }
    if( isset( $_POST['_author_collection'] ) ) {
        update_post_meta( $post_id, '_author_collection', $_POST['_author_collection'] ); 
    }
    if( isset( $_POST['_author_language'] ) ) {
        update_post_meta( $post_id, '_author_language', $_POST['_author_language'] ); 
    }
    if( isset( $_POST['_author_date'] ) ) {
        update_post_meta( $post_id, '_author_date', $_POST['_author_date'] ); 
    }
    if( isset( $_POST['_author_ibic'] ) ) {
        update_post_meta( $post_id, '_author_ibic', $_POST['_author_ibic'] ); 
    }
}
?>
