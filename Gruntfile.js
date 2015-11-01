module.exports = function(grunt) {
  grunt.initConfig({
 
    react: {
      jsx: {
        files: [
          {
            expand: true,
            cwd: 'public/javascripts/src',
          	src: ['**/*.jsx'],
            dest: 'public/javascripts/build',
            ext: '.js'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-react');
  
  grunt.registerTask('default', ['react']);
};