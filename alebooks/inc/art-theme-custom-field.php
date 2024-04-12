<?php

if(!defined('ABSPATH')){
    die('Direct access not permitted.');
}

/** Custom Field Producto **/

add_action('woocommerce_product_options_general_product_data', 'woocommerce_product_author_bio');

function woocommerce_product_author_bio(){
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

    // Campo para otro dato personalizado
    // Campo de texto enriquecido (con editor)
    echo '<div class="general-editor">';
    woocommerce_wp_textarea_input( 
        array( 
            'id'          => '_author_person', 
            'label'       => 'Autor', 
            'placeholder' => 'Ingresa aquí el Autor.', 
            'description' => 'Puedes usar HTML en este campo.', 
            'desc_tip'    => true,
            'value'       => get_post_meta( $post->ID, '_author_person', true )
        )
    );
    echo '</div>'; // Cierre del div para el editor
    
    // Campo para otro dato personalizado
    // Campo de texto enriquecido (con editor)
    echo '<div class="general-editor">';
    woocommerce_wp_textarea_input( 
        array( 
            'id'          => '_author_format', 
            'label'       => 'Formato del producto', 
            'placeholder' => 'Ingresa aquí el Formato del producto.', 
            'description' => 'Puedes usar HTML en este campo.', 
            'desc_tip'    => true,
            'value'       => get_post_meta( $post->ID, '_author_format', true )
        )
    );
    echo '</div>'; // Cierre del div para el editor


    // Campo para otro dato personalizado
    // Campo de texto enriquecido (con editor)
    echo '<div class="general-editor">';
    woocommerce_wp_textarea_input( 
        array( 
            'id'          => '_author_editoral', 
            'label'       => 'Editorial', 
            'placeholder' => 'Ingresa aquí la Editorial.', 
            'description' => 'Puedes usar HTML en este campo.', 
            'desc_tip'    => true,
            'value'       => get_post_meta( $post->ID, '_author_editoral', true )
        )
    );
    echo '</div>'; // Cierre del div para el editor


    // Campo para otro dato personalizado
    // Campo de texto enriquecido (con editor)
    echo '<div class="general-editor">';
    woocommerce_wp_textarea_input( 
        array( 
            'id'          => '_author_collection', 
            'label'       => 'Colección', 
            'placeholder' => 'Ingresa aquí la Colección.', 
            'description' => 'Puedes usar HTML en este campo.', 
            'desc_tip'    => true,
            'value'       => get_post_meta( $post->ID, '_author_collection', true )
        )
    );
    echo '</div>'; // Cierre del div para el editor
    

    // Campo para otro dato personalizado
    // Campo de texto enriquecido (con editor)
    echo '<div class="general-editor">';
    woocommerce_wp_textarea_input( 
        array( 
            'id'          => '_author_language', 
            'label'       => 'Idioma de publicación', 
            'placeholder' => 'Ingresa aquí el Idioma de publicación.', 
            'description' => 'Puedes usar HTML en este campo.', 
            'desc_tip'    => true,
            'value'       => get_post_meta( $post->ID, '_author_language', true )
        )
    );
    echo '</div>'; // Cierre del div para el editor

    // Campo para otro dato personalizado
    // Campo de texto enriquecido (con editor)
    echo '<div class="general-editor">';
    woocommerce_wp_textarea_input( 
        array( 
            'id'          => '_author_date', 
            'label'       => 'Fecha de edición', 
            'placeholder' => 'Ingresa aquí la Fecha de edición.', 
            'description' => 'Puedes usar HTML en este campo.', 
            'desc_tip'    => true,
            'value'       => get_post_meta( $post->ID, '_author_date', true )
        )
    );

    echo '</div>'; // Cierre del div para el editor

    echo showInputAtributo($post, '_author_pages', 'Páginas');
    echo showInputAtributo($post, '_author_weight', 'Peso (gr)');
    echo showInputAtributo($post, '_author_length', 'Largo (cm)');
    echo showInputAtributo($post, '_author_width', 'Ancho (cm)');
    echo showInputAtributo($post, '_author_height', 'Alto (cm)');
    echo '</div>';
}

function showInputAtributo(WP_Post $post, string $id, string $label):string{
    $value = get_post_meta($post->ID, $id, true);

    return "<p class='form-field {$id}_field'>
    <label for='$id'>$label:</label>
    <input name='$id' value='$value'>
    </p>";
}


add_action('woocommerce_process_product_meta', 'woocommerce_product_author_bio_save');

function woocommerce_product_author_bio_save($post_id){
    if(isset($_POST['_author_bio'])){
        update_post_meta($post_id, '_author_bio', $_POST['_author_bio']);
    }
    if(isset($_POST['_author_editoral'])){
        update_post_meta($post_id, '_author_editoral', $_POST['_author_editoral']);
    }
    if(isset($_POST['_author_subtitle'])){
        update_post_meta($post_id, '_author_subtitle', $_POST['_author_subtitle']);
    }
    if(isset($_POST['_author_person'])){
        update_post_meta($post_id, '_author_person', $_POST['_author_person']);
    }
    if(isset($_POST['_author_format'])){
        update_post_meta($post_id, '_author_format', $_POST['_author_format']);
    }
    if(isset($_POST['_author_chars'])){
        update_post_meta($post_id, '_author_chars', $_POST['_author_chars']);
    }
    if(isset($_POST['_author_collection'])){
        update_post_meta($post_id, '_author_collection', $_POST['_author_collection']);
    }
    if(isset($_POST['_author_language'])){
        update_post_meta($post_id, '_author_language', $_POST['_author_language']);
    }
    if(isset($_POST['_author_date'])){
        update_post_meta($post_id, '_author_date', $_POST['_author_date']);
    }
    if(isset($_POST['_author_ibic'])){
        update_post_meta($post_id, '_author_ibic', $_POST['_author_ibic']);
    }
    foreach([
              '_author_pages', '_author_length', '_author_width',
              '_author_weight', '_author_height',
            ] as $item){
        update_post_meta($post_id, $item, $_POST[$item] ?? null);
    }
}

?>
