<?php if (!defined('ABSPATH')) {
	die('Direct access not permited.');
} ?>

<div class="content margin-top-lg margin-bottom-lg">
	<div class="container">
		<div class="grid">
			<div class="col-12 col-6@md col-6@lg">
				<h1 class="has-size-banner"><?php echo get_the_title() ?></h1>
			</div>
			<div class="col-12 col-6@md col-6@lg flex justify-end align-center">
				<div class="back"><span class="arrow"></span></div>
			</div>
		</div>
	</div>
</div>

<?php echo the_content(); ?>