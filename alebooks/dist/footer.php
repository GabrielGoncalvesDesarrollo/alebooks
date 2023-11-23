<?php if (!defined('ABSPATH')) {
	die('Direct access not permited.');
}

$contact  = get_field('_o_contact_data', 'option');
$horario  = get_field('_o_contact_horario', 'option');


?>
</main>

<footer class="footer">
	<div class="container max-width-xl pt-md pb-md">
		<div class="grid gap-md">
			<div class="col-12 col-12@md col-12@lg">
				<a href="<?php echo home_url('/') ?>"><img src="<?php echo ART_THEME_CSS ?>/assets/images/logo-footer.svg" alt="<?php echo __('honne', 'honne') ?>"></a>
			</div>

			<div class="grid gap-md flexed">
			<div class="col-12 col-6@sm col-6@md col-12@lg">
				<h2>Horario de atención al público</h2>
				<?php echo $horario ?>
			</div>
			<div class="col-12 col-6@sm col-6@md col-12@lg">
				<h2>Contacto</h2>
				<?php echo $contact ?>
			</div>
			</div>

			<div class="col-12 col-6@sm col-6@md col-2@lg">
				<h2>Notaría</h2>
				<div class="text__content">
					<?php
					wp_nav_menu(
						array(
							'menu_id' => 'footer',
							'theme_location' => 'footer',
							'container'      => false,
							'depth'          => 2,
							'fallback_cb'    => false,
							'items_wrap' => '<ul id="%1$s" class="%2$s" role="menu">%3$s</ul>',
							'menu_class' => 'footer__menu',
							'walker'         => new A11Y_Aria_Walker_Nav_Menu(),
						)
					);
					?>
				</div>
			</div>
			<div class="col-12 col-6@sm col-6@md col-3@lg">
				<h2>Legal</h2>
				<div class="text__content">
					<?php
					wp_nav_menu(
						array(
							'menu_id' => 'legal',
							'theme_location' => 'legal',
							'container'      => false,
							'depth'          => 2,
							'fallback_cb'    => false,
							'items_wrap' => '<ul id="%1$s" class="%2$s" role="menu">%3$s</ul>',
							'menu_class' => 'footer__menu',
							'walker'         => new A11Y_Aria_Walker_Nav_Menu(),
						)
					);
					?>
				</div>
			</div>
	</div>
	</div>
</footer>
</div> <!-- Wrapper -->


<div class="footer__kit">
	<div class="row">
		<div class="col-12 col-xl-12 footer__data">
			<div class="col-12 col-xl-12 margin-top-lg margin-bottom-lg flex justify-center">
				<img src="<?php echo ART_THEME_CSS ?>/assets/images/footer_text.svg" alt="Footer Text">
			</div>
			<ul>
				<li><img src="<?php echo ART_THEME_CSS ?>/assets/images/gob-esp.svg" alt="Gobierno de españa"></li>
				<li><img src="<?php echo ART_THEME_CSS ?>/assets/images/red-es.svg" alt="Red.es"></li>
				<li><img src="<?php echo ART_THEME_CSS ?>/assets/images/kit-digital.svg" alt="Kit digital"></li>
				<li><img src="<?php echo ART_THEME_CSS ?>/assets/images/R.svg" alt="R"></li>
				<li><img src="<?php echo ART_THEME_CSS ?>/assets/images/union-eu.svg" alt="Unión Europea"></li>
			</ul>
		</div>
	</div>
</div>


<?php wp_footer() ?>
</body>

</html>