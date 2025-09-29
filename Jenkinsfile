def maven_tool = 'apache-maven-3.9.6'
pipeline {
	agent any
	options {
        disableConcurrentBuilds()
    }
	parameters {
        string(name: "SOURCE_BRANCH", defaultValue: "origin/", trim: true, description: "Source branch name to build i.e. origin/. The default branch is master.")
    }
	stages {
		stage ('Build') {
			steps {
				script {
                        // Running Maven to get the POM version
                        def POM_VERSION = sh(script: '''
                            mvn --settings settings.xml -q -N -Dexec.executable="echo" -Dexec.args='${project.version}' org.codehaus.mojo:exec-maven-plugin:1.3.1:exec
                        ''', returnStdout: true).trim()
                        echo "----- POM Version ${POM_VERSION} -----"
                        def baseVersion = POM_VERSION.replace('-SNAPSHOT', '')
                        echo "----- Base Version: ${baseVersion} -----"

						def finalVersion = "${baseVersion}-${env.BUILD_NUMBER}"
    					echo "----- Final Version: ${finalVersion} -----"

                        env.POM_VERSION = POM_VERSION
                        env.POM_VERSION_REPLACED = finalVersion
                    }

					sh '''
					export PATH=${MAVEN_HOME}/bin:$PATH
					echo "----- Starting ${JOB_BASE_NAME} build -----"
					env
					echo "----- Downloading sub-modules -----"
					git submodule update --init
					echo "----- Updating Project Module Versions -----"
					mvn -N versions:update-child-modules -DgenerateBackupPoms=false
					echo "----- Building ${JOB_BASE_NAME} -----"
					echo "Branch to build: ${SOURCE_BRANCH}"
					sed -i "s/-SNAPSHOT/-$POM_VERSION_REPLACED/g" pom.xml
					cat pom.xml
					# mvn clean deploy --settings settings.xml
					'''
			}
		}
	}
    post
	    {
        failure {
            echo '---------- Build Failure Notification ----------'
            mail to: 'manoj.bardhan@actian.com',
			subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
			body: "Something is wrong with ${env.BUILD_URL}"
        }
        unstable {
            echo '---------- Build Unstable Notification ----------'
            mail to: 'manoj.bardhan@actian.com',
			subject: "Unstable Pipeline: ${currentBuild.fullDisplayName}",
			body: "Something is wrong with ${env.BUILD_URL}"
        }
        cleanup {
			cleanWs()
        }
    }
}