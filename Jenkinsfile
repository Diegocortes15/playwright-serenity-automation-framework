pipeline {
   agent any
   stages {
      stage('install dependencies') {
         steps {
            sh 'npm install && npm install rimraf'
         }
      }
      stage('run tests') {
         steps {
            sh 'npm run test:execute'
         }
      }
   }
}
