/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        jshintrc: true
      },
      files: 'Gruntfile.js'
    },
    phantomas: {
      dev: {
        options : {
          assertions : {
            notFound: 0,
            cssCount: 2,
            jsCount: 2,
            imageCount: 10,
            webfontCount: 2,
            cachingNotSpecified: 0,
            nodesWithInlineCSS: 0,
            imagesScaledDown: 0,
            DOMidDuplicated: 0,
            hiddenContentSize: 1024,
            jQueryVersionsLoaded: 1,
            redirects: 0,
            assetsNotGzipped: 0
          },
          // indexPath  : './phantomas/',
          url        : 'http://example.com/'
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-phantomas');

  // Default task.
  grunt.registerTask('default', ['jshint']);

};
