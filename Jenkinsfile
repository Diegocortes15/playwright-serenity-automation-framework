pipeline {
   agent {
      docker {
         image 'mcr.microsoft.com/playwright:v1.32.3-focal'
      }
   }
   stages {
      stage('install dependencies') {
         steps {
            sh '''
            npm install
            install rimraf
            '''
         }
      }
      stage('run tests') {
         steps {
            sh 'npm run test:execute'
         }
      }
   }
}
