const supportedBlocks = [
	'wp-artsolut-blocks/column',
];

export default function checkSupportedBlock(name) {
	return name && supportedBlocks.indexOf(name) !== -1;
}