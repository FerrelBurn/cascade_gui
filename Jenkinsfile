  
pipeline {
    // build on a node with a GPU label
    agent { label 'GPU' }

    stages {
        stage('Build') {
            steps {
                // checkout this project
                checkout scm

                // create virtualenv and install requirements
                sh '''
                    cd peruse
                    virtualenv -p python3 venv
                    . venv/bin/activate
                    pip install -r requirements.txt
                '''
            }
       
    }
}

