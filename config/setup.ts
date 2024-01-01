import path from "path";

export enum NodeEnvironment {
	development = "development",
	production = "production",
}

export const appPaths = {
	src: path.resolve(process.cwd(), "src"),
	entry: path.resolve(process.cwd(), "src/bootstrap.tsx"),
	dist: path.resolve(process.cwd(), "dist"),
	template: path.resolve(process.cwd(), "public/index.html"),
};

export const pluginOptions = {
	htmlWebpackPluginOptions: {
		minify: {
			removeComments: true,
			collapseWhitespace: true,
			removeRedundantAttributes: true,
			useShortDoctype: true,
			removeEmptyAttributes: true,
			removeStyleLinkTypeAttributes: true,
			keepClosingSlash: true,
			minifyJS: true,
			minifyCSS: true,
			minifyURLs: true,
		},
	},
};
