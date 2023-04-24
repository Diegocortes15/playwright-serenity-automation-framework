pipeline {
    agent any

    tools {
        nodejs 'NodeJS 17.5.0'
    }
    stages {
        stage('install dependencies') {
            steps {
                bat 'npm ci'
            }
        }
        stage('install rimraf') {
            steps {
                bat 'npm install rimraf'
            }
        }
        stage('run tests') {
            steps {
                bat 'npm run test:execute'
            }
        }
    }
}
