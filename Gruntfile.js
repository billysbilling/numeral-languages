module.exports = function(grunt) {
    grunt.initConfig({
        'billy-builder': {
            title: 'numeral-languages',
            jshint: true
        }
    });

    grunt.loadNpmTasks('billy-builder');
};