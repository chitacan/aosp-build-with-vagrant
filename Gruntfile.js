module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    connect: {
      server: {
        options: {
          base: './',
          keepalive: true
        }
      }
    }
  });

  grunt.registerTask('default', [
    'server'
  ]);

  grunt.registerTask('server', [
    'connect:server'
  ]);
}
