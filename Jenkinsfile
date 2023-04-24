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
            publishHTML(target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'retarget/site/serenityports',
                    reportFiles: 'index.html',
                    reportName: 'Serenity'
                ])
            }
      }
   }
}
