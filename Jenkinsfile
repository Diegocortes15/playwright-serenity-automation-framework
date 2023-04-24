/* groovylint-disable SpaceAfterClosingBrace */
pipeline {
    agent any

    tools {
        nodejs 'NodeJS 17.5.0'
    }
    stages {
        stage('Dependencies') {
            steps {
                bat 'npm ci'
                bat 'npm install rimraf'
            }
        }
        stage('e2e Tests') {
            steps {
                bat 'npm run test:execute'
            }
        }
        stage('Deploy Test Reports') {
            steps {
                publishHTML([
                  allowMissing: false,
                  alwaysLinkToLastBuild: true,
                  keepAll: false,
                  reportDir: 'target/site/serenity',
                  reportFiles: 'index.html',
                  reportName: 'Serenity Report',
                  reportTitles: '',
                  useWrapperFileDirectly: true])
            }
        }
    }
}
