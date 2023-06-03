const sass = require('sass'),
	fs = require('fs');

const sources = fs.readdirSync('sass');

sources.forEach((file) => {
	const [name] = file.split('.');

	if (!name.startsWith('_')) {
		const result = sass.compile(`sass/${name}.scss`, { loadPaths: ['node_modules'] });

		fs.writeFileSync(`public/${name}.css`, result.css);

		const minResult = sass.compile(`sass/${name}.scss`, { loadPaths: ['node_modules'], style: 'compressed' });

		fs.writeFileSync(`public/${name}.min.css`, minResult.css);
	}
});

