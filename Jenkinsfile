pipeline {
   agent { docker { image 'mcr.microsoft.com/playwright:v1.32.0-focal' } }
   stages {
      stage('Install dependencies') {
         steps {
            sh 'npm install'
            sh 'Install rimraf'
         }
      }
      stage('Run tests') {
         steps {
            sh 'npm run test:execute'
         }
      }
   }
}
