module.exports = function (grunt) {
	"use strict";
	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 8000,
					base: ['src', 'src'],
					hostname: '0.0.0.0'
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			scss: {
				files: [
					'src/main/scss/**/*.scss'
				],
				tasks: 'compassmin'
			},
			js: {
				files: [
					'src/main/js/**/*.js'
				],
				tasks: []
			},
			ts:{
				files: [
					'src/main/ts/**/*.ts'
				],
				tasks: 'typescript'
			},
			html: {
				files: [
					'src/main/html/**/*.html'
				],
				tasks: []
			}
		},
		ts: {
			default : {
				src: ["src/main/ts/**/*.ts"],
				outDir: "src/main/js/ts"
				//out: "src/main/js/build/main.js"
			}
		},
		tsd: {
			refresh: {
				options: {
					// execute a command
					command: 'reinstall',
					//optional: always get from HEAD
					latest: true,
					// specify config file
					config: 'tsd.json',
					// experimental: options to pass to tsd.API
					opts: {
						// props from tsd.Options
					}
				}
			}
		},
		compass: {
			dev: {
				options: {
					config: './config.rb',
					noLineComments: true
				}
			}
		},
		cssmin: {
			compress: {
				files: {
					'../public/stylesheets/main.min.css': ['src/main/css/main.css']
				}
			}
		},
		bower: {
			install: {
				options: {
					targetDir: 'src/lib/bower',
					layout: 'byType',
					verbose: false, // ログの詳細を出すかどうか
					cleanTargetDir: true, // targetDirを削除するかどうか
					cleanBowerDir: false // bowerのcomponentsディレクトリを削除するかどうか
				}
			}
		},
		requirejs: {
			"compile_main": {
				options: {
					name: 'main',
					mainConfigFile: 'src/main/js/require_config.js',
					//
					//beautify: true,

					// 最適化なし
					//optimize: "none",

					// 最適化
					optimize: "uglify2",
					preserveLicenseComments: false,
					generateSourceMaps: false,

					//out
					out: "../public/javascripts/main.min.js"
				}
			}
		},
		jshint: {
			files: [
				// 'Gruntfile.js',
				// 'package.json',
				// '.jshintrc',
				'src/main/js/**/*.js'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		}
	});

	var pkg = grunt.file.readJSON('package.json');

	for (var devDependencie in pkg.devDependencies) {
		if (devDependencie.substring(0, 6) === 'grunt-') {
			grunt.loadNpmTasks(devDependencie);
		}
	}

	grunt.registerTask('compassmin', ['compass', 'cssmin']);
	grunt.registerTask('default', ['connect', 'watch']);
};
