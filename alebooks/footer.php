<?php if (!defined('ABSPATH')) {
	die('Direct access not permited.');
}

$instagram = get_field('_o_instagram', 'option');
$facebook = get_field('_o_facebook', 'option');

?>
</main>

<footer class="footer">
	<div class="container max-width-xl pt-md pb-md">
		<div class="grid gap-md">
			<div class="col-12 col-12@sm col-3@md col-3@lg">
				<a href="<?php echo home_url('/') ?>"><img src="<?php echo ART_THEME_CSS ?>/assets/images/logo_footer.svg" alt="<?php echo __('alebooks', 'alebooks') ?>"></a>
			</div>

			<div class="col-12 col-6@sm col-3@md col-3@lg">
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
				<div class="col-12 col-12@sm col-12@md col-12@lg">
					<p>Método de pago</p>
					<p>TRANSFERENCIA BANCARIA</p>
					<div class="col-6 col-6@sm col-6@md col-6@lg logos">
						<img src="<?php echo ART_THEME_CSS ?>/assets/images/Visa_Logo.svg" alt="<?php echo __('Visa Logo alebooks', 'Visa Logo alebooks') ?>">
					</div>
					<div class="col-6 col-6@sm col-6@md col-6@lg logos">
						<img src="<?php echo ART_THEME_CSS ?>/assets/images/mastercard_logo.svg" alt="<?php echo __('Mastercard alebooks', 'Mastercard alebooks') ?>">
					</div>
				</div>
			</div>
			<div class="col-12 col-6@sm col-3@md col-3@lg">
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
			<div class="col-12 col-12@sm col-3@md col-3@lg footer__rrss">
				<ul class="menu-rrss">
					<?php if (!empty($facebook)) : ?>
						<li><a href="<?php echo $facebook ?>" title="<?php echo __('Facebook', 'alebooks') ?>" target="_blank"><img src="<?php echo ART_THEME_CSS ?>/assets/images/facebook_logo.svg" alt="Facebook"></a></li>
					<?php endif; ?>
					<?php if (!empty($instagram)) : ?>
						<li><a href="<?php echo $instagram ?>" title="<?php echo __('Instagram', 'alebooks') ?>" target="_blank"><img src="<?php echo ART_THEME_CSS ?>/assets/images/instagram_logo.svg" alt="Instagram"></a></li>
					<?php endif; ?>
				</ul>
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
				<li><img src="<?php echo ART_THEME_CSS ?>/assets/images/gob_es.svg" alt="Gobierno de españa"></li>
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