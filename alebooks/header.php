<?php if (!defined('ABSPATH')) {
	die('Direct access not permited.');
}

?>
<!DOCTYPE html>
<html <?php language_attributes() ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon" href="/favicon.ico?v1">
	<?php wp_head() ?>
</head>

<body <?php body_class(); ?>>
	<div class="wrapper">
		<header class="header" data-module-header>
			<div class="container max-width-xl">
				<div class="grid gap-md content-center items-center">
					<?php
					$page_classes = get_body_class();
					if (in_array('home', $page_classes)) {
					?>
						<div class="col-8 col-3@lg header__logo">
								<a href="<?php echo home_url('/') ?>"><img src="<?php echo ART_THEME_CSS ?>/assets/images/logo-header.svg" alt="Logo alebooks"></a>
							</div>
					<?php } else { ?>
						<div class="col-8 col-3@lg header__logo">
							<a href="<?php echo home_url('/') ?>" class="logo-link">
								<img src="<?php echo ART_THEME_CSS ?>/assets/images/logo-header.svg" alt="Logo alebooks" class="normal-logo">
								<img src="<?php echo ART_THEME_CSS ?>/assets/images/logo-header.svg" alt="Logo alebooks" class="white-logo">
							</a>
						</div>
					<?php } ?>

					<div class="col-6 col-9@lg hide@xs flex@lg justify-end@lg">
						<?php
						wp_nav_menu(
							array(
								'menu_id' => 'nav-menu',
								'theme_location' => 'primary',
								'container'      => false,
								'depth'          => 2,
								'fallback_cb'    => false,
								'items_wrap' => '<ul id="%1$s" class="am-click-menu %2$s" role="menu" >%3$s</ul>',
								'menu_class' => 'menu',
								'walker'         => new A11Y_Aria_Walker_Nav_Menu(),
							)
						);
						?>
					</div>
					<div class="col-4 flex@xs hide@lg justify-end@xs padding-right-xs@xs">
						<button class="hamburger hamburger--spin js-hamburger" type="button" aria-label="Menu" aria-controls="navigation" data-module-menu>
							<span class="hamburger-box">
								<span class="hamburger-inner"></span>
							</span>
						</button>
					</div>
				</div>
			</div>
		</header>

		<nav id="navigation" class="navigation nav-mobile" data-state="close">
			<div class="nav-menu container menu-wrapper">
				<div class="nav-mobile__content">
					<div class="menu_body">
						<?php
						wp_nav_menu(
							array(
								'menu_id' => 'nav-menu-mobile',
								'theme_location' => 'primary',
								'container'      => false,
								'depth'          => 2,
								'fallback_cb'    => false,
								'items_wrap' => '<ul id="%1$s" class="%2$s" role="menu" >%3$s</ul>',
								'menu_class' => 'menu-mobile',
								'walker'         => new A11Y_Aria_Walker_Nav_Menu(),
							)
						);
						?>
					</div>
				</div>
			</div>
		</nav>

		<main id="main-content">