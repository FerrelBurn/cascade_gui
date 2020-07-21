pipeline {
  // build on a node with a GPU label
  agent { label 'GPU' }

  stages {
      stage('Build') {
          steps {
              // checkout this project from version control
              checkout scm
              // execute this shell command to build the project
              sh 'npm install'
          }
      }
      stage('Test') {
          environment {
              // Setting CI to true runs test without user input
              CI = 'true'
          }
          steps {
              // execute this shell command to test the project
              sh 'npm test'
          }
      }
  }
}
