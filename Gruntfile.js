/*
 * requirejs-templates
 * https://github.com/sergiovilar/grunt-requirejs-templates
 *
 * Copyright (c) 2013 Sérgio Vilar
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    requirejs_templates: {
      
      default: {
        options:{
          appDir: 'test/fixtures',
          scripts: 'scripts/default',
          templates: 'templates',
          output: 'tmp'
        }
      },

      more_templates:{
        options: {
          appDir: 'test/fixtures',
          scripts: 'scripts/more_templates',
          templates: 'templates',
          output: 'tmp'
        }
      },

    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'requirejs_templates', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
