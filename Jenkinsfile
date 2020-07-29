pipeline {
    agent none
    stages {
        // build and test on a node with a GPU label
        stage('Build') {
            agent { label 'GPU' }
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            agent { label 'GPU' }

            environment {
                // Setting CI to true runs test without user input
                CI = 'true'
            }
            steps {
                // execute this shell command to test the project
                sh 'npm test'
            }
        }
        stage('Docker') {
            when { expression { env.GIT_BRANCH == 'master' } }
            agent { label 'master' }
            steps {
                // Build the docker image 
                sh 'docker-compose build --no-cache --force-rm'

                // Run the image
                sh 'docker-compose up -d'
            }
        }
    }
}
