def maven_tool = 'apache-maven-3.9.6'
pipeline {
	agent any
	options {
        disableConcurrentBuilds()
    }
	parameters {
        string(name: "SOURCE_BRANCH", defaultValue: "origin/", trim: true, description: "Source branch name to build i.e. origin/. The default branch is master.")
		// Environment selection for deployment. NETLIFY option is for supporting currently deployed site,  until we move to new infra.
		choice(
            name: "ENVIRONMENT",
            choices: ["dev", "test", "stage", "production", "netlify"],
            description: "Select environment to deploy the artifacts. Netlify option is for supporting currently deployed site, until we move to new infra."
        )
    }
	stages {
		stage ('Build') {
			steps {
				script {
						echo "----- Build Started for ${JOB_BASE_NAME} -----"
						echo "----- Environment is : ${params.ENVIRONMENT} -----"
						echo "----- Source Branch: ${params.SOURCE_BRANCH} -----"

						
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
					sh """
						export PATH=${MAVEN_HOME}/bin:$PATH
						echo "----- Downloading sub-modules -----"
						git submodule update --init

						echo "----- Updating Project Module Versions -----"
						mvn -N versions:update-child-modules -DgenerateBackupPoms=false

						echo "----- Building with version - ${env.POM_VERSION_REPLACED} -----"
						mvn versions:set -DnewVersion=${env.POM_VERSION_REPLACED} -DgenerateBackupPoms=false -f pom.xml
						
						echo "----- Building for ${params.ENVIRONMENT} -----"
						mvn clean -P${params.ENVIRONMENT} deploy --settings settings.xml
						echo "----- Build Completed for ${JOB_BASE_NAME} -----"
						echo "----- Artifacts deployed to Nexus Repository -----"
					"""
			}
		}
	}
    post
	    {
        failure {
            echo '---------- Build Failure Notification ----------'
            mail to: 'DataConnect.Cloud.Platform@actian.com',
			subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
			body: "Something is wrong with ${env.BUILD_URL}"
        }
        unstable {
            echo '---------- Build Unstable Notification ----------'
            mail to: 'DataConnect.Cloud.Platform@actian.com',
			subject: "Unstable Pipeline: ${currentBuild.fullDisplayName}",
			body: "Something is wrong with ${env.BUILD_URL}"
        }
        cleanup {
			cleanWs()
        }
    }
}