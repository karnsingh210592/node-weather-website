module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            js: {
                src: ['public/angular-app/app.js', 'public/angular-app/controllers/*.js', 'public/angular-app/directives/*.js'],
                dest: 'public/angular-app/build/script/angular-script.js'
            }
        },
        uglify: {
            build: {
                files : [{
                    src: 'public/angular-app/build/script/angular-script.js',
                    dest: 'public/angular-app/build/script/angular-min-script.js'
                }]
            }
        },
        cssmin: {
            target: {
                files : [{
                    src: 'public/css/styles.css',
                    dest: 'public/angular-app/build/css/min-styles.css'
                }]
            }
        }
    });

    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    
    grunt.registerTask('concat-js', ['concat:js']);
    grunt.registerTask('uglify-js', ['uglify:build']);
    grunt.registerTask('minify-css', ['cssmin:target']);

    grunt.registerTask('default', ['concat:js', 'uglify:build', 'cssmin:target']);
};