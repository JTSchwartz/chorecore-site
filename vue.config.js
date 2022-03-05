const Mode = require('frontmatter-markdown-loader/mode')

module.exports = {
	filenameHashing: false,
	chainWebpack: config => {
		config.optimization.minimize(false)
		config.module
			.rule('markdown')
			.test(/\.md$/)
			.use('frontmatter-markdown-loader')
			.loader('frontmatter-markdown-loader')
			.tap(() => {
				return {
					mode: [Mode.VUE_COMPONENT],
					vue: {
						root: 'markdown-body'
					}
				}
			})
	}
}
