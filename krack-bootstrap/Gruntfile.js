/* jshint node: true */

module.exports = function(grunt) {
	"use strict";

	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);
	var fs = require('fs'), pkginfo = grunt.file.readJSON("package.json");

	// Project configuration.
	grunt.initConfig({

		pkg: pkginfo,
		banner: '/*!\n' +
			'* bi-Framework v<%= pkg.version %> - Direitos Reservados <%= grunt.template.today("dd") %> <%= grunt.template.today("mm") %> <%= grunt.template.today("yyyy") %>. \n' +
			'* Uso Restrito a SSM - Sala de Situação Municipal.\n' +
			'*/\n',
		jqueryCheck: 'if (!jQuery) { throw new Error(\"jQuery Ausente\") }\n\n',

		clean: {
            dist: ['dist']
        },
		
		jshint: {
			options: {
				jshintrc: 'js/.jshintrc'
			},
			gruntfile: {
				src: 'Gruntfile.js'
			},
			src: {
				src: ['js/*.js']
			},
			test: {
				src: ['js/tests/unit/*.js']
			}
		},

		concat: {
			options: {
				banner: '<%= banner %><%= jqueryCheck %>',
				stripBanners: false
			},
			base: {
				src: [
					'js/bootstrap-affix.js',
					'js/bootstrap-alert.js',
					'js/bootstrap-button.js',
					'js/bootstrap-carousel.js',
					'js/bootstrap-collapse.js',
					'js/bootstrap-dropdown.js',
					'js/bootstrap-modal.js',
					'js/bootstrap-poppver.js',
					'js/bootstrap-scrollpsy.js',
					'js/bootstrap-tab.js',
					'js/bootstrap-tooltip.js',
					'js/bootstrap-transition.js',
					'js/bootstrap-typehead.js'

				],
				dest: 'dist/js/<%= pkg.name %>.js'
			}
		},

		uglify: {
			options: {
				banner: '<%= banner %>',
				report: 'min'
			},
			base: {
				src: ['<%= concat.base.dest %>'],
				dest: 'dist/js/<%= pkg.name %>.min.js'
			}
		},

		recess: {
			options: {
				compile: true,
				banner: '<%= banner %>'
			},
			style: {
				options: {
					compress: false
				},
				src: ['less/bootstrap.less'],
				dest: 'dist/css/<%= pkg.name %>.css'
			},
			stylemin: {
				options: {
					compress: true
				},
				src: ['less/bootstrap.less'],
				dest: 'dist/css/<%= pkg.name %>.min.css'
			},
			responsive: {
				options: {
					compress: false
				},
				src: ['less/responsive.less'],
				dest: 'dist/css/<%= pkg.name %>-responsive.css'
			},
			responsivemin: {
				options: {
					compress: true
				},
				src: ['less/responsive.less'],
				dest: 'dist/css/<%= pkg.name %>-responsive.min.css'
			}
		},
		copy: {
			fonts: {
				cwd: 'fonts',
				src: '**/*',
				dest: 'dist/fonts',
				expand: true
			},
			docslib: {
				cwd: 'dist',
				src: 'css/**/*',
				dest: 'docs/assets/',
				expand: true
			}
		},
		connect: {
			server: {
				options: {
					port: 3001,
					keepalive: true,
					base: './docs'
				}
			}
		},
		watch: {
			src: {
				files: '<%= jshint.src.src %>',
				tasks: ['jshint:src']
			},
			test: {
				files: '<%= jshint.test.src %>',
				tasks: ['jshint:test']
			},
			recess: {
				files: 'less/*.less',
				tasks: ['recess', 'copy:docslib']
			}
		},
		compress: {
            dist: {
                options: {
                    archive: ("dist/krack-bootstrap-"+pkginfo.version+".zip")
                },
                files: [
                    //{ expand: true, cwd: "dist/", src: ["css/**/*", "js/**/*", "fonts/*", "styleguide/*"], dest: "" }
                    { expand: true, cwd: "dist/", src: [
                        "css/bootstrap.min.css",
                        "css/bootstrap-responsive.min.css",
                        "js/bootstrap.min.js",
                        "fonts/*"
                    ], dest: "" }

                ]
            }
        }

	});

	// These plugins provide necessary tasks.
	grunt.loadTasks('tasks');

	// Register grunt tasks
	grunt.registerTask("default", [
		"clean",
		"jshint",
		"concat",
		"uglify",
		"recess",
		"copy",
		"compress"
	]);

	grunt.registerTask("dev", [
		"watch"
	]);

	grunt.registerTask("connect", [
		"connect"
	]);
	
	grunt.registerTask("zip", [
		"compress"
	]);

};
