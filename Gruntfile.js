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
    concat: {
       dist: {
         src: [
           'public/stylesheets/*.scss',
         ],
         dest: 'public/stylesheets/build.scss',
       }
    },
    sass: {                                 // Task
       dist: {     
         files: {
           'public/stylesheets/build.css':'public/stylesheets/build.scss'
         }

       }
    }
  });

  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['concat', 'sass', 'react']);
};