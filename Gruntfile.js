module.exports = function(grunt) {

  grunt.initConfig({

    // get the package.json data (we will use this later)
    pkg: grunt.file.readJSON('package.json'),

    /**
     * Sass up the stylesheets
     */
    sass: {
      landing: {
        options: {
          style: 'compressed',
        },
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.scss'], // grab any .scss in /css/ and compile to /css/*.css
          dest: 'css/',
          ext: '.css'
        }]
      },
    },

  });

  // load in our grunt extensions
  grunt.loadNpmTasks('grunt-contrib-sass');

  // setup the default "grunt" task
  grunt.registerTask('default', [

    // COMPILE THE SASS
    'sass',

    // ADD MORE TASKS HERE!

  ]);

};
