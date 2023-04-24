pipeline {
   agent any
   stages {
      stage('install dependencies') {
         steps {
            sh 'npm install '
         }
      }
      stage('install rimraf') {
         steps {
            sh 'npm install rimraf'
         }
      }
      stage('run tests') {
         steps {
            sh 'npm run test:execute'
         }
      }
   }
}
