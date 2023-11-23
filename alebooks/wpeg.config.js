const pkg = require('json-file').read('./package.json').data;
const cfg = {};

// Build Paths.
cfg.name = 'psicodepor';
cfg.src = './src';
cfg.dist_root = './dist';
cfg.dist = '{dist_root}/{name}';

// Template variables that will be automatically replaced.
cfg.template_files_src = '{dist}/**/*.{md,php,js,css,pot,json}';
cfg.template_files_variables = {
	text_domain: pkg.name,
	plugin_version: pkg.version,
	plugin_name: pkg.name,
	plugin_title: pkg.title,
	plugin_author: pkg.author,
};

console.log(cfg.dist);