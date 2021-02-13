"use strict";

module.exports = function (grunt) {
	//	grunt.loadNpmTasks("grunt-contrib-less");
	//	grunt.loadNpmTasks("grunt-browser-sync");
	//	grunt.loadNpmTasks("grunt-contrib-watch");
	//	grunt.loadNpmTasks("grunt-postcss");

	require("load-grunt-tasks")(grunt);

	grunt.initConfig({
		less: {
			style: {
				files: {
					"css/style.css": "less/style.less"
				}
			}
		},
		postcss: {
			style: {
				options: {
					processors: [
						require('autoprefixer')()
					]
				},
				src: "css/*.css"
			}
		},
		csso: {
			style: {
				options: {
					report: "gzip"
				},
				files: {
					"css/style.min.css": ["css/style.css"],
					"css/normalize.min.css": ["css/normalize.css"]
				}
			}
		},
		imagemin: {
			images: {
				options: {
					optimizationLevel: 3,
					svgoPlugins: [{
						removeViewBox: false
					}],
					progressive: true
				},
				files: [{
					expand: true,
					src: ["img/**/*.{png,jpg,svg}"]
				}]
			}
		},
		cwebp: {
			images: {
				options: {
					q: 90
				},
				files: [{
					expand: true,
					src: ["img/**/*.{png,jpg}"]
				}]
			}
		},
		watch: {
			style: {
				files: ["less/**/*.less"],
				tasks: ["less"]
			}
		},
		browserSync: {
			server: {
				bsFiles: {
					src: ["*.html", "css/*.css"]
				},
				options: {
					server: ".",
					watchTask: true,
					notify: false,
					open: true,
					cors: true,
					ui: false
				}
			}
		},
	});

	grunt.registerTask("serve", ["browserSync", "watch"]);
};
