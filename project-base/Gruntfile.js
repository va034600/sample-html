module.exports = function(grunt) {
    grunt.initConfig({
         connect: {
            server: {
                options:{
                    port:8000,
                    base:'public',
                    hostname:'localhost'
                 }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: [
                    'public/private/src/main/scss/**/*.scss',
                ],
                tasks: 'compassmin'
            },
            js: {
                files: [
                    'public/js/*.js',
                    'public/private/src/main/js/**/*.js'
                ],
                tasks: []
            },
            html: {
                files: [
                    'public/private/src/main/html/**/*.html',
                    'public/index.html'
                ],
                tasks: []
            }
        },
        bower: {
            install: {
                options: {
                    targetDir: 'public/private/src/lib/js',
                    layout: 'byType',
                    verbose: false, // ログの詳細を出すかどうか
                    cleanTargetDir: false, // targetDirを削除するかどうか
                    cleanBowerDir: false // bowerのcomponentsディレクトリを削除するかどうか
                }
            }
        },
        requirejs: {
            compile_main: {
                options: {
                    name: 'main',
                    mainConfigFile: 'public/private/src/main/js/require_config.js',
                    //
                    //beautify: true,
                    // 最適化なし
                    optimize: "none",
                    // 最適化
                    // optimize: "uglify2",
                    // preserveLicenseComments: false,
                    // generateSourceMaps: true,
                    out: "public/js/main.min.js"
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
                    'public/css/style.min.css': ['public/css/style.css']
                }
            }
        },
        jshint: {
            files: [
                // 'Gruntfile.js',
                // 'package.json',
                // '.jshintrc',
                'public/private/src/main/js/**/*.js',
                '!public/private/src/main/js/require_config.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        }
    });

    var pkg = grunt.file.readJSON('package.json');

    var devDependencies;
    for (devDependencie in pkg.devDependencies) {
        if (devDependencie.substring(0, 6) == 'grunt-') {
            grunt.loadNpmTasks(devDependencie);
        }
    }

    grunt.registerTask('compassmin', ['compass', 'cssmin']);
    grunt.registerTask('upwatch', ['connect', 'watch']);
    grunt.registerTask('default', ['upwatch']);
};