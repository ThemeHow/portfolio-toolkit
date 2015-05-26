// Add empty lines after closing curly braces and docBlocks.
module.exports = {
	admin: {
		src: [
			'trunk/admin/css/<%= package.name %>-admin.css'
		],
		overwrite: true,
		replacements: [
			{
				from: /\}\n(?!\n)(?!\})|\}(?=.)/g,
				to: function() {
					return '}\n\n';
				}
			}, {
				from: /\*\/\n(?!\n)|\*\/(?=.)/g,
				to: function() {
					return '*/\n\n';
				}
			}
		]
	},
	public: {
		src: [
			'trunk/public/css/<%= package.name %>-public.css'
		],
		overwrite: true,
		replacements: [
			{
				from: /\}\n(?!\n)(?!\})|\}(?=.)/g,
				to: function() {
					return '}\n\n';
				}
			}, {
				from: /\*\/\n(?!\n)|\*\/(?=.)/g,
				to: function() {
					return '*/\n\n';
				}
			}
		]
	},
	readme: {
		src: [
			'trunk/README.txt',
		],
		overwrite: true,
		replacements: [ {
			from: /Stable tag:.*$/m,
			to: 'Stable tag: <%= package.version %>'
		} ]
	},
	main: {
		src: [
			'trunk/<%= package.name %>.php',
		],
		overwrite: true,
		replacements: [ {
			from: /\s\*\sVersion:.*$/m,
			to: function( matchedWord ) {
				return matchedWord.replace( /\d+\.\d+\.\d+/g, '<%= package.version %>' );
			}
		} ]
	}
};
