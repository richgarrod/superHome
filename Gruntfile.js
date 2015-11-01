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
    },

    watch: {
      react: {
        files: 'public/javascripts/src/*.js',
        tasks: ['react']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-react');
  
  grunt.registerTask('default', ['react']);
};