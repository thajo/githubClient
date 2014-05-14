module.exports = function(grunt) {

  // Project configuration.
grunt.initConfig({
  
  express: {
    options: {
      port: 8000,
      hostname: 'localhost'
    },
    livereload: {
      options: {
        livereload: true,
        bases: [__dirname + "/src/"]
      }
    }
  },
  jshint: {
    foo: {
      src: ['src/**/*.js', '!src/app/lib/*.js']
     
    },
  },
  concat: {
    bar: {
      src: ['src/**/*.js'],
      dest: 'dest/bin.js'
    }
  },
  karma: {
    unit: {
      configFile: 'test/karma.config.js',
       singleRun: false,
       autoWatch: true
    }
  },
  open : {
    dev : {
      path: 'http://127.0.0.1:8000',
      app: 'Google Chrome'
    }
  }
 

});


// Creates the `server` task
  grunt.registerTask('server',[
    'express',
    'open',
    'jshint',
    'karma',
    'express-keepalive'
  ]);

  

  // Load the plugin that provides the "uglify" task.
  /*grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-connect');*/
  // Load Grunt tasks declared in the package.json file
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'concat']);

};
