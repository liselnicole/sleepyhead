module.exports = function(grunt) {
	grunt.initConfig ({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			development: {
				options: {
					compress: true
				},
				files: {
					"css/styles.css" : "assets/stylesheets/styles.less"
				}
			}			
		},
		concat: {
			 js: {
			 	src:[
			 		'bower_components/jquery/dist/jquery.js',
			 		'bower_components/bootstrap/dist/js/bootstrap.js',
			 		'assets/javascript/IE10_viewport_hack.js',
			 		'assets/javascript/custom.js'
			 		],
			 	dest: 'js/main.js'
			 }
		},
		uglify: {
			my_target: {
				files: {
					'js/modernizr.min.js' : ['bower_components/modernizr/modernizr.js'],
					'js/main.min.js' : ['js/main.js']
				}
			}
		},
		watch: {
			options: {
		      livereload: 33333
		    },
			js: {
				files: ['assets/javascript/*.js'],
				// tasks: ['concat', 'uglify']
				tasks: ['concat']
			},
			css: {
				files: ['assets/stylesheets/*.less'],
				// tasks: ['less', 'uglify']
				tasks: ['less']
			},
			html: {
				files: ['index.html']
			}
		},
		bowercopy: {
	        bower: {
	        	files: {
                	'css/animate.min.css': 'bower_components/animate.css/animate.min.css'
	        	}
            }
        }
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-bowercopy');

	//tasks
	grunt.registerTask('production', ['concat', 'less', 'bowercopy', 'uglify']); 
	grunt.registerTask('default', ['concat', 'less', 'watch']); 
}