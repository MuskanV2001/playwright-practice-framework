pipeline {

    agent any

    stages {

        stage('Git Checkout'){
            steps{
                git branch: 'QA_Muskan',
                url: 'https://github.com/MuskanV2001/playwright-practice-framework.git'
            }
        }

        stage('Installing Dependencies'){
            steps{
                bat 'npm install'
            }
        }

        stage('Installing Playwright Browsers'){
            steps{
                bat 'npm install playwright'
            }
        }

        stage('Running test script'){
            steps{  
                bat 'npm run test:allure'
            }
        }

    }

    post {

        success{
            echo 'Test Passed!'
        }

        failure{
            echo 'Test Failed!!'
        }

    }


}