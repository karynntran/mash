module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			example: {
				port: 1337,
				base: '../mash'
			}
		},
		serve: {
	        options: {
	            port: 9000,
	            path: '../index.html'
	        }
	    },
	    sass: {
	        dist: {
	            options: {
	                style: 'compressed'
	            },
	            files: {
	                'css/style.css': 'scss/style.scss'
	            }
	        } 
	    },
	    watch: {
	        css: {
	            files: ['scss/*.scss'],
	            tasks: ['sass'],
	            options: {
	                spawn: false,
	                livereload: true
	            }
	        } 
	    },
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-connect');
	grunt.loadNpmTasks('grunt-serve');
	grunt.registerTask('default', ['watch','connect:example']);

};